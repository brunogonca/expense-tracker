// pages/index.js
import React from "react";
import FormPage from "./form";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Expense Tracker</h1>
      <p>This is the home page of the Expense Tracker app.</p>
      <FormPage />
    </div>
  );
};

export default HomePage;
