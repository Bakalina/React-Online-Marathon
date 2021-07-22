import React from 'react';
import classes from './Button.module.css';

function Button(props) {
  const {text = 'Click Me'} = props;
    return (
        <button className={classes.active}>
      {text}
    </button>
  )
}

export default Button
