export type CardEffect = 'discount' | 'moreLines' | 'moreDays';

export type DiscountCard = {
  type: 'discount';
};
export type MoreLinesCard = {
  type: 'moreLines';
};
export type MoreDaysCard = {
  type: 'moreDays';
};

export type TradingCard = DiscountCard | MoreLinesCard | MoreDaysCard;
