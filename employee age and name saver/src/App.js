import React from "react";
import { useState } from "react";
import UserInput from "./Components/UserInput";
import Card from "./Components/Card";

function App() {
  const [cardInfo, setCardInfo] = useState([]);
  const inputChangeHandler = (input) => {
    setCardInfo((prevInfo) => [input, ...prevInfo]);
  };
  console.log(cardInfo);
  function deleteHAndler(event) {
    setCardInfo(
      cardInfo.filter((cardData) => {
        return cardData.id !== +event.currentTarget.id;
      })
    );
  }
  return (
    <div>
      <UserInput onInputChange={inputChangeHandler} />
      {cardInfo.length > 0 && <Card data={cardInfo} onDelete={deleteHAndler} />}
    </div>
  );
}

export default App;
