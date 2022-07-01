import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "In The Shadow Of Metekhi",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/09/47/2a/46/shadow-of-metekhi.jpg",
    address: "Ketevan Tzamuli Ave N29",
    environment: "10",
    service: "10",
    description: "Pork barbecue 10/10 - Chakondrili: 10/10 - Khachapuri: 9/10",
    price: 10,
  },
  {
    id: "m2",
    name: "Hinkali Factory",
    img: "https://cdn-ajllj.nitrocdn.com/weeEmxgjxuZdyBHoFCSrvizvoqeHXtDf/assets/static/optimized/rev-c479a22/wp-content/uploads/2020/10/Hinkali-Factory-restaurant-scaled.jpg",
    address: "Pkhovi St 2",
    environment: "8",
    service: "9",
    description: "Khinkali: 8/10 - Adjarian Khachapuri: 9/10",
    price: 8,
  },
  {
    id: "m3",
    name: "Zodiaqo",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/18/a4/71/0f/zodiaqo.jpg",
    address: "G. Chanturias # 6/2",
    environment: "9",
    service: "8",
    description: "Khinkali: 10/10 - Khachapuri: 8/10",
    price: 9,
  },
  {
    id: "m4",
    name: "9 Mta",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/17/0d/a8/8e/this-is-the-place.jpg",
    address: "G.Tabidze st. 10",
    environment: "8",
    service: "9",
    description: "Pork barbecue 9/10 - Spaghetti: 8/10 - Khinkali: 9/10",
    price: 8,
  },
  {
    id: "m5",
    name: "Asi Khinkali",
    img: "https://wander-lush.org/wp-content/uploads/2022/05/Emily-Lush-best-restaurants-in-Tbilisi-Georgia-2022-Otsy-interior.jpg",
    address: "Ushangi Chkhaidze Street N19 ",
    environment: "8",
    service: "9",
    description: "Khinkali: 10/10",
    price: 9,
  },
  {
    id: "m6",
    name: "Mafshalia",
    img: "https://i.otzovik.com/objects/b/1640000/1630029.png",
    address: "David agmashenebeli ave N137",
    environment: "7",
    service: "10",
    description:
      "Elarji 9/10 - Megrelian kuchmachi 10/10 - megrelian kupati: 10/10 - Fried chicken 10/10 - Sup-xarcho 9/10 ",
    price: 9,
  },
  {
    id: "m7",
    name: "Big Sam's",
    img: "https://media-cdn.tripadvisor.com/media/photo-p/1c/ff/68/05/big-sam-s-special-burger.jpg",
    address: "Alexander Kazbegi Ave N2",
    environment: "8",
    service: "9",
    description: "Burger: 10/10",
    price: 9,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      img={meal.img}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      address={meal.address}
      environment={meal.environment}
      service={meal.service}
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
