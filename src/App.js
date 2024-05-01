import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from "./components/Hero";
import Fault from "./components/Fault";
import Consultation from "./components/Consultation";
import Get from "./components/Get";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Strategy from "./components/Strategy";
import Behind from "./components/Behind";
import Footer from "./components/Footer";
import Target from "./components/Target";
import Mindset from "./components/Mindset";
import Clients from "./components/Clients";

function App() {
  return (
    <div className="App">
      <Hero />
      <Fault />
      <Consultation />
      <Get />
      <Target />
      <Mindset />
      <Section5 />
      <Section6 />
      <Clients />
      <Strategy />
      <Behind />
      <Footer />
    </div>
  );
}

export default App;
