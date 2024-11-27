import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./tag.module.css";

const Tag = ({ className = "", tagsBg, color, tagLeft, tagRight, colorTextTag }) => {
  const tagStyle = useMemo(() => {
    return {
      left: tagLeft,
      right: tagRight,
      backgroundColor: `${tagsBg}`,
      color: `${colorTextTag}`
    };
  }, [tagLeft, tagRight, tagsBg]);

  return (

    <div
      className={[styles.tag, className].filter(Boolean).join(" ")} // Filtre les classes vides
      data-color={color}
      style={tagStyle}
    >

      <div className={styles.engagement}>Mot Clé associé</div>

    </div>
  );
};

Tag.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  color: PropTypes.string, // Corrigé pour refléter une chaîne

  /** Style props */
  tagLeft: PropTypes.string,
  tagRight: PropTypes.string,

  /** Couleur de fond des tags */
  tagsbg: PropTypes.string, // Ajouté pour typer tagsbg
};

export default Tag;
