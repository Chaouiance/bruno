import FrameComponent from "./frame-component";
import FrameComponent2 from "./Frame-component2";
import SectionReassurance from "./section-reassurance";
import SectionConsultants from "./section-consultants";
import SectionSolutions from "./section-solutions";
import SectionConsultants1 from "./section-consultants1";
import SectionQuote from "./section-quote";
import SectionConversion from "./section-conversion";
import Footer from "./Footer";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const NextJS = ({ className = "" }) => {
  return (
    <div className={[styles.nextjs, className].join(" ")}>
      <FrameComponent />
      <FrameComponent2 />
      <SectionReassurance />
      <SectionConsultants />
      <SectionSolutions type="Default" />
      <SectionConsultants1 />
      <SectionQuote type="Default" />
      <SectionConversion />
      <Footer />
    </div>
  );
};

NextJS.propTypes = {
  className: PropTypes.string,
};

export default NextJS;
