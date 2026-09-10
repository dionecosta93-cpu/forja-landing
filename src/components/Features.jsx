import { features } from '../content/copy.js'
import { IconCheck } from './icons.jsx'
import PhoneFrame from './PhoneFrame.jsx'
import Screen from './screens/index.jsx'
import styles from './Features.module.css'

function FeatureRow({ data, flip }) {
  return (
    <div className={`${styles.row} ${flip ? styles.flip : ''}`}>
      <div className={`${styles.visual} reveal`}>
        <PhoneFrame width="clamp(220px, 70vw, 286px)">
          <Screen name={data.screen} />
        </PhoneFrame>
      </div>
      <div className={`${styles.copy} reveal`}>
        <p className="eyebrow">{data.eyebrow}</p>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.body}>{data.body}</p>
        <ul className={styles.bullets}>
          {data.bullets.map((b, i) => (
            <li key={i}>
              <IconCheck width={18} height={18} className={styles.check} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section className="section" id="recursos">
      <div className="container">
        <p className="eyebrow reveal">Demonstração</p>
        <h2 className="section-title reveal">Veja a Forja funcionando</h2>
        <p className="section-lead reveal">
          Cada tela do app trabalha pra tirar a decisão do calor do momento e transformar esforço em
          progresso que dá pra medir.
        </p>

        <div className={styles.rows}>
          {features.map((f, i) => (
            <FeatureRow key={f.id} data={f} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
