import "../Expenses/ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const titleHandler = () => {
    setTitle("updated!");
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2> {title} </h2>
        <div className="expense-item__price"> ${props.amount} </div>
        <button onClick={titleHandler}>Change Title</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
