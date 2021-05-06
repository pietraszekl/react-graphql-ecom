import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav>
      <Link href="/products">products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/account">Account</Link>
      <Link href="/cart">
        <span className={styles.error}>Cart</span>
      </Link>
    </nav>
  );
}
