import React from "react";
import Header from "../../Header/Header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import "./Style/Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
