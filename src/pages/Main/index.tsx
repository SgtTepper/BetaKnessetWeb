import Search from "./Search";
import PersonProfile from "./PersonProfile";

import "./index.css";
// @ts-ignore TODO: upgrade it
import { ScrollIntoView } from "rrc";
import { useLocation } from "react-router-dom";

export default function Main() {
    const location = useLocation();
    return (
        <ScrollIntoView id={location.hash}>
            <Search />
            <PersonProfile />
        </ScrollIntoView>
    );
}
