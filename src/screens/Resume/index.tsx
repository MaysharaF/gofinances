import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";

import { categories } from "../../utils/categories";
import { useTheme } from "styled-components";

import HistoryCard from "../../components/HistoryCard";

import { RFValue } from "react-native-responsive-fontsize";
import { Container, Header, Title, Content, ChatContainer } from "./styles";

interface ITransactionCardProps {
  type: "positive" | "negative";
  name: string;
  amount: string;
  date: string;
  category: string;
}

interface ICategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

const Resume: React.FC = () => {
  const [totalByCategories, setTotalByCategories] = useState<ICategoryData[]>(
    []
  );

  const theme = useTheme();

  const loadData = async () => {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensive: ITransactionCardProps) => expensive.type === "negative"
    );

    const expensivesTotal = expensives.reduce(
      (total: number, item: ITransactionCardProps) => {
        return total + +item.amount;
      },
      0
    );

    const totalByCategory: ICategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: ITransactionCardProps) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const percent = `${((categorySum / expensivesTotal) * 100).toFixed(
          0
        )}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          percent,
        });
      }
    });

    setTotalByCategories(totalByCategory);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <Content>
        <ChatContainer>
          <VictoryPie
            data={totalByCategories}
            x="percent"
            y="total"
            colorScale={totalByCategories.map((category) => category.color)}
            style={{
              labels: {
                fontSize: RFValue(18),
                fontWeight: "bold",
                fill: theme.colors.shape,
              },
            }}
            labelRadius={50}
          />
        </ChatContainer>

        {totalByCategories.map((totalCategory) => (
          <HistoryCard
            key={totalCategory.key}
            title={totalCategory.name}
            amount={totalCategory.totalFormatted}
            color={totalCategory.color}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Resume;
