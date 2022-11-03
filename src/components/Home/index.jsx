import { Fragment } from "react";
import ParentFeedback from "./ParentFeedback";
import ContactUS from "./ContactUS";
import Footer from "./Footer";
import "./Home.scss";
const Home = () => {
  return (
    <Fragment>
      <main>
        <ParentFeedback></ParentFeedback>
        <ContactUS></ContactUS>
      </main>
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
