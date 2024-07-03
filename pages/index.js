// pages/form.js
import { useState } from "react";

export default function FormPage() {
  const [inputValue, setInputValue] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`: You spent ${inputValue}, in: ${expenseDescription}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>
      <h2>New Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={expenseDescription}
            onChange={(e) => setExpenseDescription(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <br />
        <button type="submit" style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
