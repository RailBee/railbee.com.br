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
      {
        category: "Patente",
        title:
          "Sistema Telemétrico Dinâmico Autônomo Modular para Monitoramento, Controle e Automação",
        link: "#",
        linkTitle: "INPI",
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
      {
        category: "Patente",
        title:
          "Dispositivo Telemétrico Dinâmico de Monitoramento, Controle de Sistemas de Sinais Elétricos com Módulos de Recepção, Conversão e Transmissão de Dados Por Meio de Redes de Sensores Sem Fio e Sistemas Embarcados.",
        link: "#",
        linkTitle: "INPI",
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
    year: 2018,
    pubs: [
      {
        category: "Patente",
        title:
          "Sistema Telemétrico Dinâmico de Monitoramento de Sistemas de Energia Elétrica com Módulos Fotovoltaicos por Meio de Redes de Sensores sem Fio",
        linkTitle: "INPI",
      },
    ],
  },
];
