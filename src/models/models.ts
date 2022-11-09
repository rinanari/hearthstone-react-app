import React from "react";

export interface CardResponse {
  cards: Card[];
}
export interface Mechanic {
  name: string;
}

export interface Card {
  cardId: string;
  dbfId: number;
  name: string;
  cardSet: string;
  type: string;
  health: number;
  playerClass: string;
  locale: string;
  text: string;
  artist: string;
  rarity: string;
  collectible?: boolean;
  img: string;
  faction: string;
  cost?: number;
  spellSchool: string;
  attack?: number;
  flavor: string;
  elite?: boolean;
  imgGold: string;
  mechanics: Mechanic[];
}
