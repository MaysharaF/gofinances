import React, { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import HighlightCard from "../../components/HighlightCard";
import TransactionCard, {
  ITransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  Icon,
  CardList,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
} from "./styles";

export interface DataListProps extends ITransactionCardProps {
  id: string;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataListProps[]>();
  const dataKey = "@gofinances:transactions";

  async function loadTransictions() {
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map(
      (transaction: DataListProps) => {
        const amount = Number(transaction.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(transaction.date));

        return {
          id: transaction.id,
          name: transaction.name,
          amount,
          type: transaction.type,
          category: transaction.category,
          date,
        };
      }
    );

    setData(transactionsFormatted);
  }

  useEffect(() => {
    loadTransictions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransictions();
    }, [])
  );

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/43793682?v=4",
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Mayshara</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <CardList>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </CardList>

      <Transactions>
        <Title>Transações</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
