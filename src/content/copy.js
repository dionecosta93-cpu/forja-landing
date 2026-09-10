// -----------------------------------------------------------------------------
// Toda a copy sensível a conversão vive aqui. Variações de A/B = trocar 1 linha.
// A ordem das seções é dirigida por SECTION_ORDER (App.jsx).
// -----------------------------------------------------------------------------

export const brand = {
  name: 'Forja',
  tagline: 'Disciplina que vira progresso',
}

export const hero = {
  eyebrow: 'App de disciplina e produtividade',
  // TESTE A/B: headline
  headline: 'Você sabe o que precisa fazer.\nA Forja faz você fazer.',
  subheadline:
    'Transforme suas metas em tarefas do dia, entre no Modo Foco e veja sua disciplina virar XP, níveis e sequências. Sem depender de motivação.',
  // Sub-linha de escopo — evita a sensação de "faz tudo e nada bem".
  scope: 'Rotina, foco, leitura e finanças — tudo num só lugar, guiado por disciplina.',
  primaryCta: 'Baixar a Forja',
  secondaryCta: 'Ver como funciona',
}

// Bloco do fluxo de download direto do APK (sem loja). Reaproveitado no hero,
// nos planos e no CTA final via <DownloadCta />.
export const download = {
  primaryCta: 'Baixar a Forja',
  browserCta: 'Usar no navegador',
  secure: 'Conexão segura',
  helpIntro: 'Instalação segura fora da Play Store — te mostramos como autorizar em 10 segundos.',
  helpCta: 'Como instalar',
  trust: 'Grátis para começar · Modo demonstração com acesso total · Sem cartão',
  help: {
    title: 'Instalar a Forja em 10 segundos',
    intro:
      'A Forja é distribuída fora da Play Store, então o Android pede uma permissão única antes de instalar. É rápido e você pode desfazer depois.',
    steps: [
      'Toque em "Baixar a Forja" e espere o download do arquivo .apk terminar.',
      'Abra o arquivo pela notificação de download ou pela pasta Downloads.',
      'Quando o Android avisar sobre "fontes desconhecidas", toque em Configurações.',
      'Ative "Permitir instalar desta fonte" para o seu navegador.',
      'Volte, toque em Instalar e abra a Forja.',
    ],
    note: 'Você pode desativar essa permissão depois da instalação. A Forja não pede acesso a contatos, SMS ou localização.',
  },
}

export const problem = {
  eyebrow: 'O problema',
  title: 'Você também vive isso?',
  items: [
    {
      title: 'Sabe o que fazer — e adia mesmo assim',
      body: 'A tarefa importante fica pra depois. "Depois" vira semana que vem.',
    },
    {
      title: 'Começa a rotina na segunda, larga na quarta',
      body: 'Sem um sistema, a constância depende de estar animado. E nem sempre você está.',
    },
    {
      title: 'Não sabe se está evoluindo',
      body: 'Passa o mês ocupado, mas não consegue apontar o que de fato avançou.',
    },
    {
      title: 'Metas grandes que nunca viram ação',
      body: '"Ficar em forma", "lançar o projeto" — sem virar tarefa no dia, não sai do papel.',
    },
  ],
}

export const solution = {
  eyebrow: 'A solução',
  title: 'Foi pra isso que a Forja existe',
  body: 'A Forja é o sistema entre a meta e o dia. Ela quebra o que você quer em tarefas com horário, te coloca em foco, mede a sua disciplina numa escala de 0 a 1000 e recompensa cada dia cumprido. Quando bater a preguiça, o sistema segura — não a motivação.',
  points: [
    'Metas viram objetivos, objetivos viram tarefas do dia',
    'Cada tarefa concluída paga XP e pontos de disciplina',
    'A IA mostra onde você trava antes de virar desistência',
  ],
}

export const features = [
  {
    id: 'rotina',
    screen: 'AgendaWeek',
    eyebrow: 'Rotina + Modo Foco',
    title: 'Saiba exatamente o que fazer agora',
    body: 'Monte a semana com horário, prioridade e tempo estimado. Na hora H, toque em Modo Foco: um timer cheio de tela, zero distração, e a tarefa fecha sozinha quando o tempo acaba.',
    bullets: ['Agenda de mês, semana e histórico', 'Modo Foco com sessão cronometrada', 'Recompensa e consequência por tarefa'],
  },
  {
    id: 'evolucao',
    screen: 'Evolution',
    eyebrow: 'Gamificação',
    title: 'Sua disciplina vira progresso visível',
    body: 'Cada dia cumprido soma XP, sobe de nível e mantém a sua sequência viva. A barra de Disciplina vai de 0 a 1000 — e as Placas Digitais marcam cada marco que você bate.',
    bullets: ['Níveis e XP total', 'Sequência atual e melhor sequência', '23 placas para desbloquear'],
  },
  {
    id: 'missoes',
    screen: 'Missions',
    eyebrow: 'Missões',
    title: 'Meta grande vira missão pequena',
    body: 'Missões diárias e semanais te dão um alvo claro pra hoje: concluir 3 tarefas, 60 minutos de foco, cumprir 5 dias diferentes. Bateu, resgata XP e disciplina.',
    bullets: ['Missões diárias e semanais', 'Recompensa em XP + disciplina', 'Progresso em tempo real'],
  },
  {
    id: 'metas',
    screen: 'LifeGoals',
    eyebrow: 'Metas de Vida',
    title: 'Cada tarefa puxando uma meta real',
    body: 'Defina metas com prazo — "construir o corpo de atleta", "lançar a Forja" — e vincule as tarefas do dia a elas. O progresso da meta anda sozinho conforme você cumpre a rotina.',
    bullets: ['Metas com prazo e % de progresso', 'Objetivos e tarefas vinculadas', 'Assistente para montar o plano'],
  },
  {
    id: 'ia',
    screen: 'AiReports',
    eyebrow: 'Relatórios da IA',
    title: 'A IA te mostra onde você trava',
    body: 'O relatório lê os seus dados e aponta o padrão: seu melhor horário, seu melhor dia, a tarefa que você mais completa — e a categoria com maior taxa de abandono, antes dela virar desistência.',
    bullets: ['Melhor horário e melhor dia', 'Tarefa mais concluída', 'Alerta de abandono por categoria'],
  },
  {
    id: 'cofre',
    screen: 'VictoryVault',
    eyebrow: 'Cofre da Vitória',
    title: 'Um lugar pra voltar quando bater a dúvida',
    body: 'Toda tarefa difícil concluída entra no Cofre com data, XP, como você se sentiu e o que aprendeu. Nos dias ruins, é a prova de que você já fez antes.',
    bullets: ['Registro de conquistas', 'Como se sentiu e o que aprendeu', 'Histórico que não some'],
  },
  {
    id: 'leitura',
    screen: 'Devotional',
    eyebrow: 'Leitura + Devocional',
    title: 'Mentalidade no mesmo ritmo da rotina',
    body: 'Acompanhe os livros que está lendo com % de progresso e receba um trecho por dia de obras de produtividade, mentalidade e negócios — com uma reflexão e uma ação pra aplicar hoje.',
    bullets: ['Tracker de leitura por status', 'Um devocional novo por dia', 'Reflexão + ação prática'],
  },
  {
    id: 'financas',
    screen: 'Finance',
    eyebrow: 'Compras + Finanças',
    title: 'Comprou, marcou — já entrou no financeiro',
    body: 'Monte a lista de compras, marque os itens conforme compra e o gasto cai direto em Finanças, categorizado. No fim do mês, o painel mostra pra onde o dinheiro foi.',
    bullets: ['Listas de compras reutilizáveis', 'Gasto vai direto pro financeiro', 'Receitas, despesas e gastos por categoria'],
  },
]

export const howItWorks = {
  eyebrow: 'Como funciona',
  title: 'Três passos pra parar de adiar',
  steps: [
    { n: '01', title: 'Escolha suas metas', body: 'Diga o que você quer construir. O assistente ajuda a transformar em objetivos.' },
    { n: '02', title: 'Monte a sua rotina', body: 'Tarefas com horário, prioridade e tempo. Recompensa e consequência, se quiser.' },
    { n: '03', title: 'Cumpra e acompanhe', body: 'Entre em foco, conclua, ganhe XP. A evolução aparece no painel todo dia.' },
  ],
}

export const benefits = {
  eyebrow: 'Benefícios',
  title: 'O que muda no seu dia',
  items: [
    { title: 'Clareza diária', body: 'Você abre o app e sabe exatamente o que fazer agora.' },
    { title: 'Constância', body: 'A sequência te dá um motivo concreto pra não quebrar hoje.' },
    { title: 'Progresso mensurável', body: 'XP, nível e disciplina mostram preto no branco o quanto você avançou.' },
    { title: 'Foco de verdade', body: 'Modo Foco cronometrado tira o celular do caminho durante a tarefa.' },
    { title: 'Visão de longo prazo', body: 'Metas de vida conectam o esforço de hoje ao que você quer daqui a meses.' },
    { title: 'Tudo num app só', body: 'Rotina, foco, leitura, devocional, compras e finanças no mesmo lugar.' },
  ],
}

export const differentiators = {
  eyebrow: 'Por que Forja',
  title: 'Não é mais uma lista de tarefas',
  items: [
    { title: 'Recompensa e consequência', body: 'Cada tarefa pode ter um prêmio e um preço que você mesmo define. O compromisso fica real.' },
    { title: 'Desafio dos 5 minutos', body: 'Enrolando pra começar? A Forja pede só 5 minutos. Depois você decide se continua — e quase sempre continua.' },
    { title: 'Disciplina como métrica', body: 'Uma escala de 0 a 1000 que sobe quando você cumpre e trava quando você some. Dá pra acompanhar.' },
    { title: 'IA que aponta padrão', body: '"Você sempre procrastina tarefas difíceis depois das 15h — tente de manhã." Sugestão concreta, não gráfico bonito.' },
  ],
}

export const voice = {
  eyebrow: 'Comando de voz',
  title: 'Fale. A Forja organiza.',
  subtitle:
    'Sem abrir tela, sem digitar. Só fala o que precisa e a Forja lança direto no lugar certo.',
  examples: [
    { say: 'Treino de força às 7 da manhã', result: 'cai direto na Agenda' },
    { say: 'Gastei 45 reais no mercado', result: 'cai direto em Finanças, já categorizado' },
    { say: 'Terminei de ler mais 20 páginas', result: 'atualiza o progresso em Leitura' },
  ],
  bullets: [
    'Cria tarefas por voz',
    'Lança gastos direto nas Finanças',
    'Atualiza progresso sem precisar digitar',
  ],
  limits: [
    {
      plan: 'Plano Grátis',
      text: '3 comandos de voz grátis por dia, todo dia — experimente a praticidade.',
      highlight: false,
    },
    {
      plan: 'Plano Pago',
      text: 'Comandos de voz ilimitados (ou uso justo) — organize o dia inteiro só falando.',
      highlight: true,
    },
  ],
  // NOTA DE IMPLEMENTAÇÃO: são 3 comandos de voz por dia no plano grátis (recorrente,
  // não é trial de 3 dias). Esse número é um ponto de partida — ajustar conforme o
  // custo real por chamada da API de voz, garantindo margem de lucro saudável no
  // plano pago antes de publicar em produção.
}

export const trust = {
  eyebrow: 'Comece sem risco',
  title: 'Acesso total pra você testar',
  body: 'A Forja está em Modo Demonstração: acesso 100% liberado, R$ 0,00, sem cadastro de cartão e sem assinatura real. Você conhece o sistema inteiro antes de decidir qualquer coisa.',
  // A filosofia do produto — frases da Biblioteca do próprio app. NÃO são depoimentos.
  philosophyLabel: 'A mentalidade por trás do app',
  philosophy: [
    '"A disciplina é escolher entre o que você quer agora e o que você quer mais."',
    '"Motivação te tira da cama. Disciplina te faz treinar mesmo cansado."',
    '"Você nunca se arrepende de terminar uma tarefa. Apenas de adiá-la."',
  ],
  note: 'Métricas de uso e novos depoimentos entram aqui conforme a base de usuários cresce.',
}

export const finalCta = {
  eyebrow: 'Dia 1',
  title: 'Comece a forjar sua\ndisciplina hoje',
  body: 'Baixe grátis, monte a rotina de amanhã em cinco minutos e deixe o sistema fazer o resto.',
  // Resumo de 1 linha do que a pessoa ganha ao clicar.
  kicker: 'Acesso total · Sem cartão · Comece em 30 segundos',
  // Texto secundário desta seção (varia por seção — no hero é "Ver como funciona").
  note: 'Comece seu Dia 1 agora e ative o Modo Demonstração.',
}

export const nav = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
]
