/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";
import imageSrc from "../assets/logo.png";

const Home = () => {
  return (
    <div name="Menu" className={styles.home}>
      <div className={styles.titleContainer}>
        <div className={styles.textLeft}>
          <center><p><b>Agro</b></p></center>
          <p><b>Smart Tech</b></p>
        </div>
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt="Description of your image" className={styles.image} />
        </div>
        <div className={styles.textRight}>
          <p><b>Hidroponía</b></p>
          <p><b>Acuaponía</b></p>
        </div>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Soporte"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Home;


