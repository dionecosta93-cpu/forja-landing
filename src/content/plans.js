// Tiers reais — copiados de src/lib/plans.ts do app Forja (DEMO_MODE = true).
export const demoNote = {
  label: 'Modo demonstração',
  text: 'Acesso 100% liberado · R$ 0,00. Nenhuma cobrança, cartão ou assinatura real.',
}

export const plans = [
  {
    id: 'free',
    name: 'Grátis',
    price: 'R$ 0',
    period: '',
    summary: 'O essencial para parar de adiar',
    features: ['Tarefas, rotina e Modo Foco', 'Sequências e disciplina', 'Sincronização na nuvem'],
    cta: 'Começar grátis',
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'R$ 19,90',
    period: '/mês',
    badge: 'Popular',
    summary: 'Rotina, leitura, finanças e IA de análise',
    features: [
      'Tudo do Grátis',
      'Leitura, Finanças e Compras',
      'Relatórios e sugestões da IA',
      'Metas de vida ilimitadas',
      'Coach de voz no foco',
    ],
    cta: 'Assinar o Pro',
    highlight: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'R$ 39,90',
    period: '/mês',
    summary: 'Assistente IA completo e recursos avançados',
    features: [
      'Tudo do Pro',
      'Assistente IA (voz e texto) para criar e organizar',
      'Backup e sincronização prioritária',
      'Exportar relatórios em PDF',
      'Temas claro / escuro / AMOLED',
    ],
    cta: 'Assinar o Premium',
    highlight: false,
  },
]
