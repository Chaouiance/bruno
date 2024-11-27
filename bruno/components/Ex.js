import React, { useMemo } from "react";
import PropTypes from "prop-types";


// Composant Tag
const Tag = ({ className = "", color = "Purple", tagLeft, tagRight, tagPosition, tagTop }) => {
  const tagStyle = useMemo(() => {
    return {
      left: tagLeft,
      right: tagRight,
      position: tagPosition,
      top: tagTop,
    };
  }, [tagLeft, tagRight, tagPosition, tagTop]);

  return (
    <div className={`main ${className}  testing`} data-color={color} style={tagStyle}>
      <div className="engagement2">Mot Clé associé</div>
    </div>
  );
};

Tag.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  tagLeft: PropTypes.string,
  tagRight: PropTypes.string,
  tagPosition: PropTypes.string,
  tagTop: PropTypes.string,
};

// Composant CTA
const CTA = ({ className = "", background = "Light", size = "Medium", style = "Primary", type = "Button", arrowRight, enSavoirPlusColor, enSavoirPlusTextAlign, enSavoirPlusJustifyContent }) => {
  const enSavoirPlusStyle = useMemo(() => {
    return {
      color: enSavoirPlusColor,
      textAlign: enSavoirPlusTextAlign,
      justifyContent: enSavoirPlusJustifyContent,
    };
  }, [enSavoirPlusColor, enSavoirPlusTextAlign, enSavoirPlusJustifyContent]);

  return (
    <div className={`cta1 ${className}`} data-background={background} data-size={size} data-style={style} data-type={type}>
      <div className="en-savoir-plus1" style={enSavoirPlusStyle}>Learn more</div>
      <img className="arrow-right-icon1" loading="lazy" alt="" src={arrowRight} />
    </div>
  );
};

CTA.propTypes = {
  className: PropTypes.string,
  arrowRight: PropTypes.string,
  background: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.number,
  type: PropTypes.number,
  enSavoirPlusColor: PropTypes.string,
  enSavoirPlusTextAlign: PropTypes.string,
  enSavoirPlusJustifyContent: PropTypes.string,
};

// Composant FrameComponent
const FrameComponent = ({ className = "", callToActionWidth, callToActionBackgroundColor, callToActionWidth1, callToActionBackgroundColor1 }) => {
  const callToActionStyle = useMemo(() => {
    return {
      width: callToActionWidth,
      backgroundColor: callToActionBackgroundColor,
    };
  }, [callToActionWidth, callToActionBackgroundColor]);

  const callToAction1Style = useMemo(() => {
    return {
      width: callToActionWidth1,
      backgroundColor: callToActionBackgroundColor1,
    };
  }, [callToActionWidth1, callToActionBackgroundColor1]);

  return (
    <section className={`all-your-esg-journey-needs-in-container ${className}`}>
      <h1 className="all-your-esg-container4">
        <span className="all-your-esg-container5">
          <p className="all-your-esg2">{`All your ESG journey `}</p>
          <p className="needs-in-one2">needs in one platform</p>
        </span>
      </h1>
      <div className="cta-types-wrapper">
        <nav className="cta-types">
          <div className="call-to-action8"><div className="esg-data-solution3">ESG Data Solution</div></div>
          <div className="call-to-action9"><div className="carbon-assessment3">Carbon Assessment</div></div>
          <div className="call-to-action10" style={callToActionStyle}><div className="csrd3">CSRD</div></div>
          <div className="call-to-action11" style={callToAction1Style}><div className="impact-analysis3">{`Impact Analysis & Compliance`}</div></div>
        </nav>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  callToActionWidth: PropTypes.string,
  callToActionBackgroundColor: PropTypes.string,
  callToActionWidth1: PropTypes.string,
  callToActionBackgroundColor1: PropTypes.string,
};

// Composant CsrBrochure
const CsrBrochure = ({ className = "", visualBrochureZA064L1, visualBrochureZA064L1IconBorder, visualBrochureZA064L1IconBackgroundColor, visualBrochureZA064L1IconOutline }) => {
  const visualBrochureZA064L1IconStyle = useMemo(() => {
    return {
      border: visualBrochureZA064L1IconBorder,
      backgroundColor: visualBrochureZA064L1IconBackgroundColor,
      outline: visualBrochureZA064L1IconOutline,
    };
  }, [visualBrochureZA064L1IconBorder, visualBrochureZA064L1IconBackgroundColor, visualBrochureZA064L1IconOutline]);

  return (
    <div className={`csr-brochure ${className}`}>
      <div className="img2">
        <img className="visualbrochure-za064l-1-icon2" loading="lazy" alt="" src={visualBrochureZA064L1} style={visualBrochureZA064L1IconStyle} />
        <CTA background="Light" size="Medium" style="Tiertiary" type="Link" arrowRight="/arrowright2@2x.png" enSavoirPlusColor="#3c4a41" enSavoirPlusTextAlign="center" enSavoirPlusJustifyContent="center" />
      </div>
    </div>
  );
};

CsrBrochure.propTypes = {
  className: PropTypes.string,
  visualBrochureZA064L1: PropTypes.string,
  visualBrochureZA064L1IconBorder: PropTypes.string,
  visualBrochureZA064L1IconBackgroundColor: PropTypes.string,
  visualBrochureZA064L1IconOutline: PropTypes.string,
};

// Composant SectionSolutionsMerged
const SectionSolutionsMerged = ({
  className = "",
  cSRD = "CSRD",
  leverageOurExpertiseAndTools = "Leverage our expertise and tools",
}) => {
  return (
    <div className={`root ${className}`}>
      <FrameComponent callToActionWidth="60px" callToActionBackgroundColor="unset" callToActionWidth1="255px" callToActionBackgroundColor1="#f4f8ef" />
      <section className="section2">
        <div className="title-container">
          <div className="title2">
            <h1 className="csrd2">{cSRD}</h1>
          </div>
        </div>
        <div className="engagement-tags-parent">
          <div className="engagement-tags">
            <Tag color="Dark Purple" />
            <Tag color="Dark Purple" />
          </div>
          <div className="leverage-our-expertise">{leverageOurExpertiseAndTools}</div>
        </div>
        <CsrBrochure visualBrochureZA064L1="/visualbrochure-za064l-1@2x.png" />
      </section>
    </div>
  );
};

SectionSolutionsMerged.propTypes = {
  className: PropTypes.string,
  cSRD: PropTypes.string,
  leverageOurExpertiseAndTools: PropTypes.string,
};

export default SectionSolutionsMerged;