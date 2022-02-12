import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
// import Ads from "./Ads";
import Main from "./Main";
import Community from "./Community";
import Cta from "./Cta";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* <Ads /> */}
      <Main />
      <Community />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
