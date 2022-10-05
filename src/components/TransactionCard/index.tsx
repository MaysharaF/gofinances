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

export interface TransactionCardProps {
  data: {
    type: "positive" | "negative";
    title: string;
    amount: string;
    date: string;
    category_name: string;
    icon: string;
  };
}

const TransactionCard: React.FC<TransactionCardProps> = ({ data }) => {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

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
