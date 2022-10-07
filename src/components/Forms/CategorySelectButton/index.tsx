import React from "react";

import { Container, Category, Icon } from "./styles";

interface IProps {
  title: string;
  onPress: () => void;
}

const CategorySelectButton: React.FC<IProps> = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelectButton;
