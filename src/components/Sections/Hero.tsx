import { useTranslation } from 'react-i18next'
import Button from '../Layout/Button'

const MeInfo = () => {
  const { t } = useTranslation()

  return (
    <div className="max-w-xl">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {t('MeInfo.greeting')} {t('MeInfo.name')}, {t('MeInfo.role')}
      </h1>
      <div className="mt-6 text-xl text-gray-300">
        <p className="[&>strong]:text-font-secondary [&>strong]:font-semibold">
          {t('MeInfo.experience.description')}
        </p>
        <p className="mt-3 [&>strong]:text-font-secondary [&>strong]:font-semibold">
          {t('MeInfo.passionateAbout.description')} <br />
          <strong>{t('MeInfo.passionateAbout.alwaysReady')}</strong>
        </p>
      </div>
      <a href="mailto:ddrmhk1@gmail.com">
        <Button className="mt-5 text-base">{t('contact.contactButton')}</Button>
      </a>
    </div>
  )
}

export default MeInfo
