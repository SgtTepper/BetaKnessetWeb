import React from 'react'
import ShareButtons from './ShareButtons'
import { toNiceDate, useQuery } from '../utils'
import DocumentLink, { getDocumentLink } from './DocumentLink'

export default function QuoteFooter(props) {
    const {StartDate, TopicName, Text, Speaker, isInProtocol} = props
    const query = useQuery()
    return (
        <>
            {isInProtocol 
            ? <div />
            : 
                <DocumentLink {...props}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                            <b>לחצו לפרוטוקול המלא - </b>
                            <span style={{padding: '0 .5em'}}>{TopicName}</span>
                            <span className='go-suffix' style={{paddingLeft: '.5em'}}>❯❯❯</span>
                    </div>
                </DocumentLink>}
            <div style={{  whiteSpace: 'nowrap'}}>
                <ShareButtons FilePath={`https://${window.location.host}${getDocumentLink({...props, query})}`} Text={Text} Speaker={Speaker} />
                <div className='date-string'>{toNiceDate(new Date(StartDate), true)}</div>
            </div>
        </>
    )
}