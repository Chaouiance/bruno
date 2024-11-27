import Image from "next/image";
import Tag from "./tag";
import CTA from "./c-t-a";
import PropTypes from "prop-types";
import styles from "./section1.module.css";

const Section1 = ({ className = "", text, image, color, colorText, colorText2, tagsBg, colorTextTag, colorTextLearnMore, textBusiness, iconLearnMore}) => {
  return (
    <div style={{ backgroundColor: color }} className={[styles.section, className].join(" ")}>
      <div className={styles.sectionInner}>
        <div className={styles.titleParent}>
          <div className={styles.title}>
            <h1 style={{ color: colorText }} className={styles.esgDataSolution}>{text}</h1>
          </div>
          <div className={styles.paragraphhorizontalborder}>
            <div className={styles.list}>
              <div className={styles.dataItem}>
                <div style={{ color: colorText2 }} className={styles.automaticallyCollectData}>
                  {textBusiness}
                </div>
              </div>
            </div>
          </div>

          <Tag colorTextTag={colorTextTag} tagsBg={tagsBg} color="Dark Purple" />
          <Tag colorTextTag={colorTextTag} tagsBg={tagsBg} color="Dark Purple" tagLeft="unset" tagRight="114px" />
        </div>
      </div>
      <div className={styles.img}>
        <Image
          className={styles.visualbrochureZa064l1Icon}
          loading="lazy"
          width={492}
          height={380}
          alt=""
          src={image}
        />
        <CTA
          background="Light"
          size="Medium"
          style="Tiertiary"
          type="Link"
          cTAHeight="unset"
          demanderUneDmo="Learn more"
          arrowRight={iconLearnMore}
          colorTextLearnMore={colorTextLearnMore}

        />
      </div>
    </div>
  );
};

Section1.propTypes = {
  className: PropTypes.string,
};

export default Section1;
