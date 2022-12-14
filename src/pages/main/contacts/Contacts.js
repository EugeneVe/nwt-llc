import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as LocationIcon } from "assets/icons/Location.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/Phone.svg";
import { ReactComponent as EmailIcon } from "assets/icons/Email.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/Facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/Instagram.svg";
import { ReactComponent as YoutubeIcon } from "assets/icons/Youtube.svg";
import OfficeImage from "../../../assets/images/office-image.jpg";
import ContactForm from "components/contactForm/contactForm";
import "./Contacts.scss";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className="contacts-wrapper" name="contacts">
      <div className="contacts-box">
        <div className="side-left">
          <div className="contacts-label">
            <div className="pre-label">{t("contact")}</div>
            <div className="after-label">{t("us")}</div>
          </div>
          <div className="contacts-content">
            <div className="address">
              <div className="contact-icon">
                <LocationIcon />
              </div>
              <div className="contact-text">
                <a
                  href="https://www.google.com/maps/place/34%C2%B005'13.4%22N+84%C2%B000'00.9%22W/@34.0870421,-84.0008002,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0xc158c4fe39ca4cf2!8m2!3d34.087041!4d-84.000253"
                  target="blank"
                >
                  2400 Satellite Blvd NE, Buford, GA 30518, Suite E
                </a>
              </div>
            </div>
            <div className="phone">
              <div className="contact-icon">
                <PhoneIcon />
              </div>
              <div className="contact-text">
                <a href="tel:+14044907923">+1(404)490-7923</a>
              </div>
            </div>
            <div className="email">
              <div className="contact-icon">
                <EmailIcon />
              </div>
              <div className="contact-text">
                <a href="mailto:office@nwt-llc.com">office@nwt-llc.com</a>
              </div>
            </div>
            <div className="work-time">
              {t("work time1")} <br /> {t("work time2")}
            </div>
          </div>
          <div className="contacts-label follow-us">
            <div className="pre-label">{t("follow")}</div>
            <div className="after-label">{t("us")}</div>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/nwtllc" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/newworldtelecomllc"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@officenwt" target="_blank" rel="noopener noreferrer" title="Youtube">
              <YoutubeIcon />
            </a>
          </div>
        </div>
        <div className="side-right">
          <ContactForm />
        </div>
      </div>
      <iframe
        className="map"
        title="google map"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=34.08760926404868,%20-84.00087892734433+(New%20Word%20Telecom)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      />
      <div className="office-image">
        <img src={OfficeImage} alt="" />
      </div>
    </div>
  );
};

export default Contacts;
