import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <div>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton cartVisibility={props.onCartVisibility}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} />
      </div>
    </div>
  );
}
export default Header