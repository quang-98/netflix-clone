import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up coming" fetchURL={requests.requestAction} />
    </>
  );
};

export default Home;
