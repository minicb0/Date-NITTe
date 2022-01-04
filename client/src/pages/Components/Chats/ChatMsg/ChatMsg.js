/* eslint-disable react/prop-types */
import React from 'react';
import Styles from "./Style.module.css";
import Sent from '../SentMessage/SentMessage';
import Received from '../ReceivedMessage/ReceivedMessage';

function ChatMsg({ Person }) {
    // const image = "images/".concat(Profile);
    const image = "images/".concat(Person.Profile);
    const Name = Person.Name;
    return (
        <div className={Styles.container}>
            <div className={Styles.top}>
                <div className={Styles.img}>
                    <img className={Styles.image} src={image} alt="profile" />
                </div>
                <div className={Styles.Name}>
                    {Name}
                </div>
            </div>

            <div className={Styles.body}>
                <Sent
                    Msg="123"
                />
                <Sent
                    Msg="456"
                />
                <Sent
                    Msg="789"
                />
                <Sent
                    Msg="10 11 12"
                />
                <Received
                    Msg="asd lkjhdfas akjsdhaksjf lkasjfhkasjfhak hjgkjhg kkjhgasdkjh kjgasdkfjgaskdjf "
                />
                <Received
                    Msg="Subash"
                />
                <Sent
                    Msg="Dinesh"
                />
                <Sent
                    Msg="10 11 12 abcd efgh ijklm nop qrst  uv w xyz akjh hjello  tihjs is dfinesh adn what are yoiu diung "
                />
                <Received
                    Msg="546"
                />
                <Received
                    Msg="546"
                />
            </div>
        </div>
    );
}

export default ChatMsg;