import React, { useState } from 'react';
import AddButton from '../UI/AddButton';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) =>{
const addUserHandler = (event)=>{
    event.preventDefault();
};
return(
  <Card className={classes.input}>
       <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"/>
        <AddButton type="submit">Add User</AddButton>
    </form>
  </Card>
   
  
  )
}


export default AddUser;