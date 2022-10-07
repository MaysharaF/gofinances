import React from "react";
import { FlatList } from "react-native";
import { categories } from "../../utils/categories";

import Button from "../../components/Forms/Button";

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from "./styles";

type Category = {
  key: string;
  name: string;
};

interface IProps {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

const CategorySelect: React.FC<IProps> = ({
  category,
  setCategory,
  closeSelectCategory,
}) => {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => setCategory(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
};

export default CategorySelect;
