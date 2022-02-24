import React from "react";

// components
import Header from "../Components/Header";
import Nav from "../Components/Nav/Nav";
// import Ad from "../Components/Ad";
// import Navbar from "./Navbar";
// import Ads from "../Components/Ads";
import Main from "../Components/Main";
import Community from "../Components/Community";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Nav />
      {/* <Ad /> */}
      {/* <Navbar /> */}
      {/* <Ads /> */}
      <Main />
      <Community />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
