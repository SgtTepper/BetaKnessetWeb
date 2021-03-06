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

export function getDocumentLink({SessionType, DocumentID, Index, PersonID, query}) {
    const urlParams = new URLSearchParams()

    if (PersonID)
        urlParams.set('personID', PersonID)
    if (query?.length)
        urlParams.set('q', query)

    const urlExtension = `${DocumentID}?${urlParams.toString()}${Index !== undefined ? `#q${Index}` : ``}`

    switch (SessionType) {
        case "Committee":
            return `/document/committee/${urlExtension}`
        case "Plenum":
            return `/document/plenum/${urlExtension}`
        default:
            return null
    }
}