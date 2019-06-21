// ./src/polls-api.js

const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();

router.use(bodyParser.json());

const polls = [
  { _id: 123, message: "I love pepperoni pizza!", author: "unknown" },
  { _id: 456, message: "I'm watching Netflix.", author: "unknown" }
];

router.get("/api/polls", (req, res) => {
  const orderedPolls = polls.sort((t1, t2) => t2._id - t1._id);
  res.send(orderedPolls);
});

router.post("/api/polls", (req, res) => {
  const { message } = req.body;
  const newPoll = {
    _id: new Date().getTime(),
    message,
    author: "unknown"
  };
  polls.push(newPoll);
  res.send({ message: "Thanks!" });
});

module.exports = router;