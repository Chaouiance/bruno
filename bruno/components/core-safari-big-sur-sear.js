import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./core-safari-big-sur-sear.module.css";

const CoreSafariBigSurSear = ({ className = "" }) => {
  return (
    <div className={[styles.coreSafariBigSurSear, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.lockWrapper}>
          <Image
            className={styles.lockIcon}
            width={9}
            height={13}
            alt=""
            src="/lock.svg"
          />
        </div>
        <div className={styles.text}>greenscope.com</div>
      </div>
      <div className={styles.lockContainer}>
        <Image
          className={styles.lockIcon1}
          width={12}
          height={14}
          alt=""
          src="/lock-1.svg"
        />
      </div>
    </div>
  );
};

CoreSafariBigSurSear.propTypes = {
  className: PropTypes.string,
};

export default CoreSafariBigSurSear;
