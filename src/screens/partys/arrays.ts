// src/screens/parties/arrays.ts

// Importar a imagem
import farejadaImage from '../../assets/farejada.webp';

export const events = [
    {
      id: 1,
      type: 'FESTA',
      name: 'FAREJADA 5.0 - MODO TURBO',
      description:
        '🔥 A tradição da Atlética Fatec SP voltou com tudo para mais uma edição épica! E desta vez, promete ser ainda maior e melhor! 🐶💙',
      fullDescription: `🔥 A FAREJADA 5.0 - MODO TURBO ESTÁ CHEGANDO! 🔥

A tradição da Atlética Fatec SP voltou com tudo para mais uma edição épica! E desta vez, promete ser ainda maior e melhor! 🐶💙

📅 Data: 24/05
⏰ Horário: 15h às 22h
📍 Local: Praça Luiz Carlos Mesquita, 52 - SP, 01139-070 (Próximo ao metrô Barra Funda)

Prepare-se para um evento inesquecível, com open bar, atrações imperdíveis e aquele line-up insano de DJs que vai fazer todo mundo sair do chão! 🎶🔥

Fique de olho que logo soltamos mais novidades! Não perca essa festa lendária da Matilha Azul! 🏆🐾`,
      date: '24 de Maio, 2024',
      time: '15:00 - 22:00',  
      location:
        'Praça Luiz Carlos Mesquita, 52 - SP, 01139-070 (Próximo ao metrô Barra Funda)',
      attractions: 'Line-up de DJs',
      price: 65.0,
      image: farejadaImage,
      includes: [
        'Open Bar',
        'Atrações e DJs',
      ],
      important: [
        'Proibido menores de 18 anos',
        'Documento oficial com foto obrigatório',
        'Sócios pagam R$50,00',
        'Cancelamento em até 7 dias após compra (48h antes do evento)',
      ],
    },
  ];
  
  export const whatsappGroups = [
    {
      name: 'AVISOS BULLDOGS 📢',
      description: 'Fique por dentro de TUDO que rola na Atlética!',
      link: 'https://chat.whatsapp.com/grupo-avisos',
    },
    {
      name: 'LOJA BULLDOGS 🛍️',
      description: 'Novidades, promoções e vendas dos produtos oficiais!',
      link: 'https://chat.whatsapp.com/grupo-loja',
    },
    {
      name: 'FESTAS E EVENTOS 🎉',
      description: 'Informações exclusivas sobre nossas festas!',
      link: 'https://chat.whatsapp.com/grupo-festas',
    },
  ];
