import React from 'react';
import { resourcesFollow } from '@/interfaces';
import Row from '../../common/Row';
import Column from '../../common/Column';
import Separator from '../../common/Separator';
import Text from '../../common/Text';
import Image from '../../common/Image';
import Link from '../../common/Link';
import styles from './styles.module.scss';

interface SourcesProps {
  data: resourcesFollow[];
}

const Sources: React.FC<SourcesProps> = ({ data }) => (
  <Row className={styles.containerMaps}>
    {data.map((section, sectionIndex) => (
      <Row key={section.title} className={styles.containerGroup}>
        <Separator
          className={`${styles.separator} ${
            sectionIndex === 0 ? styles.firstSeparator : ''
          }`}
        />
        <Column className={styles.list_items}>
          <Text className={styles.title}>{section.title}</Text>
          <Row className={styles.containerItems}>
            {section.items.map((item, itemIndex) => (
              <Row key={itemIndex} className={styles.item}>
                <Image
                  src='/img/elipse.jpeg'
                  alt='elipse'
                  className={styles.imageTwo}
                />
                <Link
                  href={item.link}
                  target='_blank'
                  rel='noreferrer noopener'
                  className={styles.link}
                >
                  {item.name}
                </Link>
              </Row>
            ))}
          </Row>
        </Column>
      </Row>
    ))}
  </Row>
);

export default Sources;
