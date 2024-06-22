import { useTranslation } from 'react-i18next'
import Button from '../Layout/Button'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t('contact.availableToWork')}
      </h2>
      <p className="max-w-xl my-5 text-base text-center font-semibold">
        {t('contact.interestedInWorking')}{' '}
        <span className="text-font-secondary">{t('contact.alwaysReady')}</span>
      </p>
      <a href="mailto:ddrmhk1@gmail.com">
        <Button className="mt-5">{t('contact.contactButton')}</Button>
      </a>
    </div>
  )
}

export default Contact
