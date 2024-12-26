import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CaregoryGridTiles from "../components/catergoryScreen/CaregoryGridTiles";

export default function CategoryScreen({ navigation }) {
  const renderCategoryItems = (itemData) => {
    const onPressHandler = () => {
      navigation.navigate("MealsOverview", { CategoryId: itemData.item.id });
    };
    return (
      <CaregoryGridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItems}
      numColumns={2}
    />
  );
}
