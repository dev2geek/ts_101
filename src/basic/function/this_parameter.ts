function f(this: void) {
  // make sure `this` is unusable in this standalone function
}

interface ICard {
  suit: string;
  card: number;
}
interface IDeck {
  suits: string[];
  cards: number[];
  createCardPicker(this: IDeck): () => ICard;
}

const deck: IDeck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker(this: IDeck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);

      return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    };
  },
}

const cardPicker = deck.createCardPicker();
const picked = cardPicker();

console.log("card: " + picked.card + " of " + picked.suit);

export {};
