import { NextApiRequest, NextApiResponse } from 'next';

import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }
    const { user } = await serverAuth(req, res);

    const favoritedMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: user?.favoritesIds,
        },
      },
    });

    return res.status(200).json(favoritedMovies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
