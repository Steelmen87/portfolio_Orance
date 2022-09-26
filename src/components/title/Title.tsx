import React from 'react';
import s from './styleTitle.module.css'
type propsType = {
    firstWord:string
    highlightedWord:string
}
const Title = ({firstWord,highlightedWord}:propsType) => {
    return (
        <section className={s.titleComponent}>
            <h1>{firstWord}
                <span>{highlightedWord}</span>
            </h1>
        </section>
    );
};

export default Title;