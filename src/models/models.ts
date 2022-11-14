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

export interface SingleCard {
  cardId: string;
  name: string;
  cardSet: string;
  type: string;
  faction: string;
  rarity: string;
  cost: number;
  attack: number;
  health: number;
  text: string;
  flavor: string;
  artist: string;
  collectible: boolean;
  elite: boolean;
  race: string;
  img: string;
  imgGold: string;
  locale: string;
}
