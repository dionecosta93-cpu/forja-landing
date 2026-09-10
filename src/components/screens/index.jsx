import s from './screen.module.css'
import { BottomNav, StatusBar } from './parts.jsx'

/* Recriações fiéis das telas do app Forja (mesmos textos, números e layout dos
   screenshots). Puro CSS/flex + SVG inline — sem imagens, sem inventar dados. */

function Shell({ children, nav, active, className }) {
  return (
    <div className={`${s.app} ${className || ''}`}>
      <div className={s.scale}>
        {children}
        {nav !== false && <BottomNav active={active} />}
      </div>
    </div>
  )
}

const Trophy = () => (
  <svg viewBox="0 0 24 24" width="1.6em" height="1.6em" fill="none" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4h12v4a6 6 0 0 1-12 0V4ZM6 6H3v2a3 3 0 0 0 3 3M18 6h3v2a3 3 0 0 1-3 3M9 18h6M8 21h8M12 14v4" />
  </svg>
)

/* ------------------------------------------------------------------ Home */
function Home() {
  return (
    <Shell active="Início">
      <StatusBar left="QUI, 10 SET · 01:54" right="NÍVEL 10" />
      <div className={s.h1}>BOM DIA, DI…</div>
      <div className={s.body}>
        <div className={s.rowBetween}>
          <span className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.7em', letterSpacing: '0.12em' }}>PROGRESSO DO DIA</span>
          <strong className={s.green} style={{ fontFamily: 'var(--font-display)', fontSize: '1.3em' }}>50%</strong>
        </div>
        <div className={`${s.progress} ${s.grad}`}><i style={{ width: '50%' }} /></div>
        <p className={s.dim} style={{ fontStyle: 'italic', textAlign: 'center', fontSize: '0.9em', padding: '0.2em 0.6em' }}>
          "Você nunca se arrepende de terminar uma tarefa. Apenas de adiá-la."
        </p>
        <div className={s.card}>
          <div className={s.rowBetween}>
            <b style={{ letterSpacing: '0.06em', fontSize: '0.86em' }}>🛡 DISCIPLINA</b>
            <span><b style={{ fontFamily: 'var(--font-display)', fontSize: '1.2em' }}>68</b><span className={s.dim}>/1000</span></span>
          </div>
          <div className={s.progress} style={{ marginTop: '0.6em' }}><i style={{ width: '7%' }} /></div>
          <div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.66em', marginTop: '0.5em', letterSpacing: '0.1em' }}>NÍVEL INICIANTE</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.7em' }}>
          <div className={s.cardTight}><b style={{ fontSize: '0.9em' }}>Missões</b><div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.62em', marginTop: '0.2em' }}>DIÁRIAS E DESAFIOS</div></div>
          <div className={s.cardTight}><b style={{ fontSize: '0.9em' }}>Relatórios IA</b><div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.62em', marginTop: '0.2em' }}>PADRÕES E SUGESTÕES</div></div>
        </div>
        <div className={s.card} style={{ borderColor: 'rgba(59,130,246,0.4)' }}>
          <div className={`${s.mono} ${s.blue}`} style={{ fontSize: '0.68em', letterSpacing: '0.14em' }}>📖 DEVOCIONAL DE HOJE</div>
          <p style={{ fontSize: '0.9em', marginTop: '0.4em' }}>"Estar ocupado é uma forma de preguiça: pensamento preguiçoso e ação indiscriminada."</p>
          <div className={s.dim} style={{ fontSize: '0.74em', marginTop: '0.4em' }}>A Semana de 4 Horas · Tim Ferriss</div>
        </div>
      </div>
      <div className={s.bigBtn}>▶  COMEÇAR O DIA</div>
      <div style={{ height: '0.8em' }} />
    </Shell>
  )
}

/* ------------------------------------------------------------- AgendaWeek */
const WEEK = [
  { d: 'DOM', n: 6, done: '1/6', tasks: [['06:30', 'Treino de força', 0], ['09:00', 'Deep work — projeto Forja', 0], ['13:00', 'Ler 20 páginas', 0], ['17:30', 'Caminhada + sol', 0], ['19:00', 'Planejar semana', 0], ['21:00', 'Leitura bíblica', 1]] },
  { d: 'SEG', n: 7, done: '2/6', tasks: [['06:30', 'Treino de força', 0], ['09:00', 'Deep work — projeto Forja', 0], ['13:00', 'Ler 20 páginas', 0], ['17:30', 'Caminhada + sol', 1], ['19:00', 'Planejar semana', 0], ['21:00', 'Leitura bíblica', 1]] },
]
function AgendaWeek() {
  return (
    <Shell active="Agenda">
      <div className={s.h1} style={{ paddingTop: '1.4em' }}>📅 AGENDA</div>
      <div className={s.tabs}><b>MÊS</b><b className={s.on}>SEMANA</b><b>HISTÓRICO</b><b>ARQUIVO</b></div>
      <div className={s.rowBetween} style={{ padding: '0 1.4em 0.6em' }}>
        <span className={s.dim}>‹</span>
        <div style={{ textAlign: 'center' }}><b style={{ fontFamily: 'var(--font-display)' }}>6/9 — 12/9</b><div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.66em' }}>Semana</div></div>
        <span className={s.dim}>›</span>
      </div>
      <div className={s.body} style={{ gap: '1em' }}>
        {WEEK.map((day) => (
          <div className={s.card} key={day.d}>
            <div className={s.rowBetween}>
              <b style={{ fontSize: '0.92em' }}>{day.d} <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15em' }}>{day.n}</span> <span className={s.dim} style={{ fontSize: '0.8em' }}>{day.done}</span></b>
              <span className={s.green} style={{ fontSize: '0.8em', fontWeight: 700 }}>+ Add</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4em', marginTop: '0.6em' }}>
              {day.tasks.map(([t, name, done]) => (
                <div key={t} className={s.rowBetween} style={{ background: '#0e0e0e', border: '1px solid #202020', borderRadius: '999px', padding: '0.5em 0.85em' }}>
                  <span style={{ fontSize: '0.82em' }}><span className={`${s.mono} ${s.green}`} style={{ fontSize: '0.8em' }}>{t}</span>&nbsp;&nbsp;{name}</span>
                  {done ? <span className={s.green}>✓</span> : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Shell>
  )
}

/* --------------------------------------------------------------- FocusMode */
function FocusMode() {
  return (
    <Shell nav={false} className={s.app}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1.6em 1.4em 1.4em' }}>
        <div className={s.rowBetween}>
          <span className={s.dim}>🔊</span>
          <span className={`${s.mono} ${s.dim}`} style={{ letterSpacing: '0.24em', fontSize: '0.72em' }}>MODO FOCO</span>
          <span className={s.dim}>✕</span>
        </div>
        <div style={{ textAlign: 'center', marginTop: '0.6em', fontWeight: 700 }}>Deep work — projeto Forja</div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.4em' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '4.6em', letterSpacing: '-0.03em' }}>00:01</div>
          <div className={`${s.mono} ${s.dim}`} style={{ letterSpacing: '0.24em', fontSize: '0.8em' }}>DE 90:00</div>
          <div className={s.progress} style={{ width: '70%', marginTop: '0.8em' }}><i style={{ width: '2%' }} /></div>
        </div>
        <div className={`${s.bigBtn} ${s.greenBtn}`} style={{ margin: 0 }}>✓  CONCLUIR</div>
        <div className={s.bigBtn} style={{ margin: '0.7em 0 0', background: 'transparent', color: '#9aa0a6', border: '1px solid #262626' }}>⏸  PAUSAR</div>
      </div>
    </Shell>
  )
}

/* --------------------------------------------------------------- Evolution */
function Evolution() {
  return (
    <Shell active="none">
      <div className={s.h1} style={{ paddingTop: '1.5em', fontSize: '1.7em' }}>PAINEL DE EVOLUÇÃO</div>
      <div className={s.body}>
        <div className={s.card} style={{ borderColor: 'rgba(40,212,110,0.4)', background: 'linear-gradient(160deg,rgba(40,212,110,0.10),transparent)' }}>
          <div className={s.rowBetween}>
            <div>
              <div className={`${s.mono} ${s.green}`} style={{ fontSize: '0.66em', letterSpacing: '0.14em' }}>NÍVEL ATUAL</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2.8em', lineHeight: 1 }}>10</div>
            </div>
            <Trophy />
          </div>
          <div className={s.progress} style={{ marginTop: '0.6em' }}><i style={{ width: '12%' }} /></div>
          <div className={s.dim} style={{ fontSize: '0.74em', marginTop: '0.5em' }}>238 / 2000 XP para o próximo nível</div>
        </div>
        <div className={s.card}>
          <div className={s.rowBetween}><b style={{ fontSize: '0.86em' }}>🛡 DISCIPLINA</b><span><b style={{ fontFamily: 'var(--font-display)', fontSize: '1.2em' }}>68</b><span className={s.dim}>/1000</span></span></div>
          <div className={s.progress} style={{ marginTop: '0.6em' }}><i style={{ width: '7%' }} /></div>
          <div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.64em', marginTop: '0.5em', letterSpacing: '0.1em' }}>NÍVEL INICIANTE</div>
        </div>
        <div className={s.statGrid}>
          <div className={s.stat}><small>Sequência atual</small><strong>7d</strong></div>
          <div className={s.stat}><small>Melhor sequência</small><strong>15d</strong></div>
          <div className={s.stat}><small>Produtividade</small><strong>56<span className={s.dim} style={{ fontSize: '0.5em' }}> tarefas</span></strong></div>
          <div className={s.stat}><small>Tempo focado</small><strong>38.4h</strong></div>
        </div>
        <div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.66em', letterSpacing: '0.1em', marginTop: '0.2em' }}>PLACAS DIGITAIS · 5/23</div>
        <div className={s.cardTight} style={{ display: 'flex', alignItems: 'center', gap: '0.7em' }}>
          <span style={{ opacity: 0.5 }}>🔒</span>
          <div><b style={{ fontSize: '0.86em' }}>100 Dias Seguidos <span className={s.orange} style={{ fontSize: '0.7em' }}>LENDÁRIO</span></b><div className={s.dim} style={{ fontSize: '0.76em' }}>Você virou outra pessoa.</div></div>
        </div>
      </div>
    </Shell>
  )
}

/* ---------------------------------------------------------------- Missions */
function Mission({ title, prog, ratio, reward, ready }) {
  return (
    <div className={s.card}>
      <div className={s.rowBetween}><b style={{ fontSize: '0.94em' }}>{title}</b><span className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.78em' }}>{ratio}</span></div>
      <div className={s.progress} style={{ marginTop: '0.6em' }}><i style={{ width: prog }} /></div>
      <div className={s.rowBetween} style={{ marginTop: '0.7em' }}>
        <span className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.68em' }}>{reward}</span>
        <span className={s.pill + ' ' + s.pillGreen} style={{ opacity: ready ? 1 : 0.4 }}>RESGATAR</span>
      </div>
    </div>
  )
}
function Missions() {
  return (
    <Shell active="none">
      <div className={s.h1} style={{ paddingTop: '1.5em' }}>MISSÕES</div>
      <div className={s.sub}>Complete objetivos e resgate XP e pontos de disciplina.</div>
      <div className={s.body}>
        <div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.66em', letterSpacing: '0.12em' }}>DIÁRIAS</div>
        <Mission title="Concluir 3 tarefas hoje" ratio="3/3" prog="100%" reward="+50 XP · +5 DISCIPLINA" ready />
        <Mission title="Zerar a agenda do dia" ratio="3/6" prog="50%" reward="+120 XP · +15 DISCIPLINA" />
        <Mission title="60 minutos de foco" ratio="60/60" prog="100%" reward="+80 XP · +10 DISCIPLINA" ready />
        <div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.66em', letterSpacing: '0.12em', marginTop: '0.2em' }}>SEMANAIS</div>
        <Mission title="15 tarefas na semana" ratio="14/15" prog="93%" reward="+300 XP · +25 DISCIPLINA" />
      </div>
    </Shell>
  )
}

/* --------------------------------------------------------------- LifeGoals */
function Goal({ tag, title, date, prog, meta }) {
  return (
    <div className={s.card}>
      <div style={{ display: 'flex', gap: '0.4em', alignItems: 'center' }}>
        <span className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.66em', letterSpacing: '0.1em' }}>{tag}</span>
        <span className={`${s.pill} ${s.pillRed}`}>ALTA</span>
        <span className={`${s.pill} ${s.pillBlue}`}>EM ANDAMENTO</span>
      </div>
      <b style={{ display: 'block', fontSize: '1.05em', marginTop: '0.4em' }}>{title}</b>
      <div className={s.dim} style={{ fontSize: '0.78em' }}>Prevista para {date}</div>
      <div className={s.rowBetween} style={{ marginTop: '0.6em', gap: '0.8em' }}>
        <div className={`${s.progress} ${s.grad}`} style={{ flex: 1 }}><i style={{ width: prog }} /></div>
        <b className={s.green} style={{ fontFamily: 'var(--font-display)' }}>{prog}</b>
      </div>
      <div className={s.dim} style={{ fontSize: '0.72em', marginTop: '0.5em' }}>{meta}</div>
    </div>
  )
}
function LifeGoals() {
  return (
    <Shell active="none">
      <div className={s.statusbar}><span>‹ Início</span><span /></div>
      <div className={s.rowBetween} style={{ padding: '0 1.4em' }}>
        <div className={s.h1} style={{ padding: '0.1em 0 0.5em' }}>METAS DE VIDA</div>
        <span className={s.green} style={{ fontWeight: 700, fontSize: '0.9em' }}>+ Nova</span>
      </div>
      <div className={s.body}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.7em' }}>
          <div className={s.cardTight} style={{ textAlign: 'center', fontWeight: 700, fontSize: '0.9em' }}>📊 IMPACTO</div>
          <div className={s.cardTight} style={{ textAlign: 'center', fontWeight: 700, fontSize: '0.9em' }}>✨ ASSISTENTE</div>
        </div>
        <Goal tag="ATLETA" title="Construir o corpo de atleta" date="2027-01-08" prog="20%" meta="1/3 objetivos · 0 tarefas vinculadas" />
        <Goal tag="NEGÓCIOS" title="Lançar a Forja" date="2026-10-25" prog="30%" meta="1/2 objetivos · 0 tarefas vinculadas" />
      </div>
    </Shell>
  )
}

/* --------------------------------------------------------------- AiReports */
function AiReports() {
  const bars = [2, 4, 1, 2, 4, 3, 4]
  const days = ['SEX', 'SÁB', 'DOM', 'SEG', 'TER', 'QUA', 'QUI']
  return (
    <Shell active="none">
      <div className={s.h1} style={{ paddingTop: '1.5em', fontSize: '1.7em' }}>RELATÓRIOS DA IA</div>
      <div className={s.sub}>O que seus dados dizem sobre a sua disciplina.</div>
      <div className={s.body}>
        <div className={s.statGrid}>
          <div className={s.stat}><strong style={{ fontSize: '1.4em' }}>38h 22m</strong><small>Tempo total focado</small></div>
          <div className={s.stat}><strong className={s.green} style={{ fontSize: '1.4em' }}>0 min</strong><small>Tempo economizado</small></div>
          <div className={s.stat}><strong style={{ fontSize: '1.4em' }}>11:00</strong><small>Melhor horário</small></div>
          <div className={s.stat}><strong style={{ fontSize: '1.4em' }}>Quinta</strong><small>Melhor dia</small></div>
        </div>
        <div className={s.dim} style={{ fontSize: '0.82em' }}>Tarefa mais concluída: <b style={{ color: '#f4f5f6' }}>Ler 20 páginas (12x)</b></div>
        <div className={s.card} style={{ borderColor: 'rgba(239,68,68,0.4)', background: 'rgba(239,68,68,0.06)' }}>
          <span className={s.red} style={{ fontSize: '0.86em' }}>⚠ Maior taxa de abandono: <b>NEGOCIOS</b> — 77% das ocorrências planejadas nos últimos 30 dias não foram concluídas.</span>
        </div>
        <div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.68em', letterSpacing: '0.1em' }}>↗ ÚLTIMOS 7 DIAS</div>
        <div className={s.card} style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5em', height: '7em' }}>
          {bars.map((b, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center' }}>
              <div className={s.dim} style={{ fontSize: '0.7em' }}>{b}</div>
              <div style={{ background: 'var(--green)', borderRadius: '0.3em', height: `${b * 18}%`, minHeight: '0.5em' }} />
              <div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.58em', marginTop: '0.3em' }}>{days[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  )
}

/* ------------------------------------------------------------ VictoryVault */
function Victory({ date, xp, title }) {
  return (
    <div className={s.card}>
      <div className={`${s.mono} ${s.green}`} style={{ fontSize: '0.72em' }}>{date} · +{xp} XP</div>
      <b style={{ display: 'block', fontSize: '1.1em', margin: '0.3em 0' }}>{title}</b>
      <div style={{ fontSize: '0.84em' }}><b className={s.dim}>Senti:</b> Focado</div>
      <div style={{ fontSize: '0.84em' }}><b className={s.dim}>Aprendi:</b> Foi mais leve do que imaginei.</div>
    </div>
  )
}
function VictoryVault() {
  return (
    <Shell active="none">
      <div className={s.h1} style={{ paddingTop: '1.5em', fontSize: '1.7em' }}>COFRE DA VITÓRIA</div>
      <div className={s.sub}>Suas vitórias registradas. Volte aqui quando duvidar de si mesmo.</div>
      <div className={s.body}>
        <Victory date="10/09/2026" xp="218" title="Treino de força" />
        <Victory date="09/09/2026" xp="310" title="Deep work — projeto Forja" />
        <Victory date="08/09/2026" xp="131" title="Ler 20 páginas" />
      </div>
    </Shell>
  )
}

/* --------------------------------------------------------------- Devotional */
function Devotional() {
  return (
    <Shell active="Devoc.">
      <div className={s.statusbar}><span>‹ Início</span><span /></div>
      <div className={s.h1} style={{ padding: '0.1em 1.4em 0.3em' }}>📖 DEVOCIONAL</div>
      <div className={s.sub}>Um trecho por dia de livros sobre produtividade, mentalidade e negócios — com reflexão e ação.</div>
      <div className={s.body}>
        <div className={s.card} style={{ borderColor: 'rgba(40,212,110,0.4)' }}>
          <div className={`${s.mono} ${s.green}`} style={{ fontSize: '0.66em', letterSpacing: '0.14em' }}>LEITURA DE HOJE</div>
          <p style={{ fontSize: '1.15em', fontWeight: 600, margin: '0.5em 0' }}>"Estar ocupado é uma forma de preguiça: pensamento preguiçoso e ação indiscriminada."</p>
          <div className={s.dim} style={{ fontSize: '0.76em' }}>A Semana de 4 Horas · Tim Ferriss · Produtividade</div>
          <hr style={{ border: 0, borderTop: '1px solid #242424', margin: '0.9em 0' }} />
          <div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.64em', letterSpacing: '0.12em' }}>REFLEXÃO</div>
          <p style={{ fontSize: '0.9em', marginTop: '0.3em' }}>Ocupação não é progresso. Métrica de esforço engana; métrica de resultado corrige.</p>
          <div style={{ background: '#0e0e0e', border: '1px solid #202020', borderRadius: '1em', padding: '0.85em', marginTop: '0.7em' }}>
            <div className={`${s.mono} ${s.orange}`} style={{ fontSize: '0.64em', letterSpacing: '0.12em' }}>APLIQUE HOJE</div>
            <p style={{ fontSize: '0.88em', marginTop: '0.3em' }}>Elimine ou delegue hoje uma atividade que consome tempo e não gera resultado.</p>
          </div>
          <div className={`${s.bigBtn} ${s.greenBtn}`} style={{ margin: '0.9em 0 0' }}>MARCAR COMO LIDO</div>
        </div>
      </div>
    </Shell>
  )
}

/* ------------------------------------------------------------------ Finance */
function Finance() {
  return (
    <Shell active="Finanças">
      <div className={s.rowBetween} style={{ padding: '1.5em 1.4em 0.3em' }}>
        <div className={s.h1} style={{ padding: 0 }}>FINANÇAS</div>
        <span className={`${s.pill} ${s.pillGreen}`} style={{ fontSize: '0.8em', padding: '0.4em 0.9em' }}>+ Lançar</span>
      </div>
      <div className={s.tabs} style={{ marginTop: '0.7em' }}><b>HOJE</b><b>SEMANA</b><b className={s.on}>ESTE MÊS</b><b>PERSONAL.</b></div>
      <div className={s.body}>
        <div className={s.card}>
          <div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.66em', letterSpacing: '0.12em' }}>🗂 SETEMBRO DE 2026</div>
          <div className={s.green} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2.2em', margin: '0.1em 0 0.4em' }}>R$ 3.424,00</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6em' }}>
            <div style={{ background: '#0e0e0e', border: '1px solid #202020', borderRadius: '0.9em', padding: '0.7em' }}>
              <div className={s.green} style={{ fontSize: '0.68em', fontWeight: 700 }}>↗ RECEITAS</div>
              <b style={{ fontSize: '0.95em' }}>R$ 4.200,00</b>
            </div>
            <div style={{ background: '#0e0e0e', border: '1px solid #202020', borderRadius: '0.9em', padding: '0.7em' }}>
              <div className={s.red} style={{ fontSize: '0.68em', fontWeight: 700 }}>↘ DESPESAS</div>
              <b style={{ fontSize: '0.95em' }}>R$ 776,00</b>
            </div>
          </div>
          <div className={s.dim} style={{ fontSize: '0.7em', marginTop: '0.5em' }}>6 lançamento(s) · 01/09/2026 a 10/09/2026</div>
        </div>
        <div className={`${s.mono} ${s.dim}`} style={{ fontSize: '0.66em', letterSpacing: '0.1em' }}>GASTOS POR CATEGORIA</div>
        <div className={s.card} style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
          <div style={{ width: '5.5em', height: '5.5em', borderRadius: '999px', background: 'conic-gradient(#ec4899 0 46%, #f5a524 46% 84%, #84cc16 84% 100%)', WebkitMask: 'radial-gradient(circle 1.6em at 50% 50%, transparent 98%, #000)', mask: 'radial-gradient(circle 1.6em at 50% 50%, transparent 98%, #000)' }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4em', fontSize: '0.82em' }}>
            <div className={s.rowBetween}><span>🟣 Lazer</span><b>R$ 357,00</b></div>
            <div className={s.rowBetween}><span>🟠 Mercado</span><b>R$ 295,00</b></div>
            <div className={s.rowBetween}><span>🟢 Casa</span><b>R$ 124,00</b></div>
          </div>
        </div>
      </div>
    </Shell>
  )
}

const SCREENS = { Home, AgendaWeek, FocusMode, Evolution, Missions, LifeGoals, AiReports, VictoryVault, Devotional, Finance }

export default function Screen({ name }) {
  const C = SCREENS[name] || Home
  return <C />
}
