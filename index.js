const express = require("express");
const app = express();

// const rootCall = (req, res) => res.send("Thanks");

app.get("/", (req, res) => {
  res.send("I Know How to Open Node.......Yay");
});

app.listen(3000, () => console.log("Listening to port 3000"));
