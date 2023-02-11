const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());

app.post("/calculate", (req, res) => {
  const { firstNumber, secondNumber, operation } = req.body;
  if (!firstNumber || !secondNumber) return res.status(401).json("Please provide all fields");
  try {
    let result;
    switch (operation) {
      case "x":
        result = firstNumber * secondNumber;
        break;
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
          result = firstNumber - secondNumber;
          break;
      default:
        result = 'Invalid input';
        break;
    }
    return res.status(200).json(result);
  } catch (error) {}
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON ${PORT}`);
});
