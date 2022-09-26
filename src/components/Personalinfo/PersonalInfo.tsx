import React from 'react';
import s from './style.module.css'
import {Button} from "../Button/Button";


const PersonalInfo = () => {
    const col1 = [
        'First Name: Lucy',
        'Last Name: Milner',
        'Age: 27 Years',
        'Nationality: Tunisian',
        'Freelance: Available'
    ]
    const col2 = [
        'Address : Tunis',
        'Phone : +21621184010',
        'Email : you@mail.com',
        'Skype : lucy.milner',
        'Langages :  English'
    ]
    return (
        <div className={s.container_info}>
            <div className={s.title}>PERSONAL INFO</div>
            <div className={s.ulFlex}>
                <div>
                    <ul>
                        {col1.map((el, id) =>
                            <li className={s.liClass} key={id}>
                                {el}
                            </li>)}
                    </ul>
                </div>
                <div>
                    <ul>
                        {col2.map((el, id) =>
                            <li className={s.liClass} key={id}>
                                {el}
                            </li>)}
                    </ul>
                </div>
            </div>
            <Button title={"resume"}/>
        </div>
    );
};

export default PersonalInfo;

