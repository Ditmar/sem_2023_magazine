import React from 'react';
import { socialFollow } from '@/interfaces';
import Row from '../../common/Row';
import Separator from '../../common/Separator';
import Link from '../../common/Link';
import Image from '../../common/Image';
import styles from './styles.module.scss';

interface SocialLinksProps {
  data: socialFollow[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ data }) => (
  <Row className={styles.sectionTwo}>
    {data.map((social, index) => (
      <Row
        key={social.title}
        className={styles.itemContainer}
      >
        {index > 0 && <Separator className={styles.separatorSocial} />}
        <Row className={styles.item}>
          <Link
            href={social.link}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
          >
            {social.title}
            <Image
              src={`${social.icon} `}
              alt={social.title}
              className={styles.imageThree}
            />
          </Link>
        </Row>
      </Row>
    ))}
  </Row>
);

export default SocialLinks;
