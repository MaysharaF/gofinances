import React from "react";

import {
  Container,
  Amount,
  Category,
  CategoryName,
  Date,
  Footer,
  Icon,
  Title,
} from "./styles";

const TransactionCard: React.FC = () => {
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>

      <Amount>R$ 12.000,00</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>28/09/2022</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
