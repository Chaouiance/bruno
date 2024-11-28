import CTA from "./c-t-a";
import PropTypes from "prop-types";
import styles from "./section-conversion.module.css";

const SectionConversion = ({ className = "" }) => {
  return (
    <section className={[styles.sectionConversion, className].join(" ")}>
      <div className={styles.conversionContent}>
        <h1 className={styles.notreQuipeDexpertsContainer}>
          <p
            className={styles.notreQuipeDexperts}
          >{`Notre équipe d'experts vous `}</p>
          <p className={styles.notreQuipeDexperts}>accompagne dans votre</p>
          <p className={styles.notreQuipeDexperts}>démarche ESG.</p>
        </h1>
        <div className={styles.demoButtonContainer}>
          <CTA
            background="Light"
            size="Medium"
            style="Primary"
            type="Button"
            cTAHeight="50px"
            demanderUneDmo="Demander une démo"
            arrowRight="/arrowright-5@2x.png"
          />
        </div>
      </div>
      <div className={styles.conversionLinkContainer}>
        <div className={styles.firstLink}>
          
        </div>
      </div>
    </section>
  );
};

SectionConversion.propTypes = {
  className: PropTypes.string,
};

export default SectionConversion;
