function returnExpenses(req, resp) {
  resp.status(200).json([
    {
      expenseList: "expense 1",
    },
  ]);
}

export default returnExpenses;
