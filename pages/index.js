import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/Header";
import Portfolio from "components/Portfolio.js";
import Contact from "components/Contact.js";
import Footer from "components/Footer.js";
import Resume from "components/Resume.js";
import Skill from "components/Skill.js";

export default function Home() {
  return (
    <>
      <Header />
      <Portfolio />
      <Contact />
      <Skill />
      <Resume />
      <Footer />
    </>
  );
}
