export const membershipPlans = [
  {
    id: 'raiz',
    name: 'BULLDOG RAIZ',
    tagline: 'O plano completo',
    type: 'Semestral',
    price: 130,
    description: 'Plano dedicado a todes que desejam ajudar na infraestrutura da quadra poliesportiva',
    benefits: [
      'Prioridade e desconto na compra de eventos do semestre',
      'Prioridade e desconto nos produtos do semestre',
      'Acesso à área exclusiva para sócios em eventos',
      'Votação em decisões da Atlética'
    ],
    color: 'from-brand-lightblue to-brand-paleblue',
    textColor: 'text-brand-deepblue',
    icon: '🏆',
    featured: true
  },
  {
    id: 'nutella',
    name: 'BULLDOG NUTELLA',
    tagline: 'Para quem quer experimentar',
    type: 'Mensal',
    price: 17,
    description: 'Plano dedicado aos atletas, ex-membros e simpatizantes que desejam ajudar na infraestrutura da quadra poliesportiva',
    benefits: [
      'Desconto em eventos selecionados',
      'Desconto em produtos selecionados',
      'Renovação automática mensal'
    ],
    color: 'from-brand-mediumblue to-brand-softblue',
    textColor: 'text-brand-light',
    icon: '🐶',
    featured: false
  },
  {
    id: 'trajado',
    name: 'BULLDOG TRAJADO',
    tagline: 'Para quem quer produtos',
    type: 'Semestral',
    price: 105,
    description: 'Plano dedicado a todes que desejam ajudar na infraestrutura da quadra poliesportiva',
    benefits: [
      'Prioridade e desconto nos produtos do semestre',
      'Acesso à pré-venda de produtos exclusivos',
      'Participação em sorteios exclusivos'
    ],
    color: 'from-brand-blue to-brand-mediumblue',
    textColor: 'text-brand-light',
    icon: '👕',
    featured: false
  }
];

export const membershipFAQ = [
  {
    question: 'Como funciona a associação?',
    answer: 'Ao se tornar sócio(a) Bulldogs, você paga uma mensalidade ou semestralidade que dá direito a benefícios exclusivos como descontos em produtos, ingressos para festas e participação em eventos. Além disso, você ajuda diretamente na manutenção da infraestrutura esportiva da FATEC-SP.'
  },
  {
    question: 'Qual a diferença entre os planos?',
    answer: 'O plano RAIZ é o mais completo, com todos os benefícios. O plano TRAJADO é focado em quem quer prioridade e descontos em produtos. Já o plano NUTELLA é mensal e ideal para quem quer experimentar antes de se comprometer com um plano semestral.'
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim! O plano NUTELLA pode ser cancelado a qualquer momento. Já os planos semestrais (RAIZ e TRAJADO) têm compromisso de 6 meses, mas você pode optar por não renovar ao fim do período.'
  },
  {
    question: 'Como recebo meus benefícios?',
    answer: 'Após a confirmação do pagamento, você receberá um código de sócio que deverá ser apresentado nos eventos e compras para obter os descontos e benefícios. Também adicionaremos você aos grupos exclusivos para sócios.'
  },
  {
    question: 'Quem pode ser sócio?',
    answer: 'Qualquer pessoa pode ser sócia da Atlética Bulldogs! Alunos, ex-alunos, funcionários, familiares e amigos. Todos são bem-vindos para fazer parte da nossa família Bulldogs!'
  }
];

export const membershipBenefits = [
  {
    title: 'Festas Exclusivas',
    description: 'Acesso prioritário e descontos em todas as festas da Atlética',
    icon: '🎉'
  },
  {
    title: 'Produtos Oficiais',
    description: 'Desconto de 20% em toda a linha de produtos Bulldogs',
    icon: '👕'
  },
  {
    title: 'Eventos Esportivos',
    description: 'Entrada gratuita ou com desconto em jogos e competições',
    icon: '🏆'
  },
  {
    title: 'Comunidade',
    description: 'Faça parte da comunidade Bulldogs e participe de grupos exclusivos',
    icon: '👥'
  },
  {
    title: 'Pré-venda',
    description: 'Garantia de compra antecipada em eventos com ingressos limitados',
    icon: '🎟️'
  },
  {
    title: 'Apoie o Esporte',
    description: 'Sua contribuição ajuda a manter e melhorar nossa estrutura esportiva',
    icon: '🏋️‍♂️'
  }
];
