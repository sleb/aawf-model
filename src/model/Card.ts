export interface Card {
  id: string;
  nounPhrase: string;
  contributor: string;
}

export type CardData = Omit<Card, "id">;

export interface CreateCardRequest {
  nounPhrase: string;
  gameId: string;
}

export interface DeleteCardRequest {
  gameId: string;
  cardId: string;
}
