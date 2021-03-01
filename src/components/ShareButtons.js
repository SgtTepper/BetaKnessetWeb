import React from 'react'
import { FacebookIcon, TwitterIcon, WhatsappIcon, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

export default function ShareButtons({Text, Speaker, FilePath}) {
    const size = 18
    return (
        <div className='share-buttons'>
            <FacebookShareButton url={FilePath} quote={`${Speaker}: "${Text}"`}>
                <FacebookIcon size={size} round />
            </FacebookShareButton>
            <TwitterShareButton url={FilePath} title={`${Speaker}: "${Text.substring(0, 500)}${Text.length > 500 ? "..." : ''}"`}>
                <TwitterIcon size={size} round />
            </TwitterShareButton>
            <WhatsappShareButton url={FilePath} title={`${Speaker}: "${Text}"`} separator=" - ">
                <WhatsappIcon size={size} round />
            </WhatsappShareButton>
        </div>
        )
}