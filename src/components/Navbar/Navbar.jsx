import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { GiCrossMark } from "react-icons/gi";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return windowSize;
}

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const width = useWindowSize();

  return (
    <div>
      <div>
        <div className="heading">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <h1 className="nam">Aryesh's</h1>

              <ul
                className={width <=860 ? (!isMobile ? "ul nav-links" : "ul nav-links-mobile") : "ul nav-links"}
                onClick={() => {
                  width <= 860 ? setIsMobile(!isMobile) : setIsMobile(isMobile);
                }}
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/my-work" className="nav-link">
                    my work
                  </Link>
                </li>
                {/* <li className="nav-item">
                      <Link to="/certificates" className="nav-link">
                        certificates
                      </Link>
                    </li> */}
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    contact
                  </Link>
                </li>
              </ul>
              <button
                className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
              >
                {isMobile ? <GiCrossMark /> : <VscThreeBars />}
              </button>
            </div>
          </nav>
        </div>

        <Outlet />
      </div>
    </div>
  );
};
