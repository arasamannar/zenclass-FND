import React from "react";
import { currentYear } from "../Extra/Datefinder";

function Footer() {
  return (
    <div className="footer">
      <div className="container-foo">
        <p>&copy; Arasamannar | {currentYear} </p>
        <ul className="social-foo">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              X (Twitter)
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
