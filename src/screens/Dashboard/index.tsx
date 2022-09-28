import React from "react";

import HighlightCard from "../../components/HighlightCard";

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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </CardList>
    </Container>
  );
};

export default Dashboard;
