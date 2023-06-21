import "./Card.css";
// import { useState } from "react";
function Card(props) {
  // const [incomingData, setIncomingData] = useState(props.data);
  // function clickHandler(event) {
  //   setIncomingData((prevData) => {
  //     return prevData.filter((input) => {
  //       return input.id !== event.currentTarget.id;
  //     });
  //   });
  //   props.onDelete(event.currentTarget.id);
    // console.log(typeof event.currentTarget.id)
  // }
  return (
    <div className="show">
      <ul>
        {props.data.map((cardData) => {
          return (
            <li
              key={Math.random()}
              id={cardData.id}
              onClick={props.onDelete}
            >{`${cardData.Username} (${cardData.Userage} years old)`}</li>
          );
        })}
      </ul>
    </div>
  );
}
export default Card;
