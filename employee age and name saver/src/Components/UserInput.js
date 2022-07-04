import { useState } from "react";
import "./UserInput.css";
import ErrorModal from "./ErrorModal";

function UserInput(props) {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState();
  //   const [data, setData] = useState([]);
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  function interactionHandler() {
    setError(null);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    // setData((prevData) => {
    //   return [{ Username: name, Userage: age }, ...prevData];
    // });
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        error: "Invalid input",
        message: "Please enter a valid name and age (non empty values).",
      });
      return;
    }
    if (+age < 0) {
      setError({
        error: "Invalid input",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    props.onInputChange({ Username: name, Userage: age, id:(Math.random())*2 });
    setName("");
    setAge("");
  };
  return (
    <div>
      {error && (
        <ErrorModal
          error={error.error}
          message={error.message}
          onInteraction={interactionHandler}
        />
      )}
      <form className="inputt" onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input type="text" onChange={nameChangeHandler} value={name} />
        </div>
        <div>
          <label>Age (Years)</label>
          <input
            type="number"
            step="1"
            onChange={ageChangeHandler}
            value={age}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
export default UserInput;
