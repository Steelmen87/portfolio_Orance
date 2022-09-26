import React from 'react';
import s from "../AppStyle.module.css";
import Inscription from "../homeTitle/Inscription";

const Contact = () => {
    return (
        <div className={s.container}>
            <Inscription firstWord={"get in "} highlightedWord={"touch"}titleBG={"contact"}/>
        </div>
    );
};

export default Contact;