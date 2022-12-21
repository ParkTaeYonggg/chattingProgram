import React from "react";
import Head from "next/head";
import Login from "../src/component/Login";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>환영합니다.</title>
      </Head>
      <Login />
    </React.Fragment>
  );
}

export default Home;
