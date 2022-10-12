import React from "react";

import { Container, Title, Amount } from "./styles";

interface IProps {
  color: string;
  title: string;
  amount: string;
}

const HistoryCard: React.FC<IProps> = ({ amount, color, title }) => {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
};

export default HistoryCard;
