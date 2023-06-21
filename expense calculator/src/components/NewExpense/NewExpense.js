import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
    function changeExpenseDataHandler(expenseData) {
        const expense = {
          ...expenseData,
          id: Math.random().toString(),
        };
        props.onChangeExpense(expense);
      }
  return (
    <div className="new-expense">
      <ExpenseForm onChangeExpenseData={changeExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
