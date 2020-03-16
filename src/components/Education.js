import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>California State University at Sacramento</h3>
          <p className="info">
            B.S. in Computer Science
            <span>&bull;</span>
            <em className="date">December 1989</em>
          </p>

          <p>
            I graduated Summa Cum Laude with a B.S. in Computer Science.  I originally
            started as an MIS major so in addition I was a class or two from a minor
            in Business Administration and Math.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Hartnell Jr. College</h3>
          <p className="info">
            A.A. Degree
            <span>&bull;</span>
            <em className="date">June 1985</em>
          </p>

        </div>
      </div>
    </div>
  </div>
);

export default Education;
