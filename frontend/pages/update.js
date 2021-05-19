import UpdateProduct from '../components/UpdateProduct.js';

export default function UpdatePage({ query }) {
  console.log('oops', query);
  return <UpdateProduct id={query.id} />;
}
