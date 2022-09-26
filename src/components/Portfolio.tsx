import React from 'react';
import s from "../AppStyle.module.css";
import Title from "./title/Title";
import Inscription from "../homeTitle/Inscription";

const Portfolio = () => {
    return (
        <div className={s.container}>
            <Inscription firstWord={"My"} highlightedWord={"portfolio"}titleBG={"works"}/>
        </div>
    );
};

export default Portfolio;