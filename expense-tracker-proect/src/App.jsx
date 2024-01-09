import React, { useState } from "react";
import { NewExpense } from "./components/new-expense/NewExpense";
import Expenses from "./components/expenses/Expenses";

const EXPENSES = [
  {
    id: "e1",
    title: "Food",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "Playstation 5",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e4",
    title: "asdf Insurance",
    amount: 1660.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);

  const onAddExpense = (newExpense) => {
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const onDeleteExpenseList = (newId) => {
    const filteredExpense = expenses.filter((item) => item.id !== newId);
    setExpenses(filteredExpense);
  };
  return (
    <>
      <NewExpense onAddExpense={onAddExpense} />
      <Expenses expenses={expenses} onDeleteExpenseList={onDeleteExpenseList} />
    </>
  );
};

export default App;
