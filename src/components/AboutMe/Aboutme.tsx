import React from 'react';
import s from "../../AppStyle.module.css";
import Inscription from "../../homeTitle/Inscription";
import BoxStats from '../Personalinfo/BoxStats/BoxStats';
import PersonalInfo from '../Personalinfo/PersonalInfo';
import style from './style.module.css'

const AboutMe = () => {
    return (
        <div className={`${s.container} ${s.container_pluse}`}>
            <Inscription firstWord={"About"} highlightedWord={"Me"} titleBG={"resume"}/>
            <section className={s.data}>
                <PersonalInfo/>
                <BoxStats/>
            </section>
            <hr className={s.separator}/>
            <div className={style.custom_title}>My Skills</div>
            <div className={style.container_skills}>
                <section className={style.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </section>

            </div>
            <hr className={s.separator}/>
            <div className={style.custom_title}>EXPERIENCE & EDUCATION</div>
        </div>
    );
};

export default AboutMe;

const Skill = () => {
    return (
        <div className={style.skill}>
            Skill
        </div>
    )
}