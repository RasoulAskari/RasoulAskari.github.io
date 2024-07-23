import "bootstrap/dist/css/bootstrap.min.css";
import ".././styles/Style.module.css";

import { useEffect } from "react";

import Header from "../components/Header";
import Portfolio from "../components/Portfolio.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";
import Resume from "../components/Resume.js";
import Skill from "../components/Skill.js";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Header />
      <Portfolio />
      {/* <Contact /> */}
      <Skill />
      <Resume />
      <Footer />
    </>
  );
}
