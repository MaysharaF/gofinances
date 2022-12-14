import React from "react";
import { TouchableOpacityProps } from "react-native";

import { SvgProps } from "react-native-svg";

import { Button, ImageContainer, Text } from "./styles";

interface IProps extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

const SignInSocialButton: React.FC<IProps> = ({ title, svg: Svg, ...rest }) => {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Text>{title}</Text>
    </Button>
  );
};

export default SignInSocialButton;
