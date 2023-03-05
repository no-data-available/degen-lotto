import Card from '../Card';
import styles from './resultsPanel.module.css';

export interface DrawResult {
  draw: number;
  results: Array<number>;
}

interface ResultsPanelProps {
  results: Array<DrawResult>;
}

export default function ResultsPanel({ results }: ResultsPanelProps) {
  return (
    <Card>
      <h2>Previous Results</h2>
      {results.map((r, i) => {
        return (
          <li key={i}>
            Draw {r.draw} {r.results.join('.')}
          </li>
        );
      })}
    </Card>
  );
}
