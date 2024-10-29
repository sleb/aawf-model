export interface Card {
  id: string;
  nounPhrase: string;
  contributor: string;
}

export type CardData = Omit<Card, "id">;
