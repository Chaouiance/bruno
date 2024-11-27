import Section from "./section";
import PropTypes from "prop-types";
import styles from "./section-consultants1.module.css";

const SectionConsultants1 = ({ className = "" }) => {
  return (
    <section className={[styles.sectionConsultants, className].join(" ")}>

      <div >
        <h1 className={styles.designedWithThe}>
          Designed with the best technology
        </h1>
        <div className={styles.technologyFeatures}>
          <Section icon="/icon.svg" dataIntegration="Data integration" />
          <Section
            sectionBackgroundColor="#3c4a41"
            icon="/icon-1.svg"
            dataIntegration="Security"
            dataIntegrationWidth="118px"
            dataIntegrationColor="#f4f8ef"
            loremIpsumDolorColor="#f4f8ef"
          />
        </div>
      </div>
    </section>
  );
};

SectionConsultants1.propTypes = {
  className: PropTypes.string,
};

export default SectionConsultants1;
