'use client'
import Image from "next/image";
import FrameComponent3 from "./frame-component3";
import PropTypes from "prop-types";
import styles from "./section-consultants.module.css";
import { useState } from "react";

const SectionConsultants = ({ className = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const components = [
    {
      img: '/stocksy-comp-4860781-1@2x.png',
      titleText: "For Companies",
      text1: 'Elevate your ESG strategy to its full',
      text2: "potential: measure all your impacts, ",
      text3: "lead CSRD initiatives, assess your risks ",
      text4: "and shape your sustainable strategy"
    },
    {
      img: "/gettyimages1533018539-1@2x.png",
      titleText: "For Companies",
      text1: 'Elevate your ESG strategy to its full',
      text2: "potential: measure all your impacts, ",
      text3: "lead CSRD initiatives, assess your risks ",
      text4: "and shape your sustainable strategy"
    },
    {
      img: '/ZwAG4bVsGrYSwY8G_Bank.avif',
      titleText: "For Companies", 
      text1: 'Elevate your ESG strategy to its full',
      text2: "potential: measure all your impacts, ",
      text3: "lead CSRD initiatives, assess your risks ",
      text4: "and shape your sustainable strategy"
    }
  ];

  const handleRightClick = () => {

    setCurrentSlide((next) => (next + 1) % components.length);
  };

  const handleLeftClick = () => {
    setCurrentSlide((prev) => (prev - 1 + components.length) % components.length);
  };

  return (
    <section className={[styles.sectionConsultants, className].join(" ")}>
      <div className={styles.aSolutionForEveryoneParent}>
        <h1 className={styles.aSolutionFor}>A solution for everyone</h1>
        <div className={styles.arrowsWrapper}>
          <div className={styles.arrows}>
            <div 
              className={styles.arrowsDiagrams221Wrapper} 
              onClick={handleLeftClick}
            >
              <Image
                className={styles.arrowsDiagrams221Icon}
                width={19}
                height={19}
                alt="Flèche gauche"
                src="/arrowsdiagrams22-1.svg"
              />
            </div>
            <div 
              className={styles.arrowsDiagrams221Container} 
              onClick={handleRightClick}
            >
              <Image
                className={styles.arrowsDiagrams221Icon1}
                
                width={19}
                height={19}
                alt="Flèche droite"
                src="/arrowsdiagrams22-1.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.componentsPictureInfo}>
        {components.map((component, index) => {
          let positionClass = '';
          if (index === currentSlide) {
            positionClass = styles.centerSlide;
          } else if (index === (currentSlide + 1) % components.length) {
            positionClass = styles.rightSlide;
          } else if (index === (currentSlide - 1 + components.length) % components.length) {
            positionClass = styles.leftSlide;
          } else {
            positionClass = styles.hiddenSlide;
          }

          return (
            <div 
              key={index} 
              className={`${styles.slideContainer} ${positionClass}`}
            >
              <FrameComponent3 
                img={component.img}
                titleText={component.titleText}
                text1={component.text1}
                text2={component.text2}
                text3={component.text3}
                text4={component.text4}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

SectionConsultants.propTypes = {
  className: PropTypes.string,
};

export default SectionConsultants;