import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/mealsOverview/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(route.params.CategoryId) >= 0;
  });

  useLayoutEffect(() => {
    const title = CATEGORIES.find(
      (category) => category.id === route.params.CategoryId
    ).title;
    navigation.setOptions({
      title: title,
    });
  }, []);
  return <MealsList displayedMeals={displayedMeals} />;
}

export default MealsOverviewScreen;
