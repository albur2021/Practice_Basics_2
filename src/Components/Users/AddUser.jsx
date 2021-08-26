import React, { useState } from "react";
import AddButton from "../UI/AddButton";
import Card from "../UI/Card";
import ErrorModul from "../UI/ErrorModul";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null); //set to falsy value;
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    //Validation - is not empty,
    //'trim()' removes all white space,
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    //and '+enteredAge' helps to identify whether it's number
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    // console.log(enteredUserName, enteredAge);
    props.onAddUser(enteredUserName, enteredAge); // comming from App.js
    setEnteredUserName(""); // sets to update/empty input after been submitted
    setEnteredAge("");
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModul
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUserName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <AddButton type="submit">Add User</AddButton>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
