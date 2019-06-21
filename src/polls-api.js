// ./src/polls-api.js

const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();

router.use(bodyParser.json());

const polls = [
  { _id: 123, message: "Coca-cola, Pepsi or Kofola?", author: "unknown" },
  {
    _id: 456,
    message: "What's your favourite programming language?",
    author: "unknown"
  }
];

router.get("/api/polls", (req, res) => {
  const orderedPolls = polls.sort((t1, t2) => t2._id - t1._id);
  res.send(orderedPolls);
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.send(401);
}

router.post("/api/polls", ensureAuthenticated, (req, res) => {
  const { message } = req.body;
  const newPoll = {
    _id: new Date().getTime(),
    message,
    author: req.user.displayName
  };
  polls.push(newPoll);
  res.send({ message: "Thanks!" });
});

module.exports = router;
