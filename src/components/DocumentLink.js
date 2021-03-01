import React from 'react'
import { useQuery } from '../utils'
import { Link } from 'react-router-dom'

export default function DocumentLink({children, SessionType, DocumentID, Index, PersonID}) {
    const query = useQuery()

    const link = getDocumentLink({SessionType, DocumentID, Index, PersonID, query})
    if (link === null)
        return children || <div/>

    return <Link to={link}>{children}</Link>
}

export function getDocumentLink({SessionType, DocumentID, Index, query, PersonID}) {
    switch (SessionType) {
        case "Committee":
            return `/document/committee/${DocumentID}${PersonID ? `?personID=${PersonID}&q=${query}` : ''}#q${Index}`
        case "Plenum":
            return `/document/plenum/${DocumentID}${PersonID ? `?personID=${PersonID}&q=${query}` : ''}#q${Index}`
        default:
            return null
    }
}