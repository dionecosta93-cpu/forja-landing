import s from './screen.module.css'

const NAV = ['Início', 'Agenda', 'Stats', 'Leitura', 'Devoc.', 'Compras', 'Finanças']

const dot = (
  <svg viewBox="0 0 24 24" width="1.4em" height="1.4em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="4" />
  </svg>
)

export function BottomNav({ active = 'Início' }) {
  return (
    <nav className={s.nav}>
      {NAV.map((label) => (
        <span key={label} className={label.startsWith(active.slice(0, 5)) ? s.on : ''}>
          {dot}
          {label}
        </span>
      ))}
    </nav>
  )
}

export function StatusBar({ left = '01:54', right = 'NÍVEL 10' }) {
  return (
    <div className={s.statusbar}>
      <span>{left}</span>
      <span className={s.green}>{right}</span>
    </div>
  )
}
