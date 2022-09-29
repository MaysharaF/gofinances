import React from "react";

import HighlightCard from "../../components/HighlightCard";
import TransactionCard from "../../components/TransactionCard";

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
} from "./styles";

const Dashboard: React.FC = () => {
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
          <Icon name="power" />
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

        <TransactionCard />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
