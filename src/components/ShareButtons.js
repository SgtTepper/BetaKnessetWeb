import React from 'react'
import { TelegramIcon, TwitterIcon, WhatsappIcon, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

export default function ShareButtons({Text, Speaker, FilePath}) {
    const size = 18
    return (
        <div className='share-buttons'>
            <TelegramShareButton url={FilePath} title={`${Speaker}: "${Text}"}`}>
                <TelegramIcon size={size} round />
            </TelegramShareButton>
            <TwitterShareButton url={FilePath} title={`${Speaker}: "${Text.substring(0, 500)}${Text.length > 500 ? "..." : ''}"`}>
                <TwitterIcon size={size} round />
            </TwitterShareButton>
            <WhatsappShareButton url={FilePath} title={`${Speaker}: "${Text}"`} separator=" - ">
                <WhatsappIcon size={size} round />
            </WhatsappShareButton>
        </div>
        )
}