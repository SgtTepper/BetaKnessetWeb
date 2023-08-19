import React from "react";
import { useQuery } from "../utils";
import { Link } from "react-router-dom";
import { Quote } from "../@types";

export default function DocumentLink({
    children,
    SessionType,
    DocumentID,
    Index,
    PersonID,
}: React.PropsWithChildren<
    Pick<Quote, "SessionType" | "DocumentID" | "Index" | "PersonID">
>) {
    const query = useQuery();

    const link = getDocumentLink({
        SessionType,
        DocumentID,
        Index,
        PersonID,
        query,
    });
    if (link === null) return children || <div />;

    return (
        <Link to={link}>
            <>{children}</>
        </Link>
    );
}

export function getDocumentLink({
    SessionType,
    DocumentID,
    Index,
    PersonID,
    query,
}: Pick<Quote, "SessionType" | "DocumentID" | "Index" | "PersonID"> & {
    query: string;
}) {
    const urlParams = new URLSearchParams();

    if (PersonID) urlParams.set("personID", PersonID.toString());
    if (query?.length) urlParams.set("q", query);
    if (Index !== undefined) urlParams.set("index", Index.toString());

    const urlExtension = `${DocumentID}?${urlParams.toString()}`;

    switch (SessionType) {
        case "Committee":
            return `/document/committee/${urlExtension}`;
        case "Plenum":
            return `/document/plenum/${urlExtension}`;
        default:
            return null;
    }
}
