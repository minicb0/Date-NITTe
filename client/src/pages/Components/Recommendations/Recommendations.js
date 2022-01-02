/* eslint-disable arrow-body-style */
import React from 'react';
import Styles from './Style.module.css';

function Recommendation() {
    const image = "images/".concat("114120074.jpg");
    const Name = "M.Dinesh";
    const Tags = ["Swimmer", "Bowler"];
    const Info = "I am Professional in Swimming and also love playing Cricket. I am doing B.Tech in Production Department ";
    return (
        <div className={Styles.container}>
            <div>
                <img className={Styles.image} src={image} alt="profile" />
            </div>
            <div className={Styles.Name}>
                { Name }
            </div>
            <div className="mt-3">
                Tags :
                {Tags.map((tag) => {
                    return (
                    <div className={Styles.Tags}>{tag}</div>
                    );
                })}
            </div>
            <div className={Styles.Info}>{Info}</div>
            <div className={Styles.Symbols}>
                <div className={Styles.Thumbs}>
                    <i className="fas fa-thumbs-up" />
                </div>
            </div>
        </div>
    );
}

export default Recommendation;