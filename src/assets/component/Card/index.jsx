import * as React from "react";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import Boy from "../../../../public/boy.png";
import { useTranslation } from "react-i18next";

function index() {
  const [language, setLanguage] = useState("uz");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem("language");
    if (language) {
      i18n.changeLanguage(language);
      setLanguage(language);
    }
  }, []);

  function handleChange(e) {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  }

  return (
    <div className={styles.blocks}>
      <div className={styles.leftbgcolor}></div>
      <div className={styles.rightbgcolor}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.nav}>
            <ul>
              <li>
                <a href="#">{t("About Me")}</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">{t("Skills")}</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">{t("Project")}</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">{t("Contact")}</a>
              </li>
            </ul>
          </div>

          <div className={styles.darkmood}></div>
          <select
            value={language}
            onChange={handleChange}
            className={styles.section}
          >
            <option value="uz">O'zb</option>
            <option value="ru">Rus</option>
            <option value="en">Eng</option>
          </select>
        </div>

        <div className={styles.mainpegs}>
          <div className="reference">
            <h1 className={styles.titles}>{t("titles")}</h1>
            <p className={styles.decs}>{t("decs")}</p>
            <div className={styles.btn}>
              <button className={styles.HIRE}>{t("HIRE")}</button>
              <button className={styles.PROJECTS}>{t("PROJECTS")}</button>
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
