import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { About } from "../components/About/About";
import { Certificates } from "../components/Certificates/Certificates";
import { Contact } from "../components/Contact/Contact";
import { Home } from "../components/Home/Home";
import { MyWork } from "../components/MyWork/MyWork";
import { Navbar } from "../components/Navbar/Navbar";
import "./PortFolio.css";

export const PortFolio = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="my-work" element={<MyWork />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="certificates" element={<Certificates />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
