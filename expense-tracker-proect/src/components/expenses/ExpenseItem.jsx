import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Button from "../UI/button/Button";
import { Modal } from "../modal/Modal";
import styled from "styled-components";

const ExpenseItem = ({ title, amount, date, id, onDeleteExpenseList }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModalVisiblity = () => {
    setIsModalVisible((prev) => !prev);
  };
  return (
    <>
      <StyledExpenseItem>
        <ContainerTextDate>
          <ExpenseDate date={date} />
          <h2>{title}</h2>
        </ContainerTextDate>
        <ExpenseItemDescription>
          <ExpenseItemPrice>${amount}</ExpenseItemPrice>
          <Button onClick={showModalVisiblity}>delete</Button>
        </ExpenseItemDescription>
      </StyledExpenseItem>
      {isModalVisible && (
        <Modal
          onDeleteExpenseList={onDeleteExpenseList}
          id={id}
          onClose={showModalVisiblity}
        />
      )}
    </>
  );
};

export default ExpenseItem;

const StyledExpenseItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 1rem;
  margin: 1rem 0.5rem;
  border-radius: 12px;
  background-color: #4b4b4b;
  h2 {
    color: #3a3a3a;
    font-size: 1rem;
    flex: 1;
    margin: 0 1rem;
    color: white;
  }
`;
const ExpenseItemDescription = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 1;
`;
const ContainerTextDate = styled.div`
  display: flex;
  align-items: center;
`;
const ExpenseItemPrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.7rem 1rem;
  border-radius: 12px;
`;
