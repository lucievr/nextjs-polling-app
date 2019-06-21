// ./src/pages/index.js
import styled from "styled-components";

const Rocket = styled.div`
  text-align: center;
`;

function Index() {
  return (
    <Rocket>
      <h2>Next.js authentication and polling app</h2>
    </Rocket>
  );
}

export default Index;