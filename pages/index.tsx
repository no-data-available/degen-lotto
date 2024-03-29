import Head from 'next/head';
import { useImmerReducer } from 'use-immer';
import { reducer, initialState } from './globalReducer';
import styles from './index.module.css';
import HowToPlayPanel from '../components/HowToPlayPanel';
import JackPotPanel from '../components/JackpotPanel/JackPotPanel';
import SmartContractPanel from '../components/SmartContractPanel';
import ResultsPanel from '../components/ResultsPanel';
import OwnershipPanel from '../components/OwnershipPanel';
import TicketCreatorPanel from '../components/TicketCreatorPanel';
import NextDrawPanel from '../components/NextDrawPanel';

export default function Home() {
  const [{ jackpot, nextDraw, previousResults }, dispatch] = useImmerReducer(
    reducer,
    initialState
  );

  return (
    <>
      <Head>
        <title>Degen Lotto - All or nothing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.home}>
        <aside className={styles.how}>
          <JackPotPanel jackpot={jackpot} />
        </aside>
        <aside className={styles.buy}>
          <HowToPlayPanel />
        </aside>
        <aside className={styles.contract}>
          <SmartContractPanel />
        </aside>

        <section className={styles.purchase}>
          <TicketCreatorPanel />
        </section>

        <aside className={styles.jackpot}>
          <NextDrawPanel draw={nextDraw} />
        </aside>

        <aside className={styles.previous}>
          <ResultsPanel results={previousResults} />
        </aside>
        <aside className={styles.ownership}>
          <OwnershipPanel />
        </aside>
      </section>
    </>
  );
}
