const setDelay = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

const arrayShuffle = (array) => {
  let index = array.length;
  let randomInt = null;

  while (index) {
    randomInt = Math.floor(Math.random() * index);
    index--;
    [array[index], array[randomInt]] = [array[randomInt], array[index]];
  }
  console.log(array);
  return array;
};

const gameInit = () => {
  return {
    cards: arrayShuffle([
      {
        color: 'bg-red-500',
        isFlipped: false,
        isMatched: false,
        isCleared: false,
      },
      {
        color: 'bg-orange-500',
        isFlipped: false,
        isMatched: false,
        isCleared: false,
      },
      {
        color: 'bg-green-500',
        isFlipped: false,
        isMatched: false,
        isCleared: false,
      },
      {
        color: 'bg-blue-500',
        isFlipped: false,
        isMatched: false,
        isCleared: false,
      },
      {
        color: 'bg-red-500',
        isFlipped: false,
        isMatched: false,
        isCleared: false,
      },
      {
        color: 'bg-orange-500',
        isFlipped: false,
        isMatched: false,
        isCleared: false,
      },
      {
        color: 'bg-green-500',
        isFlipped: false,
        isMatched: false,
        isCleared: false,
      },
      {
        color: 'bg-blue-500',
        isFlipped: false,
        isMatched: false,
        isCleared: false,
      },
    ]),
    get flippedCards() {
      return this.cards.filter((card) => card.isFlipped);
    },
    get remainingCards() {
      return this.cards.filter((card) => !card.isCleared);
    },
    async flipCard($el, card) {
      card.isFlipped = !card.isFlipped;
      const flippedCards = this.flippedCards.filter((card) => !card.isMatched);

      if (flippedCards.length === 2 || flippedCards.length % 2 === 0) {
        if (flippedCards[0].color === flippedCards[1].color) {
          flippedCards.forEach((card) => {
            card.isMatched = true;
            card.animate = 'animate-rubber';
          });
          await setDelay(250);
          flippedCards.forEach((card) => (card.isCleared = true));

          if (!this.remainingCards.length) {
            alert('You win');
            location.reload();
          }
        } else {
          flippedCards.forEach((card) => {
            card.animate = 'animate-shake';
          });
        }

        // Fold all card
        await setDelay(500);
        flippedCards.forEach((card) => (card.isFlipped = false));
        console.log(flippedCards);
        this.remainingCards.forEach((card) => {
          card.animate = '';
        });
      }
    },
  };
};
