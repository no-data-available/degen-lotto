import { useImmerReducer } from 'use-immer';
import Card from '../Card';
import TradingCard from '../TradingCard';
import { reducer, initialState } from './ticketCreator.reducer';
import styles from './ticketCreatorPanel.module.css';

export default function TicketCreatorPanel() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <Card>
      <h2>Ticket Creator</h2>
      <label htmlFor="ticket-quantity">Select number of lines</label>
      <input
        type="range"
        min="1"
        max="25"
        value={state.ticketQuantity}
        id="ticket-quantity"
        onChange={(e) => {
          dispatch({ type: 'setTicketQuantity', quantity: +e.target.value });
        }}
      />

      <label htmlFor="game-quantity">Select number of games</label>
      <input
        type="range"
        min="1"
        max="14"
        value={state.gameQuantity}
        id="game-quantity"
        onChange={(e) => {
          dispatch({ type: 'setGameQuantity', quantity: +e.target.value });
        }}
      />

      <label>Play trading cards</label>
      <ul className={styles['cards-list']}>
        <li className={styles.card}>
          <TradingCard />
        </li>
        <li className={styles.card}>
          <TradingCard />
        </li>
        <li className={styles.card}>
          <TradingCard />
        </li>
      </ul>

      <div className={styles.tally}>
        {state.eth}eth | {state.ticketQuantity} Lines | {state.gameQuantity}{' '}
        Games
      </div>
      <div className={styles.tally}>
        <button className={styles['purchase-btn']}>Purchase Tickets</button>
      </div>
    </Card>
  );
}
