import React from "react";
import { ChartBar } from "./ChartBar";
import styled from "styled-components";

const Chart = ({ expenses }) => {
  const maxPrice = 2000;
  const month = [
    {
      label: "Ян",
      currentPrice: 0,
    },
    {
      label: "Февраль",
      currentPrice: 0,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Апр",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Авг",
      currentPrice: 0,
    },
    {
      label: "Сен",
      currentPrice: 0,
    },
    {
      label: "Октябрь",
      currentPrice: 0,
    },
    {
      label: "Ноябрь",
      currentPrice: 0,
    },
    {
      label: "Декабрь",
      currentPrice: 0,
    },
  ];

  expenses.forEach((item) => {
    const filteredPrice = item.date.getMonth();
    month[filteredPrice].currentPrice += item.amount;
  });
  return (
    <StyledChart>
      {month.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          currentPrice={item.currentPrice}
          maxPrice={maxPrice}
        />
      ))}
    </StyledChart>
  );
};

export default Chart;

const StyledChart = styled.div`
  width: 100%;
  background-color: #f8dfff;
  padding: 1rem;
  height: 151px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
`;
