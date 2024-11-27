import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./section-reassurance.module.css";

const SectionReassurance = ({ className = "" }) => {
  const logos = [
    "/p.svg",
    "/p-1.svg",
    "/s.svg",
    "/p-2@2x.png",
    "/p-3.svg",
    "/s-1.svg",
    "/p-4.svg",
  ];

  return (
    <section className={[styles.sectionReassurance, className].join(" ")}>
      <div className={styles.logos}>
        {logos.map((logo, index) => (
          <Image
            key={`logo-${index}`}
            className={styles.pIcon}
            loading="lazy"
            width={101}
            height={101}
            alt={`Logo ${index + 1}`}
            src={logo}
          />
        ))}
        {logos.map((logo, index) => (
          <Image
            key={`logo-duplicate-${index}`}
            className={styles.pIcon}
            loading="lazy"
            width={101}
            height={101}
            alt={`Logo duplicate ${index + 1}`}
            src={logo}
          />
        ))}
      </div>
    </section>
  );
};

SectionReassurance.propTypes = {
  className: PropTypes.string,
};

export default SectionReassurance;