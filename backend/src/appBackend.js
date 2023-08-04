const express = require("express");
const cors = require('cors');

const app = express ();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/apiWords", (request, response) => {
  const input = request.query.input;

  const res = [];

  if (input) {
    res.push("dummy 1");
    res.push("dummy 2");
    res.push(input);
  }
  
  response.send(res);
});
