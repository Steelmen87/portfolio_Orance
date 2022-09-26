import React from 'react';
import s from './style.module.css'
type propsType = {
    age:number
    first:string
    second:string
}
const Box = (props:propsType) => {
    return (
        <div className={s.box}>
            <h3 className={s.poppins_font}>{props.age}</h3>
            <p className={s.box_p}>
                {props.first}
                <div>{props.second}</div>
            </p>
        </div>
    );
};

export default Box;