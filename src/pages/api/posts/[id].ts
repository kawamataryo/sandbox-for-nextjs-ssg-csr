import type { NextApiRequest, NextApiResponse } from 'next';
import { PostsDB } from '../../../lib/stubDB';

export default async (
  nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) => {
  const {
    query: { id },
  } = nextApiRequest;

  const post = PostsDB.filter((p) => p.id === Number(id))?.[0];
  nextApiResponse.status(200).json(post);
};
