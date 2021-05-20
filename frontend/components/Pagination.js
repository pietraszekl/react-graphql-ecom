import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return <p>Loading ....</p>;
  if (error) return <p>error</p>;
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>
          Sick fits | {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>prev</Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} items Total</p>
      <Link href={`/products/${page + 1}`}>next</Link>
    </PaginationStyles>
  );
}
