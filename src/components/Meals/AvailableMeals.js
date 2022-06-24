import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Khinkali",
    description: "With pork and beef",
    price: 1,
  },
  {
    id: "m2",
    name: "Khachapuri",
    description: "700 grams of cheese and sulguni",
    price: 18.5,
  },
  {
    id: "m3",
    name: "Fried Chicken",
    description: "Chicken meat and sauce",
    price: 22.0,
  },
  {
    id: "m4",
    name: "Pork Barbecue",
    description: "Pork and onions",
    price: 18.0,
  },
  {
    id: "m5",
    name: "Kebab",
    description: "Lavash bread, beef and pork",
    price: 10.0,
  },
  {
    id: "m6",
    name: "Megrelian Kupati",
    description: "Pork meat",
    price: 15.0,
  },
  {
    id: "m7",
    name: "Chakafuli",
    description: "Cow meat, herbs, tkemali and wine",
    price: 25.0,
  },
  {
    id: "m8",
    name: "Eggplant",
    description: "Eggplant and walnuts",
    price: 9.0,
  },
  {
    id: "m9",
    name: "Georgian salad",
    description: "Cucumbers, tomatoes and walnuts",
    price: 7.0,
  },
  {
    id: "m10",
    name: "Pizza",
    description: "Fluffy dough, mozzarella, mushrooms, parmesan and ham",
    price: 15.5,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
