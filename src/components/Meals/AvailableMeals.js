import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Khinkali",
    img: "https://georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg",
    description: "With pork and beef",
    price: 1,
  },
  {
    id: "m2",
    name: "Ajarian Khachapuri",
    img: "https://gastronomia.ge/wp-content/uploads/2019/01/JHU.jpg",
    description: "700 grams of cheese and sulguni",
    price: 18.5,
  },
  {
    id: "m3",
    name: "Fried Chicken",
    img: "http://storage.ning.com/topology/rest/1.0/file/get/2064096656?profile=RESIZE_1024x1024",
    description: "Chicken meat and sauce",
    price: 22.0,
  },
  {
    id: "m4",
    name: "Pork Barbecue",
    img: "https://mkurnali.ge/media/uploads/2022/05-04/mwadi-1651654518.jpg",
    description: "Pork and onions",
    price: 18.0,
  },
  {
    id: "m5",
    name: "Kebab",
    img: "https://bernard.ge/wp-content/uploads/2020/12/qababi.jpg",
    description: "Lavash bread, beef and pork",
    price: 10.0,
  },
  {
    id: "m6",
    name: "Megrelian Kupati",
    img: "https://georgianjournal.ge/media/_thumb/images/georgianews/2015/September/Cuisine/kupati.jpg",
    description: "Pork meat",
    price: 15.0,
  },
  {
    id: "m7",
    name: "Chakafuli",
    img: "http://server5.intermedia.ge/article_images/small/202104/2021042219195391717.jpg",
    description: "Cow meat, herbs, tkemali and wine",
    price: 25.0,
  },
  {
    id: "m8",
    name: "Eggplant",
    img: "https://kulinaria.ge/media/recipe-images/2017/02/badrijani-nigvzit.jpg",
    description: "Eggplant and walnuts",
    price: 9.0,
  },
  {
    id: "m9",
    name: "Georgian salad",
    img: "https://i1.wp.com/syl.ru/misc/i/ai/352957/2074486.jpg",
    description: "Cucumbers, tomatoes and walnuts",
    price: 7.0,
  },
  {
    id: "m10",
    name: "Pizza",
    img: "https://kulinaria.ge/media/recipe-images/2017/04/italiuri_pica.jpg",
    description: "Fluffy dough, mozzarella, mushrooms, parmesan and ham",
    price: 15.5,
  },
  {
    id: "m11",
    name: "Ostri",
    img: "https://gemrielia.ge/media/images/ostri2.jpg",
    description: "Beef, herbs, tomatoes and onions",
    price: 17,
  },
  {
    id: "m12",
    name: "Tolma",
    img: "https://cdn.fortuna.ge/app/uploads/2021/12/9478b9ca14a6160a84d2e75f779ba6a8-01d8c797-1edb-4386-a03d-05a6d6d4c15f-large-landscape-150-2021-12-07_15-34-25_104102.jpg",
    description: "Vine leaves, meat, herbs and rice",
    price: 10,
  },
  {
    id: "m13",
    name: "Elarji",
    img: "https://3.bp.blogspot.com/-HaR30t3rYo0/W6OE8cFoLMI/AAAAAAAAAC8/UlvbPrF2E7QUXIlOjmkTHDLD2rxRjm9EgCLcBGAs/s1600/elarji.jpeg",
    description: "Ghomi and Sulguni",
    price: 11,
  },
  {
    id: "m14",
    name: "Lobiani",
    img: "https://pelagoni.ge/wp-content/uploads/2020/12/%E1%83%9A%E1%83%9D%E1%83%91%E1%83%98%E1%83%90%E1%83%9C%E1%83%98-1-scaled.jpg",
    description: "Bean",
    price: 9,
  },
  {
    id: "m15",
    name: "Mushroom",
    img: "https://gastronomia.ge/wp-content/uploads/2019/01/50689031_1154416674725620_8892686162385174528_n.jpg",
    description: "Mushrooms and sulgun",
    price: 12.5,
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
