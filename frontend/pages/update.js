import UpdateProduct from '../components/UpdateProduct.js';

export default function UpdatePage({ query }) {
  return <UpdateProduct id={query.id} />;
}
