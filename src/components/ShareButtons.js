// src/app/components/ShareButtons.js
'use client'

import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, XIcon, LinkedinIcon } from 'react-share';

export default function ShareButtons({ url, title }) {
    return (
        <div className="py-12 border-t border-b border-gray-200">
            <h3 className="text-center font-semibold text-gray-700 mb-4">Bu Yazıyı Paylaş</h3>
            <div className="flex justify-center space-x-4">
                <FacebookShareButton url={url} quote={title}>
                    <FacebookIcon size={40} round />
                </FacebookShareButton>
                <TwitterShareButton url={url} title={title}>
                    <XIcon size={40} round />
                </TwitterShareButton>
                <LinkedinShareButton url={url} title={title}>
                    <LinkedinIcon size={40} round />
                </LinkedinShareButton>
            </div>
        </div>
    )
}