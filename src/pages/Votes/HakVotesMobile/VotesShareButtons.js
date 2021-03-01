import React from 'react'
import { FacebookIcon, TwitterIcon, WhatsappIcon, EmailIcon, FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from "react-share";

export default function VotesShareButtons() {
    const size = 30
    return (
        <div className='share-buttons'>
            <FacebookShareButton url={window.location.href} quote={`גיליתי איזה חברי כנסת באמת עושים משהו בשבילי. רוצים גם?`}>
                <FacebookIcon size={size} round />
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href} title={"גיליתי איזה חברי כנסת באמת עושים משהו בשבילי. רוצים גם?"}>
                <TwitterIcon size={size} round />
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href} title={"גיליתי איזה חברי כנסת באמת עושים משהו בשבילי. רוצים גם?"}>
                <WhatsappIcon size={size} round />
            </WhatsappShareButton>
        </div>
        )
}