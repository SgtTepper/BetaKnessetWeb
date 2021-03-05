import React from 'react'
import { FacebookIcon, TwitterIcon, WhatsappIcon, EmailIcon, FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from "react-share";

export default function VotesShareButtons() {
    const size = 30
    return (
        <div className='share-buttons'>
            <FacebookShareButton url='https://www.betaknesset.com/apps/votes' quote={`גיליתי איזה חברי כנסת באמת עושים משהו בשבילי. רוצים גם?`}>
                <FacebookIcon size={size} round />
            </FacebookShareButton>
            <TwitterShareButton url='https://www.betaknesset.com/apps/votes' title={"גיליתי איזה חברי כנסת באמת עושים משהו בשבילי. רוצים גם?"}>
                <TwitterIcon size={size} round />
            </TwitterShareButton>
            <WhatsappShareButton url='https://www.betaknesset.com/apps/votes' title={"גיליתי איזה חברי כנסת באמת עושים משהו בשבילי. רוצים גם?"}>
                <WhatsappIcon size={size} round />
            </WhatsappShareButton>
        </div>
        )
}