import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/me.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          Originally from Green Bay, Wisconsin, I grew up in central California. I graduated Summa Cum Laude 
          with a B.S. in Computer Science from California State University at Sacramento and I am a firm believer 
          that learning and education are lifelong pursuits. I am a technology professional with over 30 years  
          of experience holding a variety of positions with companies of varying sizes and domains.  I have worked 
          for startups to fortune 500 companies in positions of software developer to Director of Engineering.  
        </p>
        <p>
          In the past 18 months, I have been doing some extensive traveling.  I traveled around various parts
          of the U.S. and also visited about 20 countries in Central America and various parts of Europe. It has 
          been a great experience to see and experience different cultures and meet people from all over the world!
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Greg Heidel</span>
              <br />
              <span>(512)771-9389</span>
              <br />
              <a href="mailto:gheidel@gmail.com"><span>gheidel@gmail.com</span></a>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="/greg_heidel_resume.pdf" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
