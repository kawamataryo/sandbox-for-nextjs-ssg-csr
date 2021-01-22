import type { NextApiRequest, NextApiResponse } from 'next';
import { PostsDB } from '../../../lib/stubDB';

export default async (
  nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) => {
  nextApiResponse.status(200).json(PostsDB);
};
