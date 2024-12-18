import { useState } from 'react'
import { useTranslation } from 'react-i18next'
//import EXPERIENCE from '../../consts/experience'
import RESUME from '/Resume.pdf?url'
import Button from '../Layout/Button'
import pkg from 'file-saver'

const AboutMe = () => {
  const { saveAs } = pkg
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)

  const handleDownloadCV = async () => {
    try {
      setLoading(true)
      saveAs(RESUME, 'daniel-rangel-cv.pdf')
      setLoading(false)
    } catch (error) {
      console.error('Error al descargar el archivo:', error)
    }
  }

  return (
    <article className="flex flex-col md:flex-row justify-center gap-8 text-gray-300">
      <div className="md:w-1/2 w-full [&>p]:mb-4 text-font-primary font-normal font-mono [&>p>strong]:text-font-secondary [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty">
        <p>
          {t('aboutMe.bio.name')}
          <strong> {t('aboutMe.bio.passion')}</strong>
        </p>
        <p>
          {t('aboutMe.bio.focus')}
          <br />
          <strong> {t('aboutMe.bio.self-taught')} </strong>
        </p>
        <Button disabled={loading} onClick={handleDownloadCV}>
          {t('aboutMe.downloadCV')}
        </Button>
      </div>
      <div className="md:w-1/2 w-full border-l-2">
        <div className="pl-4">
          <p className="mb-2 font-bold text-lg">{t('aboutMe.experience')}</p>
          <ul className="list-none pl-4">
            <li className="mb-4">
              <strong>{t('aboutMe.systemEngineering.title')}</strong>
              <p>{t('aboutMe.systemEngineering.institution')}</p>
              <span>{t('aboutMe.systemEngineering.year')}</span>
            </li>
            <li className="mb-4">
              <strong>{t('aboutMe.webDeveloper.title')}</strong>
              <p>{t('aboutMe.webDeveloper.institution')}</p>
              <span>{t('aboutMe.webDeveloper.year')}</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default AboutMe
