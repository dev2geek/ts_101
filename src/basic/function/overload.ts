let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x: Array<{suit: string; card: number; }>): number {
//   return 10;
// }
// function pickCard(x: number): {suit: string; card: number; } {
//   return {
//     suit: "hell",
//     card: 10,
//   };
// }
function pickCard(x: Array<{suit: string; card: number; }>): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x === "object") {
    const pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x === "number") { // Otherwise just let them pick the card
    const pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(12);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
