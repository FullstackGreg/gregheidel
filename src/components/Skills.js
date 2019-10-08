import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        This is a summary of my most recent skills.  Over the years, I have worked in a 
        variety of roles using a number of different technologies and skills.  I have worked 
        in both relational and NoSQL databases, other programming languages including Java, C++,
        and C#, hosted platforms including AWS and GCP, caches such as Elasticsearch and Redis, 
        queues such as ZeroMQ, RabbitMQ and dataflows including Google Dataflow and Apache Airflow.  
        </p>
        <p>
        Other technologies that I have been using recently outside of work include TypeScript, 
        GraphQL, Elm, Svelte and MobX.
        </p>
        <p>        
        I have also utilized a variety of software development practices including agile, scrum, 
        XP and yes, even waterfall.
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand javascript" />
            <em>JavaScript</em>
          </li>
          <li>
            <span className="bar-expand python" />
            <em>Python</em>
          </li>
          <li>
            <span className="bar-expand react" />
            <em>React</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand node" />
            <em>Nodejs</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
