import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar src="https://avatars.dicebear.com/api/male/k.svg" />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last message....</p>
            </div>
        </div>
    );
};

export default SidebarChat;
