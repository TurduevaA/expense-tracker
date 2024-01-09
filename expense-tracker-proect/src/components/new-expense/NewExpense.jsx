import React from "react";
import { useState } from "react";
import Button from "../UI/button/Button";
import { ExpenseForm } from "./ExpenseForm";
import styled from "styled-components";

export const NewExpense = ({ onAddExpense }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  }; // cancel кнопкасы басылганда true false иштеп   true болсо ExpenseForm чыгып турат
  return (
    <WrapperForm>
      {isFormOpen ? (
        <ExpenseForm handleClick={handleClick} onAddExpense={onAddExpense} />
      ) : (
        <ContainerButton>
          <Button onClick={handleClick}>add a new Expense</Button>
        </ContainerButton>
      )}
    </WrapperForm>
  );
};
// если isFormOpen туура болуп калса экранга expenseForm чыгат болбосо false болуп калат да add a new Expense деген button корунот
const WrapperForm = styled.div`
  margin-bottom: 20px;
`;
const ContainerButton = styled.div`
  background-color: #ad9be9;
  height: 100px;
  width: 810px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-top: 50px;
`;
