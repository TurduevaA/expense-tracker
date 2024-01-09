import React from "react";
import "./ExpenseDate.css";
import styled from "styled-components";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("ru-Us", { month: "long" });
  const day = date.toLocaleString("ru-Us", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <StyledExpenseDate>
      <ExpenseMonth>{month} </ExpenseMonth>
      <ExpenseYear>{year}</ExpenseYear>
      <ExpenseDateDay>{day}</ExpenseDateDay>
    </StyledExpenseDate>
  );
};

export default ExpenseDate;

const StyledExpenseDate = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;
const ExpenseMonth = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;
const ExpenseYear = styled.div`
  font-size: 0.75rem;
`;
const ExpenseDateDay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
