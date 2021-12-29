import React from "react";
import Directory from "../../components/directory/Directory";
import styled from "styled-components";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  return (
    <Home>
      <Directory />
    </Home>
  );
};

export default HomePage;
