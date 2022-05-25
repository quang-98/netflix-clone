import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row fetchURL={requests.requestPopular} title="Popular" />
      <Row fetchURL={requests.requestTopRated} title="TopRated" />
      <Row fetchURL={requests.requestAction} title="Action" />
      <Row fetchURL={requests.requestHorror} title="Horror" />
    </>
  );
};

export default Home;
