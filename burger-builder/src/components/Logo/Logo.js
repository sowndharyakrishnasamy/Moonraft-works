import React from 'react';
import burgerLogo from '../../assets/127 burger-logo.png';
import classes from './Logo.css';
const Logo =(props) =>(
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MYBURGER"/>
    </div>
);
export default Logo;