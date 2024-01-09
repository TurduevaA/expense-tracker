import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDeleteExpenseList }) => {
  return (
    <>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          {...item}
          onDeleteExpenseList={onDeleteExpenseList}
        />
      ))}
    </>
  );
};

export default ExpenseList;
