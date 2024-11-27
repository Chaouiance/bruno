import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./testimonial.module.css";

const Testimonial = ({ className = "" }) => {
  return (
    <div className={[styles.testimonial, className].join(" ")}>
      <div className={styles.img}>
        <Image
          className={styles.michaelDziedzicNbwKaz2bleUIcon}
          width={775}
          height={485}
          alt=""
          src="/michaeldziedzicnbwkaz2bleunsplash-1@2x.png"
        />
        <Image
          className={styles.stocksyComp59633081Icon}
          width={533}
          height={389}
          alt=""
          src="/stocksy-comp-5963308-1@2x.png"
        />
        <Image
          className={styles.stocksyCompWatermarked57299Icon}
          width={415}
          height={622}
          alt=""
          src="/stocksy-comp-watermarked-5729929-1@2x.png"
        />
      </div>
      <div className={styles.testimonialList}>
        <div className={styles.img1}>
          <Image
            className={styles.michaelDziedzicNbwKaz2bleUIcon}
            width={775}
            height={485}
            alt=""
            src="/michaeldziedzicnbwkaz2bleunsplash-1@2x.png"
          />
          <Image
            className={styles.stocksyComp59633081Icon}
            width={533}
            height={389}
            alt=""
            src="/stocksy-comp-5963308-1@2x.png"
          />
          <Image
            className={styles.stocksyCompWatermarked58494Icon}
            width={318}
            height={476}
            alt=""
            src="/stocksy-comp-watermarked-5849401-1-2@2x.png"
          />
          <Image
            className={styles.stocksyComp59633082Icon}
            width={437}
            height={319}
            alt=""
            src="/stocksy-comp-5963308-2@2x.png"
          />
          <Image
            className={styles.stocksyComp56704921Icon}
            width={570}
            height={400}
            alt=""
            src="/stocksy-comp-5670492-1@2x.png"
          />
        </div>
        <div className={styles.img1}>
          <Image
            className={styles.michaelDziedzicNbwKaz2bleUIcon}
            width={775}
            height={485}
            alt=""
            src="/michaeldziedzicnbwkaz2bleunsplash-1@2x.png"
          />
          <Image
            className={styles.stocksyComp59633081Icon}
            width={533}
            height={389}
            alt=""
            src="/stocksy-comp-5963308-1@2x.png"
          />
          <Image
            className={styles.stocksyCompWatermarked57299Icon}
            width={415}
            height={622}
            alt=""
            src="/stocksy-comp-watermarked-5729929-1@2x.png"
          />
          <Image
            className={styles.stocksyCompWatermarked43199Icon}
            width={363}
            height={545}
            alt=""
            src="/stocksy-comp-watermarked-4319933-1@2x.png"
          />
        </div>
        <div className={styles.itemArticle}>
          <div className={styles.testimonialContent}>
            <div className={styles.quoteIconContainer}>
              <Image
                className={styles.quoteIcon}
                width={200}
                height={14}
                alt=""
                src="/vector-1-1.svg"
              />
            </div>
            <blockquote className={styles.laPlateformeGreenscopeContainer}>
              <p
                className={styles.laPlateformeGreenscope}
              >{`"La plateforme Greenscope `}</p>
              <p className={styles.laPlateformeGreenscope}>
                nous a permis de mener une campagne de collecte efficace auprès
                de l’ensemble de nos participations, avec le soutien d’une
                équipe réactive et de qualité. La plateforme est intuitive, et
                les questionnaires sont fluides.”
              </p>
            </blockquote>
          </div>
          <div className={styles.horizontalborder}>
            <div className={styles.authorDetails}>
              <div className={styles.authorInfo}>
                <Image
                  className={styles.logoIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  alt=""
                  src="/logo-3.svg"
                />
              </div>
              <h3 className={styles.philippe}>Philippe</h3>
            </div>
            <div className={styles.chefProjetEsg}>Chef projet ESG</div>
          </div>
        </div>
        <div className={styles.img1}>
          <Image
            className={styles.michaelDziedzicNbwKaz2bleUIcon}
            width={775}
            height={485}
            alt=""
            src="/michaeldziedzicnbwkaz2bleunsplash-1@2x.png"
          />
          <Image
            className={styles.stocksyComp59633081Icon}
            width={533}
            height={389}
            alt=""
            src="/stocksy-comp-5963308-1@2x.png"
          />
          <Image
            className={styles.stocksyCompWatermarked57299Icon}
            width={415}
            height={622}
            alt=""
            src="/stocksy-comp-watermarked-5729929-1@2x.png"
          />
          <Image
            className={styles.stocksyComp59452341Icon}
            width={418}
            height={627}
            alt=""
            src="/stocksy-comp-5945234-1@2x.png"
          />
        </div>
        <div className={styles.img1}>
          <Image
            className={styles.michaelDziedzicNbwKaz2bleUIcon}
            width={775}
            height={485}
            alt=""
            src="/michaeldziedzicnbwkaz2bleunsplash-1@2x.png"
          />
          <Image
            className={styles.stocksyComp59633081Icon}
            width={533}
            height={389}
            alt=""
            src="/stocksy-comp-5963308-1@2x.png"
          />
          <Image
            className={styles.stocksyCompWatermarked57299Icon}
            width={415}
            height={622}
            alt=""
            src="/stocksy-comp-watermarked-5729929-1@2x.png"
          />
        </div>
        <div className={styles.img1}>
          <Image
            className={styles.michaelDziedzicNbwKaz2bleUIcon}
            width={775}
            height={485}
            alt=""
            src="/michaeldziedzicnbwkaz2bleunsplash-1@2x.png"
          />
          <Image
            className={styles.stocksyComp59633081Icon}
            width={533}
            height={389}
            alt=""
            src="/stocksy-comp-5963308-1@2x.png"
          />
          <Image
            className={styles.stocksyCompWatermarked57299Icon}
            width={415}
            height={622}
            alt=""
            src="/stocksy-comp-watermarked-5729929-1@2x.png"
          />
          <Image
            className={styles.stocksyComp59452341Icon}
            width={418}
            height={627}
            alt=""
            src="/stocksy-comp-5945234-1@2x.png"
          />
          <Image
            className={styles.stocksyCompWatermarked43199Icon}
            width={363}
            height={545}
            alt=""
            src="/stocksy-comp-watermarked-4319933-1@2x.png"
          />
        </div>
        <div className={styles.img6}>
          <Image
            className={styles.michaelDziedzicNbwKaz2bleUIcon}
            width={775}
            height={485}
            alt=""
            src="/michaeldziedzicnbwkaz2bleunsplash-1@2x.png"
          />
          <Image
            className={styles.stocksyComp59633081Icon}
            width={533}
            height={389}
            alt=""
            src="/stocksy-comp-5963308-1@2x.png"
          />
          <Image
            className={styles.stocksyCompWatermarked58494Icon}
            width={318}
            height={476}
            alt=""
            src="/stocksy-comp-watermarked-5849401-1-2@2x.png"
          />
          <Image
            className={styles.stocksyComp59633082Icon}
            width={437}
            height={319}
            alt=""
            src="/stocksy-comp-5963308-2@2x.png"
          />
          <Image
            className={styles.stocksyComp56704921Icon}
            width={570}
            height={400}
            alt=""
            src="/stocksy-comp-5670492-1@2x.png"
          />
        </div>
        <div className={styles.img6}>
          <Image
            className={styles.michaelDziedzicNbwKaz2bleUIcon}
            width={775}
            height={485}
            alt=""
            src="/michaeldziedzicnbwkaz2bleunsplash-1@2x.png"
          />
          <Image
            className={styles.stocksyComp59633081Icon}
            width={533}
            height={389}
            alt=""
            src="/stocksy-comp-5963308-1@2x.png"
          />
          <Image
            className={styles.stocksyCompWatermarked57299Icon}
            width={415}
            height={622}
            alt=""
            src="/stocksy-comp-watermarked-5729929-1@2x.png"
          />
          <Image
            className={styles.stocksyComp59452341Icon}
            width={418}
            height={627}
            alt=""
            src="/stocksy-comp-5945234-1@2x.png"
          />
        </div>
        <div className={styles.img6}>
          <Image
            className={styles.michaelDziedzicNbwKaz2bleUIcon}
            loading="lazy"
            width={775}
            height={485}
            alt=""
            src="/michaeldziedzicnbwkaz2bleunsplash-1@2x.png"
          />
          <Image
            className={styles.stocksyComp59633081Icon}
            width={533}
            height={389}
            alt=""
            src="/stocksy-comp-5963308-1@2x.png"
          />
          <Image
            className={styles.stocksyCompWatermarked58494Icon}
            width={318}
            height={476}
            alt=""
            src="/stocksy-comp-watermarked-5849401-1-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  className: PropTypes.string,
};

export default Testimonial;
