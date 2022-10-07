import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface IProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<IProps> = ({ title, onPress, ...rest }) => {
  return (
    <Container {...rest} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
