import Image from "next/image";
import Testimonial from "./testimonial";
import PropTypes from "prop-types";
import styles from "./section-quote.module.css";

const SectionQuote = ({ className = "", type = "Default" }) => {
  return (
    <section
      className={[styles.sectionQuote, className].join(" ")}
      data-type={type}
    >
      <div className={styles.companyCount}>
        <h1 className={styles.companiesUseGreenscope}>
          +500 companies use Greenscope
        </h1>
      </div>
      <Testimonial />
      <div className={styles.testimonialQuote}>
        <div className={styles.quoteContent}>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Fermentum nulla in laoreet
            elit lectus id porttitor arcu gravida. Eu elementum convallis enim
            eget vitae fusce. In aenean eget risus tortor.
          </div>
          <div className={styles.quoteDiagram}>
            <div className={styles.diagramContainer}>
              <div className={styles.arrowsDiagrams221Wrapper}>
                <Image
                  className={styles.arrowsDiagrams221Icon}
                  loading="lazy"
                  width={19}
                  height={19}
                  alt=""
                  src="/arrowsdiagrams22-1-2.svg"
                />
              </div>
              <div className={styles.arrowsDiagrams221Container}>
                <Image
                  className={styles.arrowsDiagrams221Icon1}
                  loading="lazy"
                  width={19}
                  height={19}
                  alt=""
                  src="/arrowsdiagrams22-1-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SectionQuote.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  type: PropTypes.number,
};

export default SectionQuote;
