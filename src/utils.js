import { useCallback, useState, useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom"

export const toNiceDate = (d, hours = false) =>  {
    let date = `${d.getDate()}.${d.getMonth() + 1}.${(d.getFullYear() % 100).toString().padStart(2, '0')}`
    if (hours)
        date = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}, ${date}`    
    return date
}
  
export function cleanTextFromDB(text) {
  if (text[0] === '״' || text[0] === '"') {
    text = text.substring(1)
  }
  if (text[text.length-1] === '״' || text[text.length-1] === '"') {
    text = text.substring(0, text.length - 1)
  }

  return text.replace(/"+/g, '"').replace(/״+/g, '״')
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function useSearchParams() {
  return new URLSearchParams(useLocation().search);
}

export function useQuery() {
  const urlQuery = useSearchParams()
  return urlQuery.get("q") || ""
}

export function usePersonID() {
  const urlQuery = useSearchParams()
  const raw = urlQuery.get("personID")
  if (!raw)
    return undefined
  return parseInt(raw)
}

export function useNavigate() {
  const currentQuery = useQuery()
  const currentPersonID = usePersonID()
  const currentLocation = useLocation()
  const history = useHistory()

  return useCallback(({location, hash, q, personID}) => {
    const params = new URLSearchParams()

    q = q !== undefined ? q : currentQuery
    if (q)
      params.append('q', q)
    personID = personID !== undefined ? personID : currentPersonID
    if (personID)
      params.append('personID', personID)
    
    history.push(`${location || currentLocation.pathname}?${params}${hash || ""}`)
  }, [currentQuery, currentPersonID, currentLocation, history])
}

export function imageOrDefault(url, identifier, size = 32) {
  if (url) return url
  
  return `https://www.gravatar.com/avatar/${hashCode(identifier)}?s=${size}&d=identicon&r=PG`
}

function hashCode(str) {
  var hash = 0, i, chr;
  for (i = 0; i < str.length; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
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