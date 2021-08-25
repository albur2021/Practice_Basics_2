import React, { useState } from 'react';
import classes from './AddButton.module.css';

const AddButton = (props) =>{

return(
  <button 
  className={classes.button} 
  type={props.type || 'button'}
  onClick={props.onClick}
  >
      {props.children}

  </button>
  
  )
}


export default AddButton;