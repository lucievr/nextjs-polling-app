// ./src/pages/index.js
// import styled from "styled-components";
import Container from "react-bootstrap/Container";
import fetch from "isomorphic-fetch";
import Polls from "../components/Polls";


function Index(props) {
  return (
    <Container>
      <Polls polls={props.polls} />
    </Container>
  );
}

Index.getInitialProps = async ({ req }) => {
  const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";
  const res = await fetch(`${baseURL}/api/polls`);
  return {
    polls: await res.json()
  };
};

export default Index;