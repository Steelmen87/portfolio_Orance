import React from 'react';
import './App.css';
import s from './AppStyle.module.css'

import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import {Home} from "./components/Home";
import AboutMe from "./components/AboutMe/Aboutme";

function App() {
    return (
        <Router>
            <div className={s.main_container}>
                <Switch>
                    <Route path="/about"><AboutMe/></Route>
                    <Route path="/portfolio"><Portfolio/></Route>
                    <Route path="/contact"><Contact/></Route>
                    <Route exact path="/"><Home/></Route>
                </Switch>
                <div className={s.links}>
                    <NavLink to='/'>
                        <div className={s.link}>H</div>
                    </NavLink>
                    <NavLink to='/about'>
                        <div className={s.link}>A</div>
                    </NavLink>
                    <NavLink to='/portfolio'>
                        <div className={s.link}>P</div>
                    </NavLink>
                    <NavLink to='/contact'>
                        <div className={s.link}>C</div>
                    </NavLink>
                </div>
            </div>

        </Router>
    );
}

export default App;

