import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
const SideDrawer = (props) =>{
    let attachedClasses =[classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses= [classes.SideDrawer,classes.Open];
    }
    return(
    <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attachedClasses.join(' ')}>
    <div className={classes.Logo}>  
        <Logo />
    </div>
    <nav>
        <Navigationitems />
    </nav>
    </div>
    </Aux>
    );
}
export default SideDrawer;