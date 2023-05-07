import { NextApiRequest, NextApiResponse } from 'next';

import serverAuth from '@/lib/serverAuth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { user } = await serverAuth(req, res);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(401).end();
  }
}
