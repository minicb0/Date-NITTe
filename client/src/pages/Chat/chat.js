import React from 'react';
import Navbars from '../Components/Navbar/Navbars';
import Styles from "./Style.module.css";
import ChatNames from "../Components/Chats/ChatNames/ChatNames";

export const Chat = () => {
const chat = "Chats";
    return (
<div>
    <div className={Styles.container}>
        <Navbars />
        <div className={Styles.content}>
            <div className={Styles.grid}>
                <div className={Styles.left}>
                    <div className={Styles.top} style={{ fontWeight: 'bold', fontSize: '25px' }}>
                        { chat }
                    </div>
                    <ChatNames
                        Name="Dinesh"
                        LastMsg="Hello"
                    />
                    <ChatNames
                        Name="M.Dinesh"
                        LastMsg="Who are you?"
                    />
                </div>
                <div className={Styles.right}>
                    <div style={{ textAlign: "left" }} className={Styles.top}>
                        <div style={{ marginLeft: "15px" }}>
                            Dinesh
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};