import React from 'react';
import classes from './Input.module.css';

function Input(props) {
  const {type = 'text'} = props;
    return (<input type={type} className={classes.active}/>
  )
}

export default Input
