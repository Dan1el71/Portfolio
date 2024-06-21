import TAGS from './tags'
import i18n from '../i18n/i18n'

export default [
  {
    id: 'tickets',
    title: i18n.t('projects.tickets.title'),
    description: i18n.t('projects.tickets.description'),
    image: './projects/tickets.webp',
    github: '/#',
    tags: [TAGS.ANGULAR, TAGS.CHAT, TAGS.EXPRESS, TAGS.DOCKER],
  },
  {
    id: 'shortly',
    title: i18n.t('projects.shortly.title'),
    description: i18n.t('projects.shortly.description'),
    link: 'https://shortly0.vercel.app/',
    image: './projects/url-shorter.webp',
    github: 'https://github.com/Dan1el71/shortly',
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.NODE, TAGS.PRISMA],
  },
  {
    id: 'facturation',
    title: i18n.t('projects.facturation.title'),
    description: i18n.t('projects.facturation.description'),
    image: './projects/facturation.webp',
    github: 'https://github.com/Dan1el71/Sistema-de-Facturacion',
    tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.POSTGRE],
  },
]
