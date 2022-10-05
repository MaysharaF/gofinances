import React from "react";

import { Container, Category, Icon } from "./styles";

interface IProps {
  title: string;
}

const CategorySelectButton: React.FC<IProps> = ({ title }) => {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelectButton;
