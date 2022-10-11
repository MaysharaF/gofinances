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

interface ICategoryProps {
  icon: string;
  name: string;
}

export interface ITransactionCardProps {
  type: "positive" | "negative";
  name: string;
  amount: string;
  date: string;
  category: ICategoryProps;
}

interface IProps {
  data: ITransactionCardProps;
}

const TransactionCard: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      <Title>{data.name}</Title>

      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
