import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";

import Input from "../Input";

import { Container } from "./styles";

interface IProps extends TextInputProps {
  control: Control;
  name: string;
}

const InputForm: React.FC<IProps> = ({ control, name, ...rest }) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => <Input {...rest} />}
        name={name}
      />
    </Container>
  );
};

export default InputForm;
