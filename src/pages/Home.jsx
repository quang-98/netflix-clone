import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" fetchURL={requests.requestPopular} title="Popular" />
      <Row rowID="2" fetchURL={requests.requestTopRated} title="TopRated" />
      <Row rowID="3" fetchURL={requests.requestAction} title="Action" />
      <Row rowID="4" fetchURL={requests.requestHorror} title="Horror" />
    </>
  );
};

export default Home;
