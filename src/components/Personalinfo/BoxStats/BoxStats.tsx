import React from 'react';
import Box from './Box/Box';
import s from './style.module.css'
const BoxStats = () => {
    return (
        <div className={s.container_boxState}>
            <Box age={12} first={'YEARS OF'} second={'EXPERIENCE'}/>
            <Box age={97} first={'COMPLETED'} second={'PROJECTS'}/>
            <Box age={81} first={'HAPPY'} second={'CUSTOMERS'}/>
            <Box age={53} first={'AWARDS'} second={'WON'}/>
        </div>
    );
};

export default BoxStats;