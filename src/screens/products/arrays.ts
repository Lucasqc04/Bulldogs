// src/screens/products/arrays.ts

// Importação das imagens
import camisa1 from '../../assets/products/camisa_azul_branca.jpg';
import camisa2 from '../../assets/products/camisa_branca_azul.jpg';
import camisa3 from '../../assets/products/camisa_branca_cinza.jpg';
import camisa4 from '../../assets/products/camisa_preta_cinza.jpg';
import moletom1 from '../../assets/products/MOLETOM - LADO_8.png';
import moletom2 from '../../assets/products/MOLETOM - ANTIGO - FRENTE 1.png';
import cortavento1 from '../../assets/products/corta.png';
import caneca1 from '../../assets/products/CANECA -  FATEC SÃO PAULO.png';
import camisaAmericana1 from '../../assets/products/camisa_americana.jpg';
import camisaAmericana2 from '../../assets/products/camisa_americana1.jpg';

export const products = [
    {
      id: 1,
      name: 'CAMISA',
      description: 'Camisa oficial da Atlética FATECSP Bulldogs, 100% algodão.',
      price: 60,
      images: [
        camisa1,
        camisa2,
        camisa3,
        camisa4
      ],
      isNew: true,
      installments: true,
      available: true
    },
    {
      id: 2,
      name: 'MOLETOM',
      description: 'Moletom com capuz, perfeito para os dias frios.',
      price: 210,
      images: [
        moletom1,
        moletom2
      ],
      isBestSeller: true,
      installments: true,
      available: false
    },
    {
      id: 3,
      name: 'CORTA VENTO',
      description: 'Corta vento leve e resistente com o logo da Atlética.',
      price: 210,
      images: [
        cortavento1
 
      ],
      installments: true,
      available: false
    },
    {
      id: 4,
      name: 'CANECA',
      description: 'Caneca de cerâmica com o logo da Atlética.',
      price: 40,
      images: [
        caneca1 
      ],
      installments: false,
      available: false
    },
    {
      id: 5,
      name: 'CAMISA AMERICANA',
      description: 'Camisa estilo americano com o brasão Bulldogs.',
      price: 120,
      images: [
        camisaAmericana1,
        camisaAmericana2
      ],
      isNew: true,
      installments: true,
      available: false
    }
  ];
