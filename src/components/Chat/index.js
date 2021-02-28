import React, { useState } from 'react'
import Highlighter from "react-highlight-words"
import clsx from 'clsx'
import './index.css'
import {ScrollIntoView} from 'rrc'
import { useLocation } from "react-router-dom"
import { imageOrDefault } from "../../utils"
import QuoteFooter from "../QuoteFooter"

const ColorHash = require('color-hash')
const colorHash = new ColorHash({lightness: .4})

export default function Chat({items}) {
    const location = useLocation()
    return (
        <ScrollIntoView id={location.hash}>
            <ol className="chat">
                {items.map(i => <ChatItem key={i.Index} {...i} />)}
            </ol>
        </ScrollIntoView>
    )
}

function ChatItem(props) {
    const {Index, Text, imgPath, Speaker, isSpeaker, isContinuation, highlight, isInProtocol} = props
    const [expanded, setExpanded] = useState(isInProtocol)

    return (
        <li 
            className={clsx(
                expanded && 'expanded',
                isInProtocol ? 'in-protocol' : 'not-in-protocol', 
                isSpeaker === true ? 'self' : 'other',
                isContinuation && 'continuation')}
            id={`q${Index}`}
        >
            <div className="avatar">
                <div className="img" style={{backgroundImage: `url(${imageOrDefault(imgPath, Speaker)})`}}/>
            </div>
            <div className="msg" onClick={() => !isInProtocol && setExpanded(!expanded)}>
                {Speaker &&
                    <p className="speaker" style={isSpeaker ? {} : {color: colorHash.hex(Speaker)}}>{Speaker}</p>}
                <p className={clsx(expanded && "expanded")}>
                <Highlighter 
                    highlightStyle={{
                    backgroundColor: '#f0c351'
                    }}
                    searchWords={highlight ? highlight.split("^") : []} 
                    autoEscape={true}
                    textToHighlight={expanded ? Text : trimText(Text, highlight)} 
                />
                </p>
                <time><QuoteFooter {...props} /></time>
            </div>
        </li>
    )
}


const MAX_WORDS = 40
function trimText(text, term) {
    if (!term || text.indexOf(term) === -1) {
        const parts = text.split(' ')
        if (parts.length <= MAX_WORDS)
            return text
        return parts.slice(0, MAX_WORDS).join(' ') + "..."
    }

    // focus on the quote
    const bigParts = text.split(term)
    const words = []
    let current = 0, i, j
    let before = [], after = []
    let lastMax = 0

    const maxPerSlice = Math.max(4, parseInt(MAX_WORDS / (bigParts.length - 1) / 2))
    while (current < bigParts.length - 1 && words.length < MAX_WORDS) {
        before = bigParts[current].split(' ')
        after = bigParts[current + 1].split(' ')

        i = Math.max(0, before.length - maxPerSlice - 1, lastMax)
        j = 0

        if ((current !== 0 || i !== 0) && i !== lastMax)
        words.push('...')

        while (words.length < MAX_WORDS && i < before.length) {
            words.push(` ${before[i++]}`)
        }
        words.push(term)
        while (words.length < MAX_WORDS && j < Math.min(maxPerSlice, after.length)) {
            words.push(`${after[j++]} `)
        }
        
        current++
        lastMax = j
    }

    if (current < bigParts.length - 1 || lastMax < after.length - 1)
        words.push('...')

    return words.join('')
}