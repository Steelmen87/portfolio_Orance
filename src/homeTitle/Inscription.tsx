import React from 'react';
import s from './style.module.css'
type propsType = {
    firstWord:string
    highlightedWord:string
    titleBG?:string
}
const Inscription = ({firstWord,highlightedWord,titleBG}:propsType) => {
    return (
        <section className={s.title_section}>
            <h1>{firstWord}
                <span>{highlightedWord}</span>
            </h1>
            <span className={`${s.title_bg}`}>{titleBG}</span>
        </section>
    );
};

export default Inscription;