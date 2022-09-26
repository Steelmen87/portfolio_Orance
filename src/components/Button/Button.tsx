
import style from "../Button/style.module.css";
import React from "react";
type propsType = {
    title:string
}

export const Button = (props: propsType) => {
    return <div className={style.button}>{props.title}</div>
}