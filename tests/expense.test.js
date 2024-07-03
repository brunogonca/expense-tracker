test("GET to /api/v1/returnExpenses should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/returnExpenses");
  expect(response.status).toBe(200);
  const jsonResponse = await response.json();
  expect(jsonResponse);
  console.log(jsonResponse);
});
