import * as React from 'react';
import { Post } from '../lib/types';
import Link from 'next/link';

type ArticleProps = {
  post: Post;
};

export const Article: React.FC<ArticleProps> = ({ post }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src={`https://picsum.photos/id/${post.id * 10}/128/128`}
              alt="Image"
            />
          </figure>
        </div>
        <div className="media-content">
          <Link href={`/posts/${post.id}`}>
            <a>
              <h1 className="has-text-weight-bold is-size-5">{post.title}</h1>
            </a>
          </Link>
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  );
};
