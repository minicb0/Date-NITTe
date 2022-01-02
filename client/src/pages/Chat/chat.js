import React, { useState } from 'react';
import Navbars from '../Components/Navbar/Navbars';
import Styles from "./Style.module.css";
import ChatNames from "../Components/Chats/ChatNames/ChatNames";
import ChatMsg from '../Components/Chats/ChatMsg/ChatMsg';

export const Chat = () => {
const chat = "Chats";
const [Person, setPerson] = useState({});
const changePerson = (value) => {
    setPerson(value);
};
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
                <div className={Styles.chatss}>
                    <ChatNames
                        Name="Dinesh"
                        LastMsg="Hello"
                        Profile="114120074.jpg"
                        changePerson={changePerson}
                    />
                    <ChatNames
                        Name="M.Dinesh"
                        LastMsg="Who are you?"
                        Profile="send.png"
                        changePerson={changePerson}
                    />
                    <ChatNames
                        Name="ABCD"
                        LastMsg="I am here"
                        changePerson={changePerson}
                    />
                    <ChatNames
                        Name="EFGH"
                        LastMsg="What are you doing?"
                        changePerson={changePerson}
                    />
                    <ChatNames
                        Name="IJKL"
                        LastMsg="Hi"
                        changePerson={changePerson}
                    />
                    <ChatNames
                        Name="MNOP"
                        LastMsg="Are you playing?"
                        changePerson={changePerson}
                    />
                    <ChatNames
                        Name="QRST"
                        LastMsg="Bro, I am QRST"
                        changePerson={changePerson}
                    />
                    <ChatNames
                        Name="UVW"
                        LastMsg="May I know your Name?"
                        changePerson={changePerson}
                    />
                    <ChatNames
                        Name="XYZ"
                        LastMsg="Hi da !"
                        changePerson={changePerson}
                    />
                    <ChatNames
                        Name="123"
                        LastMsg="We are here"
                        changePerson={changePerson}
                    />
                    <ChatNames
                        Name="456"
                        LastMsg="We are arriving"
                        changePerson={changePerson}
                    />
                </div>
                </div>
                <div className={Styles.right}>
                    <ChatMsg
                        Person={Person}
                    />
                    {/* <div style={{ textAlign: "left" }} className={Styles.top}>
                        <div style={{ marginLeft: "15px" }}>
                            Dinesh
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</div>
    );
};