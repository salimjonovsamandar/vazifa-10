import React from "react";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";


function index() {
  return (
    <div className={styles.blocks}>
      <div className={styles.leftbgcolor}></div>
      <div className={styles.rightbgcolor}></div>

      <div className={styles.container}>
        <div className="nav"></div>
        <div className="reference">
          <h1>Hi 👋, I'm Charles, Front-end Developer</h1>
          <p>
            I design and develop experiences that make people's lives simpler
            through Web and Mobile apps.I work with FIgma , HTML5, CSS3,
            JavaScript, React, ReactNative and Flutter.
          </p>
          <div className="btn">
            <button className="HIRE">HIRE ME</button>
            <button className="PROJECTS">SEE MY PROJECTS</button>
          </div>
        </div>
        <div className="image">
            <img src="" />
        </div>
      </div>
    </div>
  );
}

export default index;
