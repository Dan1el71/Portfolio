import { useTranslation } from 'react-i18next'
import PROJECTS from '../../consts/projects'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-16">
      {PROJECTS.map(({ id, title, image, link, tags, github }, key) => (
        <article
          key={key}
          className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
        >
          <div className="w-full md:w-1/2">
            <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              <a href={link} target="_blank" rel="noreferrer">
                <img
                  src={image}
                  alt={title}
                  className="object-cover p-3 object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-100"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:max-w-lg">
            <h3 className="text-2xl font-bold text-font-primary">
              {t(`projects.${id}.title`)}
            </h3>
            <ul className="flex flex-row flex-wrap mb-3 gap-x-2 gap-y-2 mt-3 pointer-events-none">
              {tags.map((tag, key) => (
                <li key={key}>
                  <span
                    className={`flex gap-x-2 rounded-full items-center text-sm ${tag.class} py-1 px-2 `}
                  >
                    <tag.component className={`size-5 ${tag.class}`} />
                    {tag.name}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-2 text-gray-400">
              {t(`projects.${id}.description`)}
            </div>
            <div className="mt-2 text-gray-400">
              <footer className="flex items-end justify-start mt-4 gap-x-4">
                <a
                  href={github}
                  role="link"
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                >
                  <FaGithub className="size-4" />
                  {t('projects.code')}
                </a>
              </footer>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
export default Projects
