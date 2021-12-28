/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Styles from './Style.module.css';

function ChatNames({ Name, LastMsg }) {
    return (
        <div className={Styles.container}>
            <div className="mt-2" />
            <div className={Styles.Name}>
                { Name }
            </div>
            <div className={Styles.Message}>
                { LastMsg }
            </div>
        </div>
    );
}

export default ChatNames;