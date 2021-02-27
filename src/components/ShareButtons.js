import React from 'react'
import { FacebookIcon, TwitterIcon, WhatsappIcon, EmailIcon, FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from "react-share";

export default function ShareButtons({Text, Speaker, FilePath}) {
    const size = 18
    return (
        <div className='share-buttons'>
            <FacebookShareButton url={FilePath} quote={`${Speaker}: "${Text}"`}>
                <FacebookIcon size={size} round />
            </FacebookShareButton>
            <TwitterShareButton url={FilePath} title={`${Speaker}: "${Text}"`.substr(0, 220) + '...'}>
                <TwitterIcon size={size} round />
            </TwitterShareButton>
            <WhatsappShareButton url={FilePath} title={`${Speaker}: "${Text}"`} separator=" - ">
                <WhatsappIcon size={size} round />
            </WhatsappShareButton>
            <EmailShareButton url={FilePath} subject={"Cool quote i found on BetaKnesset"} body={`${Speaker}: "${Text}"`}>
                <EmailIcon size={size} round />
            </EmailShareButton>
        </div>
        )
}