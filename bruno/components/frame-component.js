import Image from "next/image";
import CoreSafariBigSurSear from "./core-safari-big-sur-sear";
import Header from "./Header";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={[styles.coreSafariBigSurToolParent, className].join(" ")}
    >
      <div className={styles.coreSafariBigSurTool}>
        <div className={styles.frameParent}>
          <div className={styles.coreTrafficLightsBigSurWrapper}>
            <Image
              className={styles.coreTrafficLightsBigSur}
              width={59}
              height={14}
              alt=""
              src="/core--traffic-lights-big-sur.svg"
            />
          </div>
          <div className={styles.coreSafariBigSurToolGroup}>
            <Image
              className={styles.coreSafariBigSurTool1}
              width={37}
              height={32}
              alt=""
              src="/core--safari-big-sur--toolbar--toolbar-item.svg"
            />
            <div className={styles.toolbarGroup}>
              <div className={styles.coreSafariBigSurTool1}>
                <Image
                  className={styles.icon}
                  width={9}
                  height={16}
                  alt=""
                  src="/.svg"
                />
              </div>
              <Image
                className={styles.coreSafariBigSurTool3}
                width={37}
                height={32}
                alt=""
                src="/core--safari-big-sur--toolbar--toolbar-item-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.coreSafariBigSurToolContainer}>
          <Image
            className={styles.coreSafariBigSurTool1}
            width={37}
            height={32}
            alt=""
            src="/core--safari-big-sur--toolbar--toolbar-item-2.svg"
          />
          <CoreSafariBigSurSear />
        </div>
        <div className={styles.toolbarItem}>
          <Image
            className={styles.coreSafariBigSurTool1}
            width={37}
            height={32}
            alt=""
            src="/core--safari-big-sur--toolbar--toolbar-item-3.svg"
          />
          <Image
            className={styles.coreSafariBigSurTool1}
            width={37}
            height={32}
            alt=""
            src="/core--safari-big-sur--toolbar--toolbar-item-4.svg"
          />
          <Image
            className={styles.coreSafariBigSurTool1}
            width={37}
            height={32}
            alt=""
            src="/core--safari-big-sur--toolbar--toolbar-item-5.svg"
          />
          <Image
            className={styles.coreSafariBigSurTool1}
            width={37}
            height={32}
            alt=""
            src="/core--safari-big-sur--toolbar--toolbar-item-6.svg"
          />
        </div>
        <div className={styles.spacer}>
          <div className={styles.div}>􀙨</div>
        </div>
      </div>
      <Header type="Header Sticky" />
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
