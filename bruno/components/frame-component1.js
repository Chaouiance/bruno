import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {

  

  return (
    <div
      className={[styles.lesClsMajeuresDeLaPlatefParent, className].join(" ")}
    >
      <h1 className={styles.lesClsMajeuresContainer}>
        <span className={styles.lesClsMajeuresContainer1}>
          <p className={styles.allYourEsg}>All your ESG journey needs</p>
          <p className={styles.allYourEsg}>in one platform</p>
        </span>
      </h1>
      <div className={styles.frameWrapper}>
        <div className={styles.callToActionParent}>
          <div className={styles.callToAction}>
            <div className={styles.esgDataSolution}>ESG Data Solution</div>
          </div>
          <div className={styles.callToAction1}>
            <div className={styles.carbonAssessment}>Carbon Assessment</div>
          </div>
          <div className={styles.callToAction2}>
            <div className={styles.csrd}>CSRD</div>
          </div>
          <div className={styles.callToAction3}>
            <div
              className={styles.impactAnalysis}
            >{`Impact Analysis & Compliance`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
