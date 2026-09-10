import { useReveal } from './lib/useReveal.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Solution from './components/Solution.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Benefits from './components/Benefits.jsx'
import Testimonials from './components/Testimonials.jsx'
import Differentiators from './components/Differentiators.jsx'
import Trust from './components/Trust.jsx'
import Plans from './components/Plans.jsx'
import Faq from './components/Faq.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'
import StickyCta from './components/StickyCta.jsx'

// Ordem das seções num só lugar — trocar a ordem aqui é a variação de A/B.
const SECTIONS = {
  problem: Problem,
  solution: Solution,
  features: Features,
  howItWorks: HowItWorks,
  benefits: Benefits,
  testimonials: Testimonials,
  differentiators: Differentiators,
  trust: Trust,
  plans: Plans,
  faq: Faq,
  finalCta: FinalCta,
}

const SECTION_ORDER = [
  'problem',
  'solution',
  'features',
  'howItWorks',
  'benefits',
  'testimonials',
  'differentiators',
  'trust',
  'plans',
  'faq',
  'finalCta',
]

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        {SECTION_ORDER.map((key) => {
          const Section = SECTIONS[key]
          return <Section key={key} />
        })}
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
