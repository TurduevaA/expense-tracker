import React from "react";
import { useState } from "react";
import Button from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import styled from "styled-components";

export const ExpenseForm = ({ handleClick, onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // уч инпуттун значениесин алыш учун ар бирине озунчо состояние тузулду

  const handleNewExpense = () => {
    //  add expenses button басылганда эгерде инпуттун ичинде пробелдер болуп калса аларды
    // алып салып,ичине жазылгандарды чыгарып беруучу функция.
    const isFormValid =
      title.trim().length !== 0 &&
      amount.trim().length !== 0 &&
      date.trim().length !== 0;

    if (isFormValid) {
      const newExpense = {
        title: title,
        amount: +amount,
        date: new Date(date),
        id: Date.now().toString(),
      };
      onAddExpense(newExpense);
      // пропс кылып newExpenseге которуп бардык

      setTitle("");
      setAmount("");
      setDate("");
      //инпуттарга бир нерсе жазылгандан кийин ичи сразу тазаданып калат
    } else {
      alert("Заполните все поля!");
    }
  };
  // форм тегдин озунун по умолчанию обновлениеси болот ошону токтотуш учун preventDevault жазылды

  return (
    <FormContainer onSubmit={(event) => event.preventDefault()}>
      <Row>
        <label>
          Title
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Amount
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          Date
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </Row>
      <ButtonContainer>
        <Button onClick={() => handleClick()}>Cancel</Button>
        <Button type="submit" onClick={handleNewExpense}>
          Add Expenses
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};
const FormContainer = styled.form`
  background-color: #ad9be9;
  border-radius: 12px;
  padding: 30px 40px;
  margin-top: 50px;
  width: 810px;
  label {
    display: flex;
    flex-direction: column;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
`;
