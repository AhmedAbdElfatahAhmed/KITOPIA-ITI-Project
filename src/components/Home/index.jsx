import { Fragment } from "react";
import Hero from "./hero/index";
import Service from "./services/index";
import About from "./about/index";
import ParentFeedback from "./ParentFeedback";
import ContactUS from "./ContactUS";
import "./Home.scss";
const Home = () => {
  return (
    <Fragment>
      <main>
        <Hero></Hero>
        <Service></Service>
        <About></About>
        <ParentFeedback></ParentFeedback>
        <ContactUS></ContactUS>
      </main>
    </Fragment>
  );
};

export default Home;
