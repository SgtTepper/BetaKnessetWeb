import React from 'react'
import { usePersonID, useQuery } from '../utils'
import { Link } from 'react-router-dom'

export default function DocumentLink({children, SessionType, DocumentID, Index}) {
    const personID = usePersonID()
    const query = useQuery()

    const link = getDocumentLink({SessionType, DocumentID, Index, personID, query})
    if (link === null)
        return children || <div/>

    return <Link to={link}>{children}</Link>
}

export function getDocumentLink({SessionType, DocumentID, Index, query, personID}) {
    switch (SessionType) {
        case "Committee":
            return `/document/committee/${DocumentID}${personID ? `?personID=${personID}&q=${query}` : ''}#q${Index}`
        case "Plenum":
            return `/document/plenum/${DocumentID}${personID ? `?personID=${personID}&q=${query}` : ''}#q${Index}`
        default:
            return null
    }
}