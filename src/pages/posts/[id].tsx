import * as React from 'react';
import useSWR from 'swr';
import Layout from '../../components/layouts/Layout';
import { Header } from '../../components/Header';
import { Post } from '../../lib/stubDB';
import {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { ArticleSingle } from '../../components/ArticleSingle';
import { fetcher } from '../../lib/fetcher';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const SinglePage: NextPage<Props> = ({ postId }) => {
  const { data: post, error } = useSWR<Post>(`/api/posts/${postId}`, fetcher);

  return (
    <Layout>
      <Header />
      {post ? <ArticleSingle post={post} /> : 'loading...'}
    </Layout>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  return {
    props: { postId: params?.id },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: true,
  };
};

export default SinglePage;
