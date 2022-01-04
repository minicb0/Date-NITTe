/* eslint-disable react/prop-types */
import React from 'react';
import Styles from './Style.module.css';

function SentMessage({ Msg }) {
    return (
        <div className={Styles.container}>
          <div className={Styles.Content}>
            <div className={Styles.Msg}>
              {Msg}
            </div>
          </div>
        </div>
    );
}

export default SentMessage;