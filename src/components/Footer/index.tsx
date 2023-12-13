import React from 'react';
import ReusableImage from '../common/ReusableImage';
import styles from './styles.module.scss';
import { resourcesData, socialData } from '../../utils/data';
import ReusableSeparator from '../common/ReusableSeparator';
import ReusableRow from '../common/ReusableRow';
import ReusableText from '../common/ReusableText';
import ReusableColumn from '../common/ReusableColumn';
import ReusableLink from '../common/ReusableLink';
const Footer = () => {
  return (
    <ReusableRow className={styles.footer}>
      <ReusableRow className={styles.sectionOne}>
        <ReusableImage
          src='/img/logo.png'
          alt='Logo del sitio'
          className={styles.imageOne}
        />

        <ReusableRow className={styles.containerMaps}>
          {resourcesData.map((data, index) => (
            <ReusableRow
              key={data.title}
              className={styles.containerGroup}
            >
              <ReusableSeparator
                className={`${styles.separator} ${
                  index === 0 ? styles.firstSeparator : ''
                }`}
              />
              <ReusableColumn className={styles.list_items}>
                <ReusableText className={styles.title}>
                  {data.title}
                </ReusableText>
                <ReusableRow className={styles.containerItems}>
                  {data.items.map((item, index) => (
                    <ReusableRow
                      key={index}
                      className={styles.item}
                    >
                      {' '}
                      <ReusableImage
                        src='/img/elipse.jpeg'
                        alt='elipse'
                        className={styles.imageTwo}
                      />
                      <ReusableLink
                        key={index}
                        href={item.link}
                        target='_blank'
                        rel='noreferrer noopener'
                        className={styles.link}
                      >
                        {item.name}
                      </ReusableLink>
                    </ReusableRow>
                  ))}
                </ReusableRow>
              </ReusableColumn>
            </ReusableRow>
          ))}
        </ReusableRow>
      </ReusableRow>
      <ReusableRow className={styles.sectionTwo}>
        {socialData.map((data, index) => (
          <ReusableRow
            key={data.title}
            className={styles.itemContainer}
          >
            {index > 0 && (
              <ReusableSeparator className={styles.separatorSocial} />
            )}
            <ReusableRow className={styles.item}>
              <ReusableLink
                href={data.link}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.link}
              >
                {data.title}
                <ReusableImage
                  src={`${data.icon} `}
                  alt={data.title}
                  className={styles.imageThree}
                />
              </ReusableLink>
            </ReusableRow>
          </ReusableRow>
        ))}
      </ReusableRow>
    </ReusableRow>
  );
};

export default Footer;
