import Image from "next/image";
import List from "./list";
import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.frameParent}>
          <div className={styles.logoParent}>
            <Image
              className={styles.logoIcon}
              loading="lazy"
              width={322}
              height={32}
              alt=""
              src="/logo-4.svg"
            />
            <div className={styles.prixWrapper}>
              <div className={styles.prix}>
                <Image
                  className={styles.svgIcon}
                  loading="lazy"
                  width={130}
                  height={72}
                  alt=""
                  src="/svg@2x.png"
                />
                <div className={styles.pricingLogoContainer}>
                  <Image
                    className={styles.logoFiGradiant1Icon}
                    loading="lazy"
                    width={64}
                    height={14}
                    alt=""
                    src="/logofigradiant-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.termsLinkContainerWrapper}>
            <div className={styles.termsLinkContainer}>
              <div className={styles.link}>
                <div className={styles.mispelledTermsContainer}>
                  <span className={styles.mispelledTermsContainer1}>
                    <span className={styles.termsOfUse}>Terms of Use</span>
                    {` `}
                  </span>
                </div>
              </div>
              <div className={styles.andPrivacyPolicyContainer}>
                <span className={styles.mispelledTermsContainer1}>
                  {`and `}
                  <span className={styles.termsOfUse}>Privacy Policy</span>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.linksContainerParent}>
        <div className={styles.linksContainer}>
          <div className={styles.link1} />
          <div className={styles.link2} />
          <div className={styles.link3} />
          <div className={styles.link21}>
            <div className={styles.solutions}>Solutions</div>
            <List
              forEnterprises="For Enterprises"
              forInvestors="For Investors"
              forBanksInsurers={`For Banks & Insurers`}
              becomeAPartner="Become a partner"
            />
          </div>
        </div>
        <div className={styles.socialColumn}>
          <div className={styles.social}>
            <Image
              className={styles.linkIcon}
              loading="lazy"
              width={36}
              height={36}
              alt=""
              src="/link.svg"
            />
            <Image
              className={styles.linkIcon}
              loading="lazy"
              width={36}
              height={36}
              alt=""
              src="/link-1.svg"
            />
            <Image
              className={styles.linkIcon}
              loading="lazy"
              width={36}
              height={36}
              alt=""
              src="/link-2.svg"
            />
            <Image
              className={styles.linkIcon}
              loading="lazy"
              width={36}
              height={36}
              alt=""
              src="/link-3.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.platformColumn}>
        <div className={styles.platformContent}>
          <div className={styles.platformDetails}>
            <div className={styles.link4}>
              <div className={styles.platform}>Platform</div>
              <div className={styles.list}>
                <div className={styles.link5}>
                  <div
                    className={styles.collecteReporting}
                  >{`Collecte & Reporting ESG`}</div>
                </div>
                <div className={styles.link6}>
                  <div className={styles.bilanCarbone}>Bilan Carbone</div>
                </div>
                <div className={styles.link7}>
                  <div className={styles.conformitCsrd}>Conformité CSRD</div>
                </div>
                <div className={styles.link8}>
                  <div className={styles.analyseDeLa}>
                    Analyse de la biodiversité
                  </div>
                </div>
                <div className={styles.link9}>
                  <div className={styles.analyseDesRisquesContainer}>
                    <span className={styles.mispelledTermsContainer1}>
                      <p
                        className={styles.analyseDesRisques}
                      >{`Analyse des risques `}</p>
                      <p className={styles.analyseDesRisques}>
                        et de la double matérialité
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.link11}>
              <div className={styles.greenscope}>Greenscope</div>
              <List
                forEnterprises="About us"
                forEnterprisesWidth="62px"
                forInvestors="Career"
                forInvestorsWidth="47px"
                forBanksInsurers="Press"
                forBanksWidth="39px"
                becomeAPartner="Resources"
                becomeAPartnerWidth="72px"
              />
            </div>
          </div>
        </div>
        <div className={styles.copyright2024}>
          Copyright © 2024. Greenscope. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
