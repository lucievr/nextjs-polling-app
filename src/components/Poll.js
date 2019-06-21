// ./src/components/Poll.js

import Card from "react-bootstrap/Card"

export default function Poll({ poll }) {
  const cardStyle = { marginTop: "15px" };
  return (
    <Card bg="secondary" text="white" style={cardStyle}>
      <Card.Body>
        <Card.Title>{poll.message}</Card.Title>
        <Card.Text>by {poll.author}</Card.Text>
      </Card.Body>
    </Card>
  );
}