import * as React from "react";
import styles from "./index.module.css";
import { useState } from "react";
import Boy from "../../../../public/boy.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";

function index() {
  const [language, setLanguage] = useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={styles.blocks}>
      <div className={styles.leftbgcolor}></div>
      <div className={styles.rightbgcolor}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.nav}>
            <ul>
              <li>
                <a href="#">About Me</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Skills</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Project</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.darkmood}></div>

          <div className="section">
            <FormControl style={{ width: 80 }}>
              <Select
                labelId="language-select-label"
                id="language-select"
                value={language}
                onChange={handleChange}
              >
                <MenuItem value="uz">O'zb</MenuItem>
                <MenuItem value="en">Eng</MenuItem>
                <MenuItem value="ru">Rus</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className={styles.mainpegs}>
          <div className="reference">
            <h1 className={styles.titles}>
              Hi 👋, <br /> I’m Charles, <br /> Front-end Developer
            </h1>
            <p className={styles.decs}>
              I design and develop experiences that make people's lives simpler
              through Web and Mobile apps.I work with FIgma , HTML5, CSS3,
              JavaScript, React, ReactNative and Flutter.
            </p>
            <div className={styles.btn}>
              <button className={styles.HIRE}>HIRE ME</button>
              <button className={styles.PROJECTS}>SEE MY PROJECTS</button>
            </div>
          </div>
          <div className="image">
            <img className={styles.boyimg} src={Boy} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
