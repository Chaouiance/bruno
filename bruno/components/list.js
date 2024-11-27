import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./list.module.css";

const List = ({
  className = "",
  forEnterprises,
  forEnterprisesWidth,
  forInvestors,
  forInvestorsWidth,
  forBanksInsurers,
  forBanksWidth,
  becomeAPartner,
  becomeAPartnerWidth,
}) => {
  const forEnterprisesStyle = useMemo(() => {
    return {
      width: forEnterprisesWidth,
    };
  }, [forEnterprisesWidth]);

  const forInvestorsStyle = useMemo(() => {
    return {
      width: forInvestorsWidth,
    };
  }, [forInvestorsWidth]);

  const forBanksStyle = useMemo(() => {
    return {
      width: forBanksWidth,
    };
  }, [forBanksWidth]);

  const becomeAPartnerStyle = useMemo(() => {
    return {
      width: becomeAPartnerWidth,
    };
  }, [becomeAPartnerWidth]);

  return (
    <div className={[styles.list, className].join(" ")}>
      <div className={styles.link}>
        <div className={styles.forEnterprises} style={forEnterprisesStyle}>
          {forEnterprises}
        </div>
      </div>
      <div className={styles.link1}>
        <div className={styles.forInvestors} style={forInvestorsStyle}>
          {forInvestors}
        </div>
      </div>
      <div className={styles.link2}>
        <div className={styles.forBanks} style={forBanksStyle}>
          {forBanksInsurers}
        </div>
      </div>
      <div className={styles.link3}>
        <div className={styles.becomeAPartner} style={becomeAPartnerStyle}>
          {becomeAPartner}
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string,
  forEnterprises: PropTypes.string,
  forInvestors: PropTypes.string,
  forBanksInsurers: PropTypes.string,
  becomeAPartner: PropTypes.string,

  /** Style props */
  forEnterprisesWidth: PropTypes.string,
  forInvestorsWidth: PropTypes.string,
  forBanksWidth: PropTypes.string,
  becomeAPartnerWidth: PropTypes.string,
};

export default List;
