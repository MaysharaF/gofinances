import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface IProps extends RectButtonProps {
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
