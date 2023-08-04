const express = require("express");
const cors = require('cors');
const readSuggestionsFromFile = require('./readSuggestionsFromFile');

const app = express ();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/apiWords", async (request, response) => {
  const input = request.query.input;

  const res = await readSuggestionsFromFile(input);
  
  response.send(res);
});
