import { useMemo } from "react";
import Image from "next/image";
import CTA from "./c-t-a";
import PropTypes from "prop-types";
import styles from "./section.module.css";

const Section = ({
  className = "",
  sectionBackgroundColor,
  icon,
  dataIntegration,
  dataIntegrationWidth,
  dataIntegrationColor,
  loremIpsumDolorColor,
}) => {
  const sectionStyle = useMemo(() => {
    return {
      backgroundColor: sectionBackgroundColor,
    };
  }, [sectionBackgroundColor]);

  const dataIntegrationStyle = useMemo(() => {
    return {
      width: dataIntegrationWidth,
      color: dataIntegrationColor,
    };
  }, [dataIntegrationWidth, dataIntegrationColor]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      color: loremIpsumDolorColor,
    };
  }, [loremIpsumDolorColor]);

  return (
    <div className={[styles.section, className].join(" ")} style={sectionStyle}>
      <div className={styles.featureDetails}>
        <Image
          className={styles.icon}
          loading="lazy"
          width={48}
          height={48}
          alt=""
          src={icon}
        />
        <CTA
          background="Light"
          size="Medium"
          style="Tiertiary"
          type="Link"
          cTAHeight="16px"
          demanderUneDmo="Learn more"
          arrowRight="/arrowright-3@2x.png"
        />
      </div>
      <div className={styles.featureInfo}>
        <div className={styles.infoDetails}>
          <h1 className={styles.dataIntegration} style={dataIntegrationStyle}>
            {dataIntegration}
          </h1>
          <div className={styles.loremIpsumDolor} style={loremIpsumDolorStyle}>
            Lorem ipsum dolor sit amet consectetur. Sagittis sed congue semper
            sapien pulvinar. Tellus fames velit leo vel.
          </div>
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  dataIntegration: PropTypes.string,

  /** Style props */
  sectionBackgroundColor: PropTypes.string,
  dataIntegrationWidth: PropTypes.string,
  dataIntegrationColor: PropTypes.string,
  loremIpsumDolorColor: PropTypes.string,
};

export default Section;
