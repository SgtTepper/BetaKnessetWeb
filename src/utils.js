import { useCallback, useState, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axiosRetry from "axios-retry";
import axios from "axios";

axiosRetry(axios, { retries: 3 });

/** helpers **/
export const toNiceDate = (d, hours = false) => {
    let date = `${d.getDate()}.${d.getMonth() + 1}.${(d.getFullYear() % 100)
        .toString()
        .padStart(2, "0")}`;
    if (hours)
        date = `${d.getHours().toString().padStart(2, "0")}:${d
            .getMinutes()
            .toString()
            .padStart(2, "0")}, ${date}`;
    return date;
};

export function cleanTextFromDB(text) {
    if (text[0] === "״" || text[0] === '"') {
        text = text.substring(1);
    }
    if (text[text.length - 1] === "״" || text[text.length - 1] === '"') {
        text = text.substring(0, text.length - 1);
    }

    return text.replace(/"+/g, '"').replace(/״+/g, "״");
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function imageOrDefault(url, identifier, size = 32) {
    if (url) return url;

    return `https://www.gravatar.com/avatar/${hashCode(
        identifier
    )}?s=${size}&d=identicon&r=PG`;
}

function hashCode(str) {
    var hash = 0,
        i,
        chr;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

export const getFullName = (p) => {
    if (!p) return "";
    const { FirstName, LastName } = p;
    return `${FirstName} ${LastName}`;
};

/** hooks **/
export function useSearchParams() {
    return new URLSearchParams(useLocation().search);
}

export function useQuery() {
    const urlQuery = useSearchParams();
    return (urlQuery.get("q") || "").replace("״", '"').replace("׳", "'");
}

export function usePersonID() {
    const urlQuery = useSearchParams();
    const raw = urlQuery.get("personID");
    if (!raw) return undefined;
    return parseInt(raw);
}

export function useIndex() {
    const urlQuery = useSearchParams();
    const raw = urlQuery.get("index");
    if (!raw) return undefined;
    return parseInt(raw);
}

export function useNavigate() {
    const currentQuery = useQuery();
    const currentPersonID = usePersonID();
    const currentLocation = useLocation();
    const history = useHistory();

    return useCallback(
        ({ location, hash, q, personID, ...params }) => {
            const urlParams = new URLSearchParams(params);

            q = q !== undefined ? q : currentQuery;
            if (q) urlParams.append("q", q);
            personID = personID !== undefined ? personID : currentPersonID;
            if (personID) urlParams.append("personID", personID);

            history.push(
                `${location || currentLocation.pathname}?${urlParams}${
                    hash || ""
                }`
            );
        },
        [currentQuery, currentPersonID, currentLocation, history]
    );
}

async function serverFetch({ url, params }) {
    return (
        await axios.get(url, {
            params,
            timeout: 10000,
        })
    ).data;
}

export function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}

export function useBigScreen() {
    return useMediaQuery("(min-width:600px) and (min-height:400px)");
}

// from https://usehooks.com/useLocalStorage/
export function useSessionStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from session storage by key
            const item = window.sessionStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to sessionStorage.
    const setValue = (value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to session storage
            window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    return [storedValue, setValue];
}

export function useCancellableFetch() {
    const cancelSource = useRef(null);
    return useCallback(async (url) => {
        if (cancelSource.current) {
            cancelSource.current.cancel("Cancelled by hook");
        }
        const cancelToken = axios.CancelToken;
        cancelSource.current = cancelToken.source();
        try {
            return await serverFetch({
                url,
                cancelToken: cancelSource.current.token,
            });
        } catch (thrown) {
            if (axios.isCancel(thrown)) {
                console.debug("Request canceled", thrown.message);
            } else {
                throw thrown;
            }
        }
    }, []);
}
