import type { NextApiRequest, NextApiResponse } from 'next';
import { PostsDB } from '../../lib/stubDB';

export default (
  nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) => {
  const body = JSON.parse(nextApiRequest.body);

  if (nextApiRequest.method !== 'POST') {
    nextApiResponse.status(400).json('Bad request.');
    return;
  }

  const post = {
    id: PostsDB.length + 1,
    title: body.title,
    content: body.content,
  };

  PostsDB.push(post);

  nextApiResponse.json(post);
};
