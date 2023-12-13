import React from 'react';
import FooterLogo from './FooterLogo';
import Sources from './Sources';
import SocialLinks from './SocialLinks';
import { resourcesData, socialData } from '../../utils/data';
import Row from '../common/Row';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <Row className={styles.footer}>
      <Row className={styles.sectionOne}>
        <FooterLogo />
        <Sources data={resourcesData} />
      </Row>
      <SocialLinks data={socialData} />
    </Row>
  );
};

export default Footer;
