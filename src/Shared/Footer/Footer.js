import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <ul class="icons">
          <li>
            <Link>
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link>
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link>
              <FaTwitter />
            </Link>
          </li>
        </ul>
        <ul class="menu">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
        <div class="footer-copyright">
          <p>Copyright @ 2022 Sharif.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
