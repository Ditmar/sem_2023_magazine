import { socialFollow, resourcesFollow } from '@/interfaces';
export const resourcesData: resourcesFollow[] = [
  {
    title: 'RECURSOS',
    items: [
      {
        name: 'ARTÍCULOS',
        link: 'https://unipol.edu.bo',
      },
      {
        name: 'VOLÚMENES',
        link: 'http://revista.repositoriounipol.com/articles',
      },
    ],
  },
  {
    title: 'PÁGINA',
    items: [
      {
        name: 'UNIPOL.EDU.BO',
        link: 'https://tu-rss-feed.com',
      },
    ],
  },
];

export const socialData: socialFollow[] = [
  {
    title: 'UBICACIÓN',
    icon: '/img/ubicacion.png',

    link: 'https://tu-rss-feed.com',
  },
  {
    title: 'SÍGUENOS EN',

    icon: '/img/facebook.svg',
    link: 'https://facebook.com/tu-cuenta',
  },
];
