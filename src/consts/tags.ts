import { IconType } from 'react-icons'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { TbBrandTypescript } from 'react-icons/tb'
import {
  SiExpress,
  SiPostgresql,
  SiSpringboot,
  SiPrisma,
  SiAngular,
  SiDocker,
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { PiFileSqlBold } from 'react-icons/pi'

const TAGS: Record<
  string,
  { name: string; class: string; color: string; component: IconType }
> = {
  REACT: {
    name: 'ReactJS',
    class: 'bg-blue-500',
    color: 'text-blue-400',
    component: FaReact,
  },
  NODE: {
    name: 'NodeJs',
    class: 'bg-green-500',
    color: 'text-green-500',
    component: FaNodeJs,
  },
  TAILWIND: {
    name: 'TailwindCSS',
    class: 'bg-cyan-500',
    color: 'text-blue-600',
    component: BiLogoTailwindCss,
  },
  PRISMA: {
    name: 'Prisma',
    class: 'bg-blue-400',
    color: 'text-blue-200',
    component: SiPrisma,
  },
  EXPRESS: {
    name: 'Express',
    class: 'bg-green-400',
    color: 'text-green-600',
    component: SiExpress,
  },
  POSTGRE: {
    name: 'Postgresql',
    class: 'bg-red-400',
    color: 'text-blue-300',
    component: SiPostgresql,
  },
  SPRING: {
    name: 'SpringBoot',
    class: 'bg-green-600',
    color: 'text-green-600',
    component: SiSpringboot,
  },
  JAVA: {
    name: 'Java',
    class: 'bg-red-600',
    color: 'text-red-600',
    component: DiJava,
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    class: 'bg-blue-800',
    color: 'text-blue-800',
    component: TbBrandTypescript,
  },
  SQL: {
    name: 'SQL',
    class: 'bg-blue-400',
    color: 'text-white',
    component: PiFileSqlBold,
  },
  ANGULAR: {
    name: 'Angular',
    class: 'bg-red-500',
    color: 'text-red-500',
    component: SiAngular,
  },
  DOCKER: {
    name: 'Docker',
    class: 'bg-blue-600',
    color: 'text-blue-400',
    component: SiDocker,
  },
} as const

export default TAGS
