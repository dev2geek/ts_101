/*
 * case 1
 */

// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker() {
//     return function() {
//       const pickedCard = Math.floor(Math.random() * 52);
//       const pickedSuit = Math.floor(pickedCard / 13);
//       // console.log("this:", this);
//       console.log("this.suits:", this.suits);
//
//       return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//     };
//   },
// };
//
// let cardPicker = deck.createCardPicker();
// let picked = cardPicker();
//
// console.log("card: " + picked.card + " of " + picked.suit);

/*
 * case 2
 */

const deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker() {
    // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);

      return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    };
  },
};

const cardPicker = deck.createCardPicker();
const picked = cardPicker();

console.log("card: " + picked.card + " of " + picked.suit);

export {};
