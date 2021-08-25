import React, { useState } from "react";
import Card from "./Card";
import AddButton from "./AddButton";
import classes from "./ErrorModul.module.css";
const ErrorModul = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <AddButton>Okey</AddButton>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModul;
