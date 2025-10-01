// publications (array de publicações por ano)
// year: Ano da publicação.
// pubs: Lista de publicações daquele ano.
// category: Tipo da publicação (ex: Artigo, Patente, Capítulo de Livro).
// title: Título completo da publicação.
// link: Link para acessar a publicação (se houver).
// linkTitle: Nome do site, revista ou evento onde foi publicada.

const publications = [
  {
    year: 2024,
    pubs: [
      {
        category: "Artigo",
        title:
          "Aplicação do Módulo de Monitoramento da Qualidade do Ar no Sistema Telemétrico para Monitoramento Ambiental nos Sistemas de Transportes Públicos",
        linkTitle: "Studies in Engineering and Exact Sciences",
        link: "https://ojs.studiespublicacoes.com.br/ojs/index.php/sees/article/view/4994",
      },
      {
        category: "Artigo",
        title:
          "Desenvolvimento de um Sistema Telemétrico para Conversores de Energia das Ondas de Baixa Potência Utilizando o Protocolo Railbee",
        link: "https://ojs.revistacontemporanea.com/ojs/index.php/home/article/view/4560",
        linkTitle: "Revista Contemporânea",
      },
    ],
  },
  {
    year: 2022,
    pubs: [
      {
        category: "Capítulo de Livro",
        title:
          "A New Approach for Air Quality Monitoring: A Case Study of Recife, Brazil.",
        link: "#",
        linkTitle: "ARTIIS 2022, Springer",
      },
    ],
  },
  {
    year: 2020,
    pubs: [
      {
        category: "Artigo",
        title:
          "Desenvolvimento de Módulos das Estações Móveis para Aplicação ao Sistema Telemétrico RailBee.",
        link: "https://atenaeditora.com.br/catalogo/ebook/engenharia-eletrica-e-de-computacao-atividades-relacionadas-com-o-setor-cientifico-e-tecnologico-3",
        linkTitle: "Atena Editora",
      },
    ],
  },
  {
    year: 2025,
    pubs: [
      {
        category: "Patente",
        title:
          "DISPOSITIVO TELEMÉTRICO DE DETECÇÃO, RECEPÇÃO,CONVERSÃO E TRANSMISSÃO DE DADOS REFERENTES AOMONITORAMENTO DA QUALIDADE DO AR ATRAVÉS DE UMA PLURALIDADE DE SENSORES UTILIZANDO UMA VARIEDADEDE PROTOCOLOS DE COMUNICAÇÃO",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2025,
    pubs: [
      {
        category: "Patente",
        title:
          "DISPOSITIVO TELEMÉTRICO PARA O MONITORAMENTO EM TEMPO REAL DE GERADORES DE ENERGIA MAREMOTRIZ ATRAVÉS DE UMA PLURALIDADE DE SENSORES UTILIZANDO UMA VARIEDADE DE PROTOCOLOS DE COMUNICAÇÃO",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2024,
    pubs: [
      {
        category: "Patente",
        title:
          "SISTEMA TELEMÉTRICO DINÂMICO AUTÔNOMO MODULAR PARA MONITORAMENTO, CONTROLE E AUTOMAÇÃO",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2024,
    pubs: [
      {
        category: "Patente",
        title:
          "DISPOSITIVO TELEMÉTRICO PARA MONITORAMENTO DA QUALIDADE DO AR ATRAVÉS DO PROTOCOLO DE COMUNICAÇÃO WI-FI",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2022,
    pubs: [
      {
        category: "Patente",
        title:
          "DISPOSITIVO TELEMÉTRICO DINÂMICO DE MONITORAMENTO, CONTROLE DE SISTEMAS DE SINAIS ELÉTRICOS COM MÓDULOS DE RECEPÇÃO, CONVERSÃO E TRANSMISSÃO DE DADOS POR MEIO DE REDES DE SENSORES SEM FIO E SISTEMAS EMBARCADOS",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2018,
    pubs: [
      {
        category: "Patente",
        title:
          "SISTEMA TELEMÉTRICO DINÂMICO DE MONITORAMENTO DE SISTEMAS DE ENERGIA ELÉTRICA COM MÓDULOS FOTOVOLTAICOS POR MEIO DE REDES DE SENSORES SEM FIO",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2018,
    pubs: [
      {
        category: "Marca Registrada",
        title:
          "RailBee",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2024,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "PMSTEC - Painel de Monitoramento do Sistema Telemétrico da Estação Central",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2024,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "MSTEC - Módulo Monitor do Sistema Telemétrico da Estação Central",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2024,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "EMI-MQTT",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2024,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "EB-MQTT",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2024,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "APIEC - RestAPI do Sistema Telemétrico da Estação Central",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2023,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "MRSTEC - Módulo Receptor do Sistema Telemétrico da Estação Central",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2023,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "SGSTEC - Software de Gerenciamento do Sistema Telemétrico da Estação Central",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2022,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "Estação Móvel Integradora - EMI",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2022,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "ESTAÇÃO CENTRAL MÓDULO RECEPTOR - ECMR",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2022,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "ESTAÇÃO BASE - EB",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2020,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "IANA",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2020,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "SOFIA 2.0",
        linkTitle: "INPI",
      },
    ],
  },
  {
    year: 2018,
    pubs: [
      {
        category: "Software Registrado",
        title:
          "SOFIA",
        linkTitle: "INPI",
      },
    ],
  },
];