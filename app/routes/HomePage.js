/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div>
          <div style={{ width: "800px", height: "195px", margin: "0 auto" }}>
            <div
              style={{
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)"
              }}
            >
              <a
                style={{
                  color: "#000000",
                  fontFamily: "Montserrat",
                  fontSize: "25px",
                  textDecoration: "none"
                }}
                href="#"
              >
                <span>Bobae Park</span>
              </a>
              <ul style={{ marginTop: "25px" }}>
                <li style={{ float: "left", marginRight: "25px" }}>
                  <a
                    href="/about"
                    style={{ color: "#000000", textDecoration: "none" }}
                  >
                    <span>ABOUTt</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/work"
                    style={{ color: "#000000", textDecoration: "none" }}
                  >
                    <span>PROJECTS</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
