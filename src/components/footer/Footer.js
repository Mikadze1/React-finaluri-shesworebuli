import fb from "../../assets/images/fb.svg";
import yt from "../../assets/images/youtube.svg";
import ig from "../../assets/images/instagram.svg";
import tt from "../../assets/images/tiktok.svg";
import gmail from "../../assets/images/gmail.svg";
import phone from "../../assets/images/phone.svg";
import loc from "../../assets/images/locations.svg";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.css";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.Footer}>
      <div className={styles.column}>
        <a className={styles.mainA}>{t("Navigation")}</a>
        <a href="#">{t("About us")}</a>
        <a href="#">{t("Terms and Condition")}</a>
        <a href="#">{t("Delivery service")}</a>
        <a href="#">{t("Career")}</a>
        <a href="#">Trade In</a>
      </div>

      <div className={styles.column}>
        <a className={styles.mainA}>{t("Payments")}</a>

        <a href="#">{t("Payment methods")}</a>
        <a href="#">{t("Guarantee")}</a>
        <a href="#">{t("Installment")}</a>
        <a href="#">{t("Return the item")}</a>
      </div>

      <div className={styles.column}>
        <a className={styles.mainA}>{t("Follow us")}</a>
        <div>
          <img src={fb} alt="Facebook" />
          <a href="#">{t("Facebook")}</a>
        </div>
        <div>
          <img src={yt} alt="Youtube" />
          <a href="#">{t("Youtube")}</a>
        </div>
        <div>
          <img src={ig} alt="Instagram" />
          <a href="#">{t("Instagram")}</a>
        </div>
        <div>
          <img src={tt} alt="Tik Tok" />
          <a href="#">{t("Tik Tok")}</a>
        </div>
      </div>

      <div className={styles.column}>
        <a className={styles.mainA}>{t("Contact")}</a>
        <div>
          <img src={gmail} alt="Gmail" />
          <a href="#">{t("info@amazon.ge")}</a>
        </div>
        <div>
          <img src={phone} alt="Phone" />
          <a href="#">{t("+995 555 555 555")}</a>
        </div>
        <div>
          <img src={loc} alt="Locations" />
          <a href="#">{t("Locations")}</a>
        </div>
        <a href="#">{t("Amazon App")}</a>
      </div>
    </div>
  );
};
