import Card from '../Card';
import styles from './jackPotPanel.module.css';

interface JackPotProps {
  jackpot: number;
}

export default function JackPotPanel({ jackpot }: JackPotProps) {
  return (
    <Card>
      <h2>Jackpot</h2>
      <h3>{jackpot}eth</h3>
    </Card>
  );
}
