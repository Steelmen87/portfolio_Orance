import React from 'react';
import s from "../AppStyle.module.css";
import Inscription from "../homeTitle/Inscription";
import BoxStats from './Personalinfo/BoxStats/BoxStats';
import PersonalInfo from './Personalinfo/PersonalInfo';

const AboutMe = () => {
    return (
        <div className={`${s.container} ${s.container_pluse}`}>
            <Inscription firstWord={"About"} highlightedWord={"Me"} titleBG={"resume"}/>
            <div className={s.data}>
                <PersonalInfo/>
                <BoxStats/>
            </div>
        </div>
    );
};

export default AboutMe;