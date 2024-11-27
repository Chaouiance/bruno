import Image from "next/image";
import CTA from "./c-t-a";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "", type = "Default" }) => {
  return (
    <header className={[styles.header1, className].join(" ")} data-type={type}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logoParent}>
            <Image
              className={styles.logoIcon}
              loading="lazy"
              width={250}
              height={25}
              alt=""
              src="/logo.svg"
            />
            <div className={styles.linksWrapper}>
              <div className={styles.links}>
                <div className={styles.services}>
                  <div className={styles.firstLink}>Solutions</div>
                  <div className={styles.vectorWrapper}>
                    <Image
                      className={styles.vectorIcon}
                      width={7}
                      height={4}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <Image
                    className={styles.vectorIcon1}
                    width={7}
                    height={4}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className={styles.pricing}>
                  <div className={styles.firstLink1}>Pricing</div>
                </div>
                <div className={styles.secteursParent}>
                  <div className={styles.secteurs}>
                    <div className={styles.firstLink2}>Platform</div>
                    <Image
                      className={styles.icons}
                      width={9}
                      height={9}
                      alt=""
                      src="/icons.svg"
                    />
                  </div>
                  <div className={styles.vectorContainer}>
                    <Image
                      className={styles.vectorIcon2}
                      width={7}
                      height={4}
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <Image
                    className={styles.vectorIcon3}
                    width={7}
                    height={4}
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <div className={styles.secteurs1}>
                  <div className={styles.firstLink3}>Resources</div>
                  <Image
                    className={styles.icons1}
                    width={9}
                    height={9}
                    alt=""
                    src="/icons1.svg"
                  />
                </div>
                <div className={styles.pricing1}>
                  <div className={styles.firstLink4}>About</div>
                </div>
                <div className={styles.pricing2}>
                  <div className={styles.firstLink5}>Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ctaWrapper}>
          <CTA
            background="Light"
            size="Small"
            style="Secondary"
            type="Button"
            cTAHeight="40px"
            demanderUneDmo="Demander une démo"
            arrowRight="/arrowright@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  type: PropTypes.number,
};

export default Header;
