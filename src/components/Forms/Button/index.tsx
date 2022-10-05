import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface IProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<IProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
