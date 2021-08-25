import React, { useState } from 'react';
import AddButton from '../UI/AddButton';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) =>{

const [enteredUserName,setEnteredUserName]=useState('');
const [enteredAge, setEnteredAge]=useState('');

const usernameChangeHandler = (event) =>{
    setEnteredUserName(event.target.value);
}
const ageChangeHandler = (event) =>{
    setEnteredAge(event.target.value);
}

const addUserHandler = (event)=>{
    event.preventDefault();
    

    //Validation - is not empty, 
    //'trim()' removes all white space, 
    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
        return;
    }
    //and '+enteredAge' helps to identify whether it's number
    if(+enteredAge < 1){
        return;
    }
    // console.log(enteredUserName, enteredAge);
    props.onAddUser( enteredUserName, enteredAge);// comming from App.js
    setEnteredUserName('');// sets to update/empty input after been submitted
    setEnteredAge('');
};

return(
  <Card className={classes.input}>
       <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUserName}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
        <AddButton type="submit">Add User</AddButton>
    </form>
  </Card>
   
  
  )
}


export default AddUser;