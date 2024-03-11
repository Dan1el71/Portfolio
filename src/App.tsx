import StarsBackground from './components/Layout/StarsBackground'
import Header from './components/Layout/Header'
import Section from './components/Layout/Section'
import MeInfo from './components/Sections/MeInfo'
import Projects from './components/Sections/Projects'
import { useTranslation } from 'react-i18next'
import AboutMe from './components/Sections/AboutMe'
import Contact from './components/Sections/Contact'
import Skills from './components/Sections/Skills'
import Footer from './components/Layout/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  const { t } = useTranslation()

  return (
    <>
      <SpeedInsights />
      <Analytics />
      <StarsBackground />
      <Header />
      <main className="px-4">
        <Section className="py-28 md:py-36">
          <MeInfo />
        </Section>
        <div className="space-y-24">
          <Section
            id="projects"
            icon="bi bi-briefcase"
            title={t('header.navItems.projects')}
          >
            <Projects />
          </Section>
          <Section
            id="skills"
            icon="bi bi-tools"
            title={t('header.navItems.skills')}
            className="flex flex-col items-center"
          >
            <Skills />
          </Section>
          <Section
            id="about-me"
            icon="bi bi-person"
            title={t('header.navItems.aboutMe')}
          >
            <AboutMe />
          </Section>
          <Section id="contact">
            <Contact />
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
