import Link from 'next/link';
import { userCart } from '../lib/cartState';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();

  const { openCart } = userCart();
  return (
    <NavStyles>
      <Link href="/products">products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/account">Account</Link>
          <Link href="/cart">Cart</Link>
          <SignOut />
          <button type="button" onClick={openCart}>
            My cart
          </button>
        </>
      )}
      {!user && <Link href="/signin">Sign in</Link>}
    </NavStyles>
  );
}
