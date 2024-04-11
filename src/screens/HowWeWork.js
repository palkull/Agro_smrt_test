/* eslint-disable jsx-a11y/img-redundant-alt */
// HowWeWork.js

import React from "react";
import styles from "./HowWeWork.module.css";
import Step from "../components/Step";
import elegantBoxImage from "../assets/pez.png"; // la imagen del primer cuadro
import fishImage from "../assets/planta.png"; // la imagen del segundo

import imagen1 from "../assets/cel1.png";
import imagen2 from "../assets/cel2.png";
import imagen3 from "../assets/cel3.png";

const HowWeWork = () => {
  const steps = [
    {
      text: "¿Quiénes somos?",
      id: 1,
    },
    {
      text: "Misión y visión",
      id: 2,
    },
    {
      text: "Conoce nuestra aplicación.",
      id: 3,
    },
    {
      text: "Disfruta de los beneficios que tiene el invernadero.",
      id: 4,
      
    },
  ];

  return (
    <div name="¿Como trabajamos?" className={styles.howWeWork}>
      <h2 className={styles.title}>¿Como trabajamos?</h2>
      {steps.map((step) => (
        <div key={step.id} className={styles.stepContainer}>
          {step.id === 1 && (
            <div className={styles.step}>
              <div className={styles.question}>{step.text}</div>
              <div className={styles.elegantBox}>
                <div className={styles.textContainer}>
                  <p className={styles.text}>
                    Bienvenido a AGRO TECH, líder en soluciones innovadoras para el manejo de sensores y datos en sistemas de invernaderos, acuaponia e hidroponía. En AGRO TECH, nos enorgullecemos de ofrecer tecnología de vanguardia y servicios especializados que optimizan la producción agrícola y promueven la sostenibilidad ambiental.
                  </p>
                </div>
                <div className={styles.imageContainer}>
                  <img src={elegantBoxImage} alt="Elegant Box" className={styles.image} />
                </div>
              </div>
            </div>
          )}
          {step.id === 2 && (
            <div className={styles.step}>
              <div className={styles.question}>{step.text}</div>
              <div className={styles.elegantBoxSmall}>
                <div className={styles.imageContainer}>
                  <img src={fishImage} alt="Fish Image" className={styles.image} /> {/* Utiliza la nueva imagen */}
                </div>
                <div className={styles.textContainer}>
                  <p className={styles.text}>
                    Nuestra misión es revolucionar la agricultura moderna al proporcionar soluciones integrales que optimizan el crecimiento de cultivos en ambientes controlados. Nos esforzamos por impulsar la eficiencia, la rentabilidad y la producción sostenible mediante el uso inteligente de la tecnología y los datos.
                  </p>
                </div>
              </div>
            </div>
          )}
          {step.id === 3 && (
  <div className={styles.step}>
    <h3 className={styles.title}>Conoce nuestra aplicación</h3>
    <div className={styles.imageRow}>
      <div className={styles.imageContainer}>
        <img src={imagen3} alt="" className={`${styles.image} ${styles.imageSmall}`} />
      </div>
      <div className={styles.imageContainer}>
        <img src={imagen2} alt="" className={`${styles.image} ${styles.imageSmall}`}  />
      </div>
      <div className={styles.imageContainer}>
        <img src={imagen1} alt="" className={`${styles.image} ${styles.imageSmall}`} />
      </div>
    </div>
  </div>
)}
{step.text && step.id !== 1 && step.id !== 2 && step.id !== 3 && <Step text={step.text} step={step.id} />}
</div>
 ))}
</div>
  );
};

export default HowWeWork;








