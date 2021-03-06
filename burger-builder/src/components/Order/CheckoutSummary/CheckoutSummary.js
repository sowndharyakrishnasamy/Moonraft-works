import React from 'react';

import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary =(props) =>{
    console.log(props.ingredients)
    return(
        <div className={classes.CheckOutSummary}>
            <h1>We hope it tastes well</h1>
            <div style= {{ width:'100%',margin:'auto'}}>
            <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnTypes="Danger" clickedmodal = {props.checkoutCancelled}>CANCEL</Button>
            <Button btnTypes="Success" clickedmodal ={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )

}
export default CheckoutSummary;
