import * as React from 'react';
import useSWR from 'swr';
import Layout from '../components/layouts/Layout';
import { Form, FormState } from '../components/Form';
import { Article } from '../components/Article';
import { Header } from '../components/Header';
import { Post } from '../lib/stubDB';
import { fetcher } from '../lib/fetcher';

export default function Home() {
  const { data, error, mutate } = useSWR<Post[]>(
    '/api/posts',
    fetcher
  );
  const addPost = async (form: FormState) => {
    await fetch('/api/post', { method: 'POST', body: JSON.stringify(form) });
    await mutate();
  };

  return (
    <Layout>
      <Header />
      <Form submit={addPost} />
      {!data ? '' : <h1 className="title is-4 mt-6">Posts</h1>}
      <div>
        {data?.map((p, index) => {
          return <Article post={p} key={index} />;
        })}
      </div>
    </Layout>
  );
}
