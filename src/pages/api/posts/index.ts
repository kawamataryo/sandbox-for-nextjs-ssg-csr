import type { NextApiRequest, NextApiResponse } from 'next';
import { API_ROOT_PATH } from '../../../config/constants';

export default async (
  nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) => {
  const response = await fetch(`${API_ROOT_PATH}/getPosts`);
  const resPosts = await response.json();
  nextApiResponse.status(200).json(resPosts);
};
