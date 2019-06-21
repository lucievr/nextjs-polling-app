// ./src/components/Polls.js

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Poll from "./Poll";

export default function Polls(props) {
  return (
    <Row>
      <Col xs={12}>
        <h2>Latest Polls</h2>
      </Col>
      {props.polls &&
        props.polls.map(poll => (
          <Col key={poll._id} xs={12} sm={6} md={4} lg={3}>
            <Poll poll={poll} />
          </Col>
        ))}
      {!props.polls && <Col xs={12}>Loading...</Col>}
    </Row>
  );
}