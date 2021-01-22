import * as React from 'react';
import useSWR from 'swr';
import Layout from '../../components/layouts/Layout';
import { Header } from '../../components/Header';
import { Post } from '../../lib/stubDB';
import { NextPage } from 'next';
import { ArticleSingle } from '../../components/ArticleSingle';
import { fetcher } from '../../lib/fetcher';
import { useRouter } from 'next/router';

const SinglePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // 投稿の取得
  const { data: post, error } = useSWR<Post>(`/api/posts/${id}`, fetcher);

  return (
    <Layout>
      <Header />
      {post ? <ArticleSingle post={post} /> : 'loading...'}
    </Layout>
  );
};

export default SinglePage;
