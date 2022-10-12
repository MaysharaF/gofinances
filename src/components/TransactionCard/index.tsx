import React from "react";
import { categories } from "../../utils/categories";

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
  category: string;
}

interface IProps {
  data: ITransactionCardProps;
}

const TransactionCard: React.FC<IProps> = ({ data }) => {
  const [category] = categories.filter((item) => item.key === data.category);

  return (
    <Container>
      <Title>{data.name}</Title>

      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
