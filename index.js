const { static } = require("express");
const express = require("express");

const app = express();

app.use(static("public"));

app.get('/', (req, res) => {
    res.send("");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listing on ${port}...`);
});