import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/products">products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/account">Account</Link>
      <Link href="/cart">Cart</Link>
    </NavStyles>
  );
}
