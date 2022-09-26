import s from "../AppStyle.module.css";
import img from "../common/img/foto.png";
import React from "react";
import Inscription from "../homeTitle/Inscription";
import Title from "./title/Title";

export const Home = () => {
    return (
        <>
            <div className={s.color_block}></div>
            <div className={`${s.container} ${s.pluse_top}`}>
                <div className={s.main_photo}>
                    <img src={img} alt="main photo"/>
                </div>
                <div className={s.text_left}>
                    <div className={s.about_me}>
                        <Title firstWord={"Petrov Konstantin"} highlightedWord={"front-end-developer"}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem culpa deserunt dicta
                            distinctio eius facere hic laborum mollitia neque nobis perferendis placeat porro quam quia
                            quod rem, soluta, vitae?</p>
                    </div>
                </div>

            </div>
        </>)
}