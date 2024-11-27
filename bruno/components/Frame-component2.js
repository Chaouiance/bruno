import Image from "next/image";
import CTA from "./c-t-a";
import PropTypes from "prop-types";
import styles from "./Frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.nextjsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.videoParent}>
          <div className={styles.video}>
            <video width={892} height={640} autoPlay muted loop controls >
              <source className={styles.stocksyComp46335621} src="/presentation.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>
          <Image
            className={styles.visualbrochureZa064l1Icon}
            loading="lazy"
            width={592}
            height={441}
            alt=""
            src="/visualbrochure-za064l-1@2x.png"
          />


        </div>
        <div className={styles.frameGroup}>
          <div className={styles.whereEsgCanBeLeveragedWrapper}>
            <h1 className={styles.whereEsgCanContainer}>
              <p className={styles.whereEsg}>{`Where ESG `}</p>
              <p className={styles.whereEsg}>can be leveraged</p>
            </h1>
          </div>
          <div className={styles.vectorWrapper}>
            <Image
              className={styles.vectorIcon}
              width={64}
              height={64}
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.firstLinkWrapper}>
                <div className={styles.firstLink}>
                  +500 companies use Greenscope
                </div>
              </div>
              <CTA
                background="Light"
                size="Medium"
                style="Primary"
                type="Button"
                demanderUneDmo="Get a demo"
                arrowRight="/arrowright-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
