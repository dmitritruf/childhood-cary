import React from "react";

// components
import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
// import Ad from "../Components/Ads/Ad";
// import Navbar from "./Navbar";
// import Ads from "../Components/Ads";
import Main from "../Components/Home/Main";
import Community from "../Components/Community/Community";
import Cta from "../Components/Cta/Cta";
import Footer from "../Components/Footer/Footer";

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
