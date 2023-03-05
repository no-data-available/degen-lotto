import { useEffect, useState } from 'react';
import Card from '../Card';
import styles from './nextDrawPanel.module.css';

interface NextDrawProps {
  draw: Date;
}

export default function NextDrawPanel({ draw }: NextDrawProps) {
  const [drawDate, setDrawDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const seconds = Math.floor((draw.getTime() - now.getTime()) / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);
      hours = hours - days * 24;
      minutes = minutes - days * 24 * 60 - hours * 60;
      setDrawDate(`Days ${days} hours ${hours} minutes ${minutes}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [draw]);

  return (
    <Card>
      <h2>Draw in Hours/Mins</h2>
      <h3>{drawDate}</h3>
    </Card>
  );
}
