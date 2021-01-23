import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import { API_ROOT_PATH } from '../../config/constants';

export default async (
  nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) => {
  const body = JSON.parse(nextApiRequest.body);

  if (nextApiRequest.method !== 'POST') {
    nextApiResponse.status(400).json('Bad request.');
    return;
  }

  const post = {
    title: body.title,
    content: body.content,
  };

  const response = await fetch(`${API_ROOT_PATH}/addPost`, {
    method: 'POST',
    body: JSON.stringify(post),
  });
  const postRes = await response.json();

  nextApiResponse.json(postRes);
};
