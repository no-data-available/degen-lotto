import Link from 'next/link';
import styles from './masthead.module.css';

const Masthead = () => {
  return (
    <nav className={styles.masthead}>
      <Link href="/">
        <figure>
          <img
            src="logo"
            className={styles.logo}
            alt="Degen Lotto - All or nothing"
          />
        </figure>
      </Link>
      <ul className={styles.list}>
        <li className={styles['list-items']}>
          <Link href="/purchase-cards" className={styles.link}>
            Purchase trading cards
          </Link>
        </li>

        <li className={styles['list-items']}>
          <Link href="/how-to-play" className={styles.link}>
            How to play
          </Link>
        </li>

        <li className={styles['list-items']}>
          <Link href="/faq" className={styles.link}>
            FAQ
          </Link>
        </li>

        <li className={styles['list-items']}>
          <Link href="/redeem-cards" className={styles.link}>
            Redeem cards
          </Link>
        </li>

        <li className={styles['list-items']}></li>
      </ul>
    </nav>
  );
};

export default Masthead;
