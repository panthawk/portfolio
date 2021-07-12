const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.end("");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listing on ${port}...`);
});
