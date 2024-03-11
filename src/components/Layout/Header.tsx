import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { IoLanguage } from 'react-icons/io5'

const Header = () => {
  const { t, i18n } = useTranslation()
  const navItems = [
    {
      titleKey: 'header.navItems.projects',
      label: 'projects',
      url: '/#projects',
    },
    {
      titleKey: 'header.navItems.skills',
      label: 'skills',
      url: '/#skills',
    },
    {
      titleKey: 'header.navItems.aboutMe',
      label: 'about-me',
      url: '/#about-me',
    },
    {
      titleKey: 'header.navItems.contact',
      label: 'contact',
      url: '/#contact',
    },
  ]

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  useEffect(() => {
    const nav = document.querySelector('nav')

    const handleScroll = () => {
      if (window.scrollY > 30) {
        nav?.classList.add('bg-gray-900')
      } else {
        nav?.classList.remove('bg-gray-900')
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const html = document.querySelector('html')
    const title = document.querySelector('title')
    if (html) {
      html.setAttribute('lang', i18n.language)
    }
    if (title) {
      title.textContent = t('title')
    }
  }, [i18n.language, t])

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav className="flex px-3 text-xs sm:text-sm font-medium rounded-full text-gray-200 justify-center items-center transition ease-in-out duration-700">
        {navItems.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="relative block p-2 transition hover:text-font-secondary"
            aria-label={link.label}
          >
            {t(link.titleKey)}
          </a>
        ))}
      </nav>
      <button
        onClick={handleLanguageChange}
        className="absolute sm:right-10 flex rounded-md p-1 items-center sm:visible invisible"
      >
        <IoLanguage className="text-gray-200 mr-4" />
        <p>{i18n.language}</p>
      </button>
    </header>
  )
}

export default Header
