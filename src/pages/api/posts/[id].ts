import type { NextApiRequest, NextApiResponse } from 'next';
import { API_ROOT_PATH } from '../../../config/constants';

export default async (
  nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) => {
  const {
    query: { id },
  } = nextApiRequest;

  const response = await fetch(`${API_ROOT_PATH}/getPost?id=${id}`);
  const resPost = await response.json();
  nextApiResponse.status(200).json(resPost);
};
