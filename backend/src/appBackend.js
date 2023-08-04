const express = require("express");

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/apiWords", (request, response) => {
  const status = [
    "dummy 1",
    "dummy 2"
  ];
  
  response.send(status);
});
