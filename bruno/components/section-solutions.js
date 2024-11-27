'use client';
import FrameComponent1 from "./frame-component1";
import Section1 from "./section1";
import PropTypes from "prop-types";
import styles from "./section-solutions.module.css";
import { useState } from "react";

const SectionSolutions = ({ className = "", type = "Default" }) => {
  const object = [
    {
      name: "ESG",
      image: "/visualbrochure-za064l-1-1@2x.png",
      bgcolor: "#FFDDA5",
      text: "ESG Data Solution",
      color: "#FFFFFF",
      colorText: "#453848",
      colortext2: "#453848B2",
      tagsBg: '#463848',
      colorTextTag: "#F4F8EF",
      colorTextLearnMore: "#453848",
      textBusiness: 'Automatically collect data, launch campaigns, establish quality processes, and build an organization that mirrors your own, all within our platform. Benchmark best practices, set scoring rules, and track performance with custom dashboards.',
      iconLearnMore: '/violet-icon.png'
    },
    {
      name: "Carbon",
      image: "/carbon-assessment.png",
      bgcolor: "#3C4A41",
      text: "Carbon Assessment",
      color: "#FFFFF",
      colorText: "white",
      colortext2: "#D6E0D3B2",
      tagsBg: '#facbcc',
      colorTextTag: "#3C4A41",
      colorTextLearnMore: "white",
      textBusiness: 'Choose a Carbon module from our options, estimate emissions across Scopes 1, 2, and 3, generate footprint reports, receive recommendations, and build your decarbonization strategy.',
      iconLearnMore: '/arrow-right.png'
    },
    {
      name: "CSRD",
      image: "/csrd.png",
      bgcolor: "#FFCCCC",
      text: "CSRD",
      color: "#FFFFFF",
      colorText: "#3C4A41",
      colortext2: "#3C4A41B2",
      tagsBg: '#3C4A41',
      colorTextTag: "#FFFFFF",
      colorTextLearnMore: "#3C4A41",
      textBusiness: 'Leverage our expertise and tools to demystify CSRD and unlock opportunities. Conduct your double materiality assessments, perform gap analyses, collect data, and prepare audit-ready reports.',
      iconLearnMore: '/rose-icon.png'
    },
    {
      name: "Impact",
      image: "/impact-analysis.png",
      bgcolor: "#453848",
      text: "Impact Analysis & Compliance",
      color: "#FFFFFF",
      colorText: "#FFFFFF",
      colortext2: "#D6E0D3B2",
      tagsBg: '#FF9B6E',
      colorTextTag: "#453848",
      colorTextLearnMore: "#FFFFFF",
      textBusiness: 'Analyze your biodiversity impact and dependencies, achieve Taxonomy alignment, conduct SFDR and PAI analysis, and stay updated on regulatory news',
      iconLearnMore: '/arrow-right.png'
    },
  ];

  const [section, setSection] = useState(object[0]);

  return (
    <section
      className={[styles.sectionSolutions, className.trim()].join(" ")}
      data-type={type}
    >
      <div className={styles.lesClsMajeuresDeLaPlatefParent}>
        <h1 className={styles.lesClsMajeuresContainer}>
          <span className={styles.lesClsMajeuresContainer1}>
            <p className={styles.allYourEsg}>All your ESG journey </p>
            <p className={styles.allYourEsg}>in one platform needs</p>
          </span>
        </h1>
        <div className={styles.frameWrapper}>

          <div className={styles.callToActionParent}>
            {object.map((item, index) => {

              const dynamicStyle =
                item.name === "ESG"
                  ? styles.esgDataSolution
                  : item.name === "Carbon"
                    ? styles.carbonAssessment
                    : item.name === "CSRD"
                      ? styles.csrd
                      : styles.impactAnalysis;

              return (
                <div
                  key={index}
                  className={`${styles.callToAction} callToAction${index}`}
                  onClick={() => setSection(item)}
                >
                  <div className={`${dynamicStyle}`}>{item.text}</div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
      <Section1
        text={section.text}
        image={section.image}
        color={section.bgcolor}
        colorText={section.colorText}
        colorText2={section.colortext2}
        tagsBg={section.tagsBg}
        colorTextTag={section.colorTextTag}
        colorTextLearnMore={section.colorTextLearnMore}
        textBusiness={section.textBusiness}
        iconLearnMore={section.iconLearnMore}
      />
    </section>
  );
};

SectionSolutions.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  type: PropTypes.string,
};

export default SectionSolutions;
