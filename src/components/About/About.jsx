import React, { useEffect, useState } from "react";
import { Item } from "./Item/Item";
import "./About.css";
import HashLoader from "react-spinners/HashLoader";

export const About = () => {
  const [clicked, setClicked] = useState(1);
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <HashLoader color="#DC143C" size={60} loading={loading} />
        </div>
      ) : (
      <div className="about-sec">
        <section id="about">
          <div id="pic">
            <h2 className="headings">about me</h2>

            <div id="intro">
              <div className="img">
                <img src={require("../../images/1.jpg")} alt="mypic" />
              </div>

              <div className="content">
                <div className="paragraph">
                  <p>
                    Hello Everyone, I am Aryesh Saha from Kolkata, West Bengal,
                    India. Currently i'm pursuing Bachelor of Computer
                    Application in Techno International Newtown. I am an
                    intermediate in classics like Java, C, Javascript and
                    Python.
                  </p>
                  <p>
                    I started web developing not very long ago and i fell in
                    love with coding when i watched Iron Man. I have never been
                    a fan of theory but always loved creation which requires
                    theory to begin with.
                  </p>
                  <p>
                    I love to develop websites and i have intentions of learning
                    how to develop mobile apps as well. I already am familiar
                    with a few technologies and very much interested in learning
                    more on the way.
                  </p>
                </div>
                <div className="mini-nav">
                  <h4
                    style={{
                      color: isActive1 ? "crimson" : "",
                    }}
                    onClick={() => {
                      setClicked(1);
                      setIsActive1(true);
                      setIsActive2(false);
                      setIsActive3(false);
                    }}
                  >
                    skills
                  </h4>

                  <h4
                    style={{
                      color: isActive2 ? "crimson" : "",
                    }}
                    onClick={() => {
                      setClicked(2);
                      setIsActive2(true);
                      setIsActive1(false);
                      setIsActive3(false);
                      // console.log(clicked);
                    }}
                  >
                    projects
                  </h4>

                  <h4
                    style={{
                      color: isActive3 ? "crimson" : "",
                    }}
                    onClick={() => {
                      setClicked(3);
                      setIsActive3(true);
                      setIsActive2(false);
                      setIsActive1(false);
                    }}
                  >
                    education
                  </h4>
                </div>
                <div className="contents">
                  <ul>
                    <Item clicked={clicked} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      )} 
    </div>
  );
};
