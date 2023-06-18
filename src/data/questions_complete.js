import Relogio from "../img/RelogioPNG.png"

const data = [
  {
    category: "JOGO DA REVISÃO",
    questions: [
      {
        question: "O que consta numa reta numérica?",
        options: ["Letras", "Números", "Animais", "Cores"],
        answer: "Números",
      },
      {
        question: "Quais destes números são pares?",
        options: ["3", "8", "5", "9"],
        answer: "8",
      },
      {
        question: "Quais destes números são ímpares?",
        options: ["7", "2", "4", "6"],
        answer: "7",
      },
      {
        question: "Qual antecessor do número 151?",
        options: ["150", "148", "152", "155"],
        answer: "150",
        tip: "vem antes"
      },
      {
        question: "Qual o sucessor do número 221?",
        options: ["122", "62", "222", "103"],
        answer: "222",
        tip: "vem depois"
      },
      {
        question: "O que o ponteiro grande marca no relógio?",
        imagem: Relogio,
        options: ["Horas", "Minutos", "Segundos", "Dias"],
        answer: "Minutos",
      },
      {
        question: "Um dia tem quantas horas?",
        options: ["12h", "24h", "15m", "60m"],
        answer: "24h",
      },
      {
        question: "Quantos minutos tem uma hora?",
        options: ["15min", "35min", "60min", "12min"],
        answer: "60min",
      },
      {
        question: "Quantos meses constam no nosso calendário?",
        options: ["6 meses", "8 meses", "1 mês", "12 meses"],
        answer: "12 meses",
      },
      {
        question: "Quantos dias tem o mês de junho?",
        options: ["31 dias", "30 dias", "28 dias", "29 dias"],
        answer: "30 dias",
      },
      {
        question: "Complete a palavra com a sílaba faltante: BA __ NA",
        options: ["PE", "MA", "NA", "CO"],
        answer: "NA",
      },
      {
        question: "Complete a palavra com a sílaba faltante: MOS __ TO",
        options: ["QUI", "QUA", "LA", "TO"],
        answer: "QUI",
      },
      {
        question: "Quantas sílabas tem a palavra FERMENTO?",
        options: ["3", "5", "6", "4"],
        answer: "3",
        tip: "FER | MEN | TO",
      },
      {
        question: "Quantas sílabas tem a palavra CASAMENTO?",
        options: ["3", "5", "6", "4"],
        answer: "4",
        tip: "CA | SA | MEN | TO",
      },
      {
        question: "Qual a classificação de sílabas da palavra CASA?",
        options: ["Monossílaba", "Dissílaba", "Trissílaba", "Polissílaba"],
        answer: "Dissílaba",
      },
    ],
  },
];

export default data;
