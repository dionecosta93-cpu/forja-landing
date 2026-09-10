import { solution } from '../content/copy.js'
import { IconCheck } from './icons.jsx'
import PhoneFrame from './PhoneFrame.jsx'
import Screen from './screens/index.jsx'
import styles from './Solution.module.css'

export default function Solution() {
  return (
    <section className={`section ${styles.wrap}`} id="solucao">
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual}>
          <PhoneFrame width="clamp(220px, 66vw, 288px)">
            <Screen name="LifeGoals" />
          </PhoneFrame>
        </div>
        <div className={styles.copy}>
          <p className="eyebrow reveal">{solution.eyebrow}</p>
          <h2 className="section-title reveal">{solution.title}</h2>
          <p className="section-lead reveal">{solution.body}</p>
          <ul className={styles.list}>
            {solution.points.map((p, i) => (
              <li key={i} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <IconCheck width={20} height={20} className={styles.check} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
