import Card from '../Card';
import styles from './tradingCard.module.css';
import { TradingCard as TradingCardType } from './TradingCard.type';

interface TradingCardProps {
  card?: TradingCardType;
}

export default function TradingCard({ card }: TradingCardProps) {
  return <div className={styles.card}></div>;
}
