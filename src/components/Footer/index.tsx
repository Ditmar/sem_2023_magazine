import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { resourcesData, socialIconsData } from "../../utils/data";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="/img/logo.jpeg" alt="Logo del sitio" />
        </div>

        <div className={styles.sections}>
          {resourcesData.map((column, columnIndex) => (
            <div
              key={column.title}
              className={`${styles.section} ${styles.section}`}
            >
              <div
                className={`${styles.separator} ${
                  columnIndex === 0 ? styles.firstSeparator : ""
                }`}
              ></div>
              <div className={styles.list_items}>
                <h3 className={styles.title}>{column.title}</h3>
                <ul>
                  {column.items.map((item, index) => (
                    <li key={index}>
                      <img
                        alt="elipse"
                        src="/img/elipse.jpeg"
                        className={styles.elipse}
                      />
                      <span
                        className={`${styles.item_link} ${styles.item_linki}`}
                      >
                        {item === "ARTÍCULOS" && (
                          <a
                            href="http://revista.repositoriounipol.com/articles"
                            target="_blank"
                            rel="noreferrer noopener"
                            className={styles.link}
                          >
                            {item}
                          </a>
                        )}
                        {item === "VOLÚMENES" && (
                          <a
                            href="http://revista.repositoriounipol.com/volumes"
                            target="_blank"
                            rel="noreferrer noopener"
                            className={styles.link}
                          >
                            {item}
                          </a>
                        )}
                        {item === "UNIPOL.EDU.BO" && (
                          <a
                            href="http://unipol.edu.bo"
                            target="_blank"
                            rel="noreferrer noopener"
                            className={styles.link}
                          >
                            {item}
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.socialFollow}>
        {socialIconsData.map((socialIcon, index) => (
          <div key={socialIcon.title} className={styles.itemContainer}>
            {index > 0 && <div className={styles.separatorSocial}></div>}
            <ul className={styles.list_items}>
              <li>
                <a
                  href={socialIcon.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.link}
                >
                  <div className={`${styles.item} ${styles.itemSocial}`}>
                    <span
                      className={`${styles.item_link} ${styles.itemContact}`}
                    >
                      {socialIcon.title}
                      {socialIcon.icon === faRss && (
                        <FontAwesomeIcon
                          icon={faRss}
                          className={`${styles.icon} ${styles.fontAwesomeIcon}`}
                        />
                      )}
                      {socialIcon.icon === faFacebook && (
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className={`${styles.icon} ${styles.fontAwesomeIcon}`}
                        />
                      )}
                      {socialIcon.icon === faTwitter && (
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className={`${styles.icon} ${styles.fontAwesomeIcon}`}
                        />
                      )}{" "}
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
