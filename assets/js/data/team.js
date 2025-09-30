// Professors, Atual, Egressos (arrays de membros)
// name: Nome completo da pessoa.
// role: Função no projeto (ex: Coordenador, Estudante).
// image: Caminho ou URL da foto do membro.
// orcid: Link para o perfil ORCID (se houver).
// lates: Link para o currículo Lattes (se houver).
// github: Link para o perfil no GitHub (se houver).
// email: Endereço de e-mail para contato (use "mailto:" antes do e-mail).
// linkedin: Link para o perfil no LinkedIn (se houver).


const professors = [      
        {name:"Prof. Dr. Rômulo Araújo", role:"Coordenador", image:"assets/images/team/romulo.png", orcid:"https://orcid.org/0000-0001-9355-3322", lates: "http://lattes.cnpq.br/7079843148914551", github: "https://github.com/RomuloCCAraujo", email: "romuloaraujo@recife.ifpe.edu.br", linkedin:""},
        {name:"Prof. Dr. Henrique Santos", role:"Coordenador", image:"assets/images/team/henrique.png", orcid:"https://orcid.org/0000-0002-9544-7774", lates: "http://lattes.cnpq.br/1664284153985134", github: "https://github.com/hctsantos", email: "henrique.santos@recife.ifpe.edu.br", linkedin:""},
];

const atual = [
    {
        name: "Edson Carvalho",
        role: "Estudante",
        image: "assets/images/team/edson.png",
        orcid: "https://orcid.org/0009-0007-1712-6434",
        lates: "http://lattes.cnpq.br/5416892205014072",
        github: "https://github.com/carvalhoedsonn",
        email: "mailto:ejscf@discente.ifpe.edu.br",
        linkedin: "https://www.linkedin.com/in/edson-carvalho-7831a425a/"
    },
    {
        name: "Mariana Santos",
        role: "Estudante",
        image: "assets/images/team/mariana.png",
        orcid: "",
        lates: "http://lattes.cnpq.br/1675535561713236",
        github: "https://github.com/Mariana-RDS",
        email: "mailto:mrds@discente.ifpe.edu.br",
        linkedin: ""
    }
]

const egressos = [
    {
        name: "Izavan Correia",
        role: "Estudante",
        image: "assets/images/team/izavan.png",
        orcid: "https://orcid.org/0000-0002-5757-4473",
        lates: "http://lattes.cnpq.br/6528689009188266",
        github: "https://github.com/IzavanCorreia",
        email: "mailto:isc1@discente.ifpe.edu.br",
        linkedin: "https://www.linkedin.com/in/izavan-correia-120001207/"
    },
    {
        name: "Juliana de Albuquerque",
        role: "Estudante",
        image: "assets/images/team/juliana.png",
        orcid: "",
        lates: "http://lattes.cnpq.br/5466824809045867",
        github: "",
        email: "mailto:jasc@discente.ifpe.edu.br",
        linkedin: ""
    },
    {
        name: "Mateus Ferraz",
        role: "Estudante",
        image: "assets/images/team/mateus.png",
        orcid: "",
        lates: "http://lattes.cnpq.br/1931970691457477",
        github: "https://github.com/mtsfer",
        email: "mailto:mhsf@discente.ifpe.edu.br",
        linkedin: "https://www.linkedin.com/in/mtsfer/"
    },
    {
        name: "Paulo Vitor",
        role: "Estudante",
        image: "assets/images/team/paulo_vitor.png",
        orcid: "",
        lates: "http://lattes.cnpq.br/2559310648706581",
        github: "https://github.com/PauloV1",
        email: "mailto:pvbs@discente.ifpe.edu.br",
        linkedin: ""
    },
    {
        name: "Rebeca Jamilly",
        role: "Estudante",
        image: "assets/images/team/rebeca.png",
        orcid: "",
        lates: "http://lattes.cnpq.br/1942371156973611",
        github: "https://github.com/ImBeca",
        email: "mailto:rjml@discente.ifpe.edu.br",
        linkedin: "https://www.linkedin.com/in/rebeca-jamilly-3a0b4a200/"
    },
    {
        name: "Rodrigo Siqueira",
        role: "Estudante",
        image: "assets/images/team/rodrigo.png",
        orcid: "",
        lates: "http://lattes.cnpq.br/8295720341909696",
        github: "",
        email: "mailto:rslf@discente.ifpe.edu.br",
        linkedin: ""
    },
    {
        name: "Silvanio Assunção",
        role: "Estudante",
        image: "assets/images/team/silvanio.png",
        orcid: "",
        lates: "http://lattes.cnpq.br/3416062233790484",
        github: "https://github.com/silvanio45",
        email: "mailto:ssa@discente.ifpe.edu.br",
        linkedin: "https://www.linkedin.com/in/silvanio-assunC3A7C3A3o-2700541b9/"
    },
    {
        name: "Antônio Cavalcanti",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/r25rXoWXT9Gn792PqDIg",
        orcid: "",
        lates: "",
        github: "",
        email: "",
        linkedin: ""
    },
    {
        name: "Davi Monteiro",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/QpUhlVknQxaYjj8V0pvD",
        orcid: "",
        lates: "",
        github: "",
        email: "",
        linkedin: ""
    },
    {
        name: "Hugo Marques",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/tqfT1XFYSUQNTkoILUkY",
        orcid: "",
        lates: "",
        github: "",
        email: "",
        linkedin: ""
    },
    {
        name: "Isabella Chiara",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/fkW6dHD6Tl2wF6TwPgiH",
        orcid: "",
        lates: "",
        github: "https://github.com/isachiara",
        email: "",
        linkedin: ""
    },
    {
        name: "João Mateus",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/kTTvvvG8Q9GDJWvZFGEV",
        orcid: "",
        lates: "",
        github: "https://github.com/JoaoMateusSantos",
        email: "",
        linkedin: ""
    },
    {
        name: "Lucas Brandão",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/vNELKccrQJqrEzlnvewS",
        orcid: "",
        lates: "",
        github: "https://github.com/Lucasnb2001",
        email: "mailto:Lucasnb2001@gmail.com",
        linkedin: ""
    },
    {
        name: "Marcelly Arcanjo",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/vmIu90F7SGKOnFUPTWEo",
        orcid: "",
        lates: "",
        github: "",
        email: "",
        linkedin: ""
    },
    {
        name: "Maria Beatriz",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/5cpZBDj0Qei9mxZk3rGE",
        orcid: "",
        lates: "",
        github: "https://github.com/MariaBeatrizLima",
        email: "",
        linkedin: ""
    },
    {
        name: "Otacilio Maia",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/XEeEVnYoQzqyhdq88MUm",
        orcid: "",
        lates: "http://lattes.cnpq.br/9916471338474934",
        github: "https://github.com/OtacilioN",
        email: "",
        linkedin: "https://www.linkedin.com/in/otacilio/"
    },
    {
        name: "Ryan Paiva",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/WgOMF8FgTmjXPFWO6kQX",
        orcid: "https://orcid.org/0000-0002-9174-1669",
        lates: "http://lattes.cnpq.br/7056842355987272",
        github: "https://github.com/ryangpaiva",
        email: "mailto:rgp@discente.ifpe.edu.br",
        linkedin: "https://www.linkedin.com/in/ryan-gomes-paiva-8a8205157/"
    },
    {
        name: "Steffano Pereira",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/pXhd1DVQS3qgIhMl15GM",
        orcid: "",
        lates: "http://lattes.cnpq.br/1434113054508078",
        github: "https://github.com/SteffanoP",
        email: "",
        linkedin: "https://www.linkedin.com/in/steffano-pereira-65bba0154/"
    },
    {
        name: "Thiago Almeida",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/NJvb5nLCSK2zxLLLSYWx",
        orcid: "",
        lates: "",
        github: "",
        email: "",
        linkedin: ""
    },
    {
        name: "Thiago Augusto",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/XlHMFxQqQaWTci7Uwghv",
        orcid: "",
        lates: "http://lattes.cnpq.br/7249428392229957",
        github: "https://github.com/thiagoaugustosm",
        email: "",
        linkedin: "https://www.linkedin.com/in/thiagoaugustosm/"
    },
    {
        name: "Welton Felix",
        role: "Estudante",
        image: "https://sa-east-1.graphassets.com/ACnYQNZ0NQLC56UEMJpDAz/9yss5cCKRROcnhLCrJLf",
        orcid: "https://orcid.org/0000-0002-6915-6316",
        lates: "http://lattes.cnpq.br/1801441428064171",
        github: "https://github.com/weltonfelix/",
        email: "mailto:wplf@discente.ifpe.edu.br",
        linkedin: "https://www.linkedin.com/in/weltonfelix/"
    }
];
