const placeholder = new Date();

type DrawResults = {
  draw: number;
  results: Array<number>;
};

type Card = {
  type: 'moreLines' | '' | '';
};

type GlobalState = {
  jackpot: number;
  previousResults: Array<DrawResults>;
  today: Date;
  nextDraw: Date;
  ownedCards: Array<Card>;
};

export const initialState: GlobalState = {
  jackpot: 1234,
  previousResults: [
    { draw: 1, results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] },
    { draw: 2, results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] },
    { draw: 3, results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] },
    { draw: 4, results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] },
    { draw: 5, results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] },
  ],
  today: new Date(),
  nextDraw: new Date(
    placeholder.getFullYear(),
    placeholder.getMonth(),
    placeholder.getDate() + 7
  ),
  ownedCards: [],
};

export type GlobalReducerAction = { type: 'reset' };

export function reducer(draft: GlobalState, action: GlobalReducerAction) {
  switch (action.type) {
    case 'reset':
      return initialState;
  }
}
