import React from "react";
import styles from "./Benefits.module.css";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";

const Benefits = () => {
  return (
    <div name="Benefits" className={styles.benefits}>
      <p>
        Servicio de Aquaphonia & Hidroponia.
        <AiOutlineRise />
      </p>
      <p>
      Automatización, Monitoreo en tiempo real. 
        <AiOutlineSchedule />
      </p>
    </div>
  );
};

export default Benefits;
