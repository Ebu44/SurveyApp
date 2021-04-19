const express = require("express");

const app = express();

app.use();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Connected");
});
