import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/greg.heidel">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com/SojournerGregg">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/sojournergreg">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/FullstackGreg">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
