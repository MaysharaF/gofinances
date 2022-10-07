import React, { useState } from "react";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";

import InputForm from "../../components/Forms/InputForm";
import Button from "../../components/Forms/Button";
import TransactionTypeButton from "../../components/Forms/TransactionTypeButton";
import CategorySelectButton from "../../components/Forms/CategorySelectButton";

import CategorySelect from "../CategorySelect";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";

export interface FormData {
  [name: string]: string;
}

const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "categoria",
  });

  const { control, handleSubmit } = useForm();

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  const handleRegister = (form: FormData) => {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
    console.log(data);
  };

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm placeholder="Nome" name="name" control={control} />

          <InputForm placeholder="Preço" name="amount" control={control} />

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

          <CategorySelectButton
            title={category.name}
            onPress={() => setCategoryModalVisible(true)}
          />
        </Fields>

        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>

      <Modal visible={categoryModalVisible}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={() => setCategoryModalVisible(false)}
        />
      </Modal>
    </Container>
  );
};

export default Register;
