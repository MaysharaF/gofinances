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

interface IProps {
  data: {
    title: string;
    amount: string;
    date: string;
    category_name: string;
    icon: string;
  };
}

const TransactionCard: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount>{data.amount}</Amount>

      <Footer>
        <Category>
          <Icon name={data.icon} />
          <CategoryName>{data.category_name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
