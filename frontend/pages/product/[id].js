import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  console.log("BOOM", query)
  return <SingleProduct id={query.id} />;
}
