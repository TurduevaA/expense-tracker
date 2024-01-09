import React from "react";
// import "./ExpenseFilter.css"
import styled from "styled-components";

const ExpenseFilter = ({ value, onChange }) => {
  return (
    <StyledExpenseFilter>
      <ExpensesFilterControl>
        <Label>Filter by year</Label>
        <Select value={value} onChange={onChange}>
          <Option value="2024">2024</Option>
          <Option value="2023">2023</Option>
          <Option value="2022">2022</Option>
          <Option value="2021">2021</Option>
          <Option value="2020">2020</Option>
        </Select>
      </ExpensesFilterControl>
    </StyledExpenseFilter>
  );
};

export default ExpenseFilter;

const StyledExpenseFilter = styled.div`
  color: #861414;
  padding: 01rem;
`;
const ExpensesFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const Label = styled.label`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

const Select = styled.select`
  width: 124px;
  height: 43px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #fff;
  padding-left: 24px;
  font-weight: 600;
  font-size: 16px;
`;

const Option = styled.option`
  color: var(--Black, #222);
  font-size: 16px;
  font-weight: 600;
  padding-right: 14px;
`;
