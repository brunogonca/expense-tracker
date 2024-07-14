// pages/form.js
import { useState } from "react";

export default function FormPage() {
  const [inputValue, setInputValue] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", {
      title: expenseDescription,
      amount: inputValue,
    });
    const response = await fetch("/api/v1/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: expenseDescription, amount: inputValue }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
    } else {
      const errorData = await response.json();
      alert(`Error: test${errorData.error}`);
    }
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
