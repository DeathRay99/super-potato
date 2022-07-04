import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(prop) {
  const [userTitle, setUserTitle] = useState("");
  const [userAmount, setUserAmount] = useState("");
  const [userDate, setUserDate] = useState("");
  const [clickState, setClickState] = useState(false);
  const titleHandler = (event) => {
    setUserTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setUserAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setUserDate(event.target.value);
  };
  const clickHandler = () => {
    setClickState((prevClickState) => {
      return !prevClickState;
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userTitle,
      amount: +userAmount,
      date: new Date(userDate),
    };
    prop.onChangeExpenseData(expenseData);
    setUserTitle("");
    setUserAmount("");
    setUserDate("");
    setClickState((prevClickState) => {
      return !prevClickState;
    });
  };

  return (
    <form onSubmit={submitHandler}>
      {clickState && (
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" onChange={titleHandler} value={userTitle} />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountHandler}
                value={userAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateHandler}
                value={userDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={clickHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      )}
      {!clickState && <button onClick={clickHandler}>Add new Expense</button>}
    </form>
  );
}
export default ExpenseForm;
