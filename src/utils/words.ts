export type Challenge = {
  id: number;
  word: string;
  tip: string;
};

export const WORDS: Challenge[] = [
  { id: 1, word: "LIA", tip: "Primeira mulher de Jacó" },
  { id: 2, word: "JOSE", tip: "Foi o governador do Egito" },
  { id: 3, word: "MOISES", tip: "Ele viu a sarça ardente" },
  {
    id: 4,
    word: "JOSUE",
    tip: "O escolhido para substituir Moises",
  },
  { id: 5, word: "DAVI", tip: "Homem segundo o coração de Deus" },
];
