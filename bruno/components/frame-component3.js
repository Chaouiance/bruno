import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = ({ className = "", img, titleText, text1, text2, text3, text4 ,  }) => {
  return (
    <div className={[styles.companyListParent, className].join(" ")}>
      <div className={styles.companyList}>
        <div className={styles.companyItems}>
          <div className={styles.section}>
            <Image
              className={styles.stocksyComp48607811Icon}
              width={1017}
              height={679}
              alt=""
              src={img}
            />
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.logoWrapper}>
              <Image
                className={styles.logoIcon}
                id="#logo"
                width={32}
                height={32}
                alt=""
                src="/logo-1.svg"
              />
            </div>
            <h1 className={styles.forCompanies}>{titleText}</h1>
          </div>
          <div className={styles.elevateYourEsgContainer}>
            <span className={styles.elevateYourEsgContainer1}>
              <p
                className={styles.elevateYourEsg}
              >{text1}</p>
              <p
                className={styles.elevateYourEsg}
              >{text2}</p>
              <p
                className={styles.elevateYourEsg}
              >{text3}</p>
              <p className={styles.elevateYourEsg}>
                {text4}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
