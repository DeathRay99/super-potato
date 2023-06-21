import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

function AvailableMeals() {
  const [mealData, setMealData] = useState([]);
  const [error, setError] = useState();
  async function meals() {
    try {
      const response = await fetch(
        "https://react-food-3bf84-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      let loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMealData(loadedMeals);
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    meals();
  }, []);
  const mealsList = mealData.map((data) => {
    return (
      <MealItem
        id={data.id}
        key={data.id}
        name={data.name}
        description={data.description}
        price={data.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      {error && <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>}
      {!error && mealData.length === 0 && (
        <h2 style={{ textAlign: "center", color: "white" }}>Loading.....</h2>
      )}
      {mealData.length > 0 && (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
    </section>
  );
}
export default AvailableMeals;
