import React, { useEffect, useState } from "react";
import "./MyWork.css";
import HashLoader from "react-spinners/HashLoader";

export const MyWork = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader">
          <HashLoader color="#DC143C" size={60} loading={loading} />
        </div>
      ) : (
        <div className="mywork-sec">
          <section id="my-work">
            <h1 className="headings">My Work</h1>
            <div className="myWork">
              <div className="package">
                <div className="content">
                  <h3>⚪MoviesInf.</h3>
                  <div className="card">
                    <img
                      src={require("../../images/MI.png")}
                      class="card-img-top"
                      alt="MI"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        This is a simple website yet one of my favourite projects till now as this is the website that made me realise about the progress i made in the web development world. I used an api to fetch the data and i made cards to display the information about the movies or series.
                      </p>
                    </div>
                    <div class="card-body">
                      <a
                        href="https://movies-inf-aryesh.netlify.app/"
                        class="card-link"
                        target="nt"
                      >
                        <button className="btn">Check It Out</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>⚪Raevex Internet</h3>
                  <div className="card">
                    <img
                      src={require("../../images/RI.png")}
                      class="card-img-top"
                      alt="RI"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        In my 2nd and 4th semester, we had entrepreneurship courses and we were divided into teams of three and were asked to create a business plan. My job in my team was to help in the presentations and making the website as i was very much interested in this. This website is made with the help of wix website editor as i didn't have knowledge about html css and js back then.
                      </p>
                    </div>
                    <div class="card-body">
                      <a
                        href="https://hawkwifi274.wixsite.com/raevexinternet"
                        class="card-link"
                        target="nt"
                      >
                        <button className="btn">Check It Out</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>⚪TicTacToe</h3>
                  <div className="card">
                    <img
                      src={require("../../images/TI.png")}
                      class="card-img-top"
                      alt="TI"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        TicTacToe Game was one of my early react projects i learnt from a friend. I had the logic of tictactoe game way before knowing react as i made the game in my terminal using java before I made it using react hooks.
                      </p>
                    </div>
                    <div class="card-body">
                      <a
                        href="https://as-tictactoe-game.netlify.app/"
                        class="card-link"
                        target="nt"
                      >
                        <button className="btn">Check It Out</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        // <h1>Coming Soon...</h1>
      )}
    </div>
  );
};
