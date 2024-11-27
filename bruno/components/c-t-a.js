import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./c-t-a.module.css";

const CTA = ({
  className = "",
  background = "Light",
  size = "Medium",
  style = "Primary",
  type = "Button",
  cTAHeight,
  demanderUneDmo,
  arrowRight,
  colorTextLearnMore
}) => {
  const cTAStyle = useMemo(() => {
    return {
      height: cTAHeight,

    };
  }, [cTAHeight]);

  return (
    <button
      className={[styles.root, className].join(" ")}
      data-background={background}
      data-size={size}
      data-style={style}
      data-type={type}
      style={cTAStyle}


    >
      <div style={{ color: colorTextLearnMore }} className={styles.demanderUneDmo}>{demanderUneDmo}</div>

      <Image
        className={styles.arrowRightIcon}
        width={16}
        height={16}
        alt=""
        src={arrowRight}
      />
    </button>
  );
};

CTA.propTypes = {
  className: PropTypes.string,
  demanderUneDmo: PropTypes.string,
  arrowRight: PropTypes.string.isRequired,

  /** Variant props */
  background: PropTypes.number,
  size: PropTypes.string,
  style: PropTypes.string,
  type: PropTypes.string,

  /** Style props */
  cTAHeight: PropTypes.string,
};

export default CTA;
