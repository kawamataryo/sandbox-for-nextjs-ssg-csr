import * as React from 'react';
import useSWR from 'swr';
import Layout from '../components/layouts/Layout';
import { Form, FormState } from '../components/Form';
import { Article } from '../components/Article';
import { Header } from '../components/Header';
import { Post } from '../lib/stubDB';
import { fetcher } from '../lib/fetcher';
import { NextPage } from 'next';

const Home: NextPage = () => {
  // 一覧データの取得
  const { data: post, error, mutate } = useSWR<Post[]>('/api/posts', fetcher);

  // 投稿の追加
  const addPost = async (form: FormState) => {
    await fetch('/api/post', { method: 'POST', body: JSON.stringify(form) });
    await mutate();
  };

  return (
    <Layout>
      <Header />
      <Form submit={addPost} />
      <h1 className="title is-4 mt-6">Posts</h1>
      <div>
        {post ? '' : 'loading...'}
        {post?.map((p, index) => {
          return <Article post={p} key={index} />;
        })}
      </div>
    </Layout>
  );
};

export default Home;
