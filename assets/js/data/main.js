//Variável definida no arquivo js/gallery.js
galleryImages = [
  { src: "assets/images/gallery/gallery_01.jpeg", category: "events" },
  { src: "assets/images/gallery/gallery_02.jpeg", category: "events" },
  { src: "assets/images/gallery/gallery_03.jpeg", category: "events" },
  { src: "assets/images/gallery/gallery_04.jpeg", category: "events" },
];

//Equipe atual
const actualTeam = [
  {
    name: "Prof. Dr. Rômulo Araújo",
    role: "Coordenador",
    image: "assets/images/team/romulo.png",
    orcid: "https://orcid.org/0000-0001-9355-3322",
    lates: "http://lattes.cnpq.br/7079843148914551",
    github: "https://github.com/RomuloCCAraujo",
    email: "romuloaraujo@recife.ifpe.edu.br",
    linkedin: "",
  },
  {
    name: "Prof. Dr. Henrique Santos",
    role: "Coordenador",
    image: "assets/images/team/henrique.png",
    orcid: "https://orcid.org/0000-0002-9544-7774",
    lates: "http://lattes.cnpq.br/1664284153985134",
    github: "https://github.com/hctsantos",
    email: "henrique.santos@recife.ifpe.edu.br",
    linkedin: "",
  },
  {
    name: "Edson Carvalho",
    role: "Estudante",
    image: "assets/images/team/edson.png",
    orcid: "https://orcid.org/0009-0007-1712-6434",
    lates: "http://lattes.cnpq.br/5416892205014072",
    github: "https://github.com/carvalhoedsonn",
    email: "mailto:ejscf@discente.ifpe.edu.br",
    linkedin: "https://www.linkedin.com/in/edson-carvalho-7831a425a/",
  },
  {
    name: "Mariana Santos",
    role: "Estudante",
    image: "assets/images/team/mariana.png",
    orcid: "",
    lates: "http://lattes.cnpq.br/1675535561713236",
    github: "https://github.com/Mariana-RDS",
    email: "mailto:mrds@discente.ifpe.edu.br",
    linkedin: "",
  },
];

//Últimas publicações
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
];

//Últimos prêmios
const awards = [
  {
    year: 2025,
    pubs: [
      {
        category: "FEBRACE",
        title:
          "Prêmio Centro Estadual de Educação Tecnológica Paula Souza, Centro Paula Souza: ModularSys - Sistema Telemétrico Dinâmico Autônomo Modular para Monitoramento, Controle e Automação",
        link: "#",
        linkTitle: "23ª Feira Brasileira de Ciências e Engenharia (FEBRACE)",
      },
    ],
  },
  {
    year: 2025,
    pubs: [
      {
        category: "FEBRACE",
        title:
          "Prêmio Associação dos Engenheiros Politécnicos, Associação dos Engenheiros Politécnicos - AEP.: ModularSys - Sistema Telemétrico Dinâmico Autônomo Modular para Monitoramento, Controle e Automação",
        link: "#",
        linkTitle: "23ª Feira Brasileira de Ciências e Engenharia (FEBRACE)",
      },
    ],
  },
];
