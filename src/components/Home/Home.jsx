import React, { useEffect, useState } from "react";
import "./Home.css";
import CV from "../../CV/CV.pdf";
import Typewriter from "typewriter-effect";
import HashLoader from "react-spinners/HashLoader";

export const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader">
          <HashLoader color="#DC143C" size={60} loading={loading} />
        </div>
      ) : (
        <div className="home-sec">
          <section id="home">
            <div className="main">
              {/* <h1 className="myname">Hi! I'm Aryesh</h1> */}
              <h1 className="greet">
                <Typewriter
                  options={{
                    strings: [
                      "hi!",
                      "i'm aryesh",
                      "and i'm a",
                      "Front-end Web Developer",
                      "how are you doin'?",
                    ],
                    delay: 100,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                  }}
                />
              </h1>
            </div>
            <div className="cv-dwnld">
              <a href={CV} download={CV} className="download">
                <button className="btn">here's my cv</button>
              </a>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
