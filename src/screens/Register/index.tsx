import React, { useState } from "react";

import { Modal } from "react-native";

import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import TransactionTypeButton from "../../components/Forms/TransactionTypeButton";
import CategorySelectButton from "../../components/Forms/CategorySelectButton";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";

const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />

          <Input placeholder="Preço" />

          <TransactionsTypes>
            <TransactionTypeButton
              title="Income"
              type="up"
              onPress={() => handleTransactionsTypeSelect("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              title="Outcome"
              type="down"
              onPress={() => handleTransactionsTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </TransactionsTypes>

          <CategorySelectButton title="Categoria" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

export default Register;
