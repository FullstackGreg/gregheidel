import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Shelfbucks</h3>
          <p className="info">
            Senior Fullstack Software Engineer
            <span>&bull;</span>
            <em className="date">August 2017 - February 2018</em>
          </p>
          Fullstack software engineer for the data science team.  Implemented multiple tools 
          in support of the data science team using JavaScript, ReactJS and Python.  The tools filled
          in gaps in the GCP toolset allowing datagrid editing of BigQuery tables, cloning multiple 
          selected databases and tables across deployments as well as dataflows to automate data etl
          tasks using GCP and Apache Airflow.
          <p>
            
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Foreflight</h3>
          <p className="info">
            Senior Fullstack Web Software Engineer
            <span>&bull;</span>
            <em className="date">October 2015 - August 2017</em>
          </p>

          <p>
            Architected, designed and developed features for the Foreflight web product.  Client applications
            were written in JavaScript using ReactJS.  I lead initial implementations of Redux architecture
            as well as the migration to MapBox to improve the speed and quality of flight planning features.
            Backend implementations were implemented in Python running on a Tornado web server.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Demand Media</h3>
          <p className="info">
            Senior Fullstack Web Software Engineer
            <span>&bull;</span>
            <em className="date">December 2007 - August 2015</em>
          </p>

          <p>
          I held a number of different positions while at Demand Media.  I was a development manager,
          product manager and a senior software engineer for various teams across the company.  During 
          my time with Demand Media, I worked with many different technologies including C#, Python, 
          JavaScript, SQL Server, MongoDB, Redis, ElasticSearch, RabbitMQ, ZeroMQ, Flask, Django, 
          CherryPy as well as mobile development on the iOS platform.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
