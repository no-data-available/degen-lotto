import {
  DiscountCard,
  MoreDaysCard,
  MoreLinesCard,
} from '../TradingCard/TradingCard.type';

interface TicketCreatorState {
  ticketQuantity: number;
  gameQuantity: number;
  discountCard?: DiscountCard;
  moreLinesCard?: MoreLinesCard;
  MoreDaysCard?: MoreDaysCard;
  eth?: number;
}

export const initialState: TicketCreatorState = {
  ticketQuantity: 5,
  gameQuantity: 3,
  eth: 123,
};

export type TicketReducerAction =
  | { type: 'setTicketQuantity'; quantity: number }
  | { type: 'setGameQuantity'; quantity: number };

function calcEth(state: TicketCreatorState) {
  return state.gameQuantity * state.ticketQuantity;
}

export function reducer(
  draft: TicketCreatorState,
  action: TicketReducerAction
) {
  switch (action.type) {
    case 'setTicketQuantity':
      draft.ticketQuantity = action.quantity;
      draft.eth = calcEth(draft);
      break;
    case 'setGameQuantity':
      draft.gameQuantity = action.quantity;
      draft.eth = calcEth(draft);
      break;
  }
}
