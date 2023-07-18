import Search from "./Search";
import PersonProfile from "./PersonProfile";

import "./index.css";
// @ts-ignore TODO: upgrade it
import { ScrollIntoView } from "rrc";
import { RouteComponentProps, useLocation } from "react-router-dom";

export default function Main(props: RouteComponentProps) {
    const location = useLocation();
    return (
        <ScrollIntoView id={location.hash}>
            <Search />
            <PersonProfile />
        </ScrollIntoView>
    );
}
