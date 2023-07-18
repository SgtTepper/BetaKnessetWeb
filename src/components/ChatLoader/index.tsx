import React from "react";
import "./index.css";

export default function ChatLoader({ show }: { show?: boolean }) {
    if (!show) return null;
    return (
        <div className="wrapper">
            <div className="chat-container">
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
            </div>
        </div>
    );
}

const ChatItem = function () {
    return (
        <div className="wrapper-cell">
            <div className="image"></div>
            <div className="text">
                <div
                    className="text-line"
                    style={{ width: `${75 + Math.random() * 25}%` }}
                >
                    {" "}
                </div>
                <div
                    className="text-line"
                    style={{ width: `${15 + Math.random() * 50}%` }}
                >
                    {" "}
                </div>
                {Math.random() > 0.25 && (
                    <div
                        className="text-line"
                        style={{ width: `${5 + Math.random() * 95}%` }}
                    >
                        {" "}
                    </div>
                )}
                {Math.random() > 0.5 && (
                    <div
                        className="text-line"
                        style={{ width: `${25 + Math.random() * 75}%` }}
                    >
                        {" "}
                    </div>
                )}
            </div>
        </div>
    );
};
