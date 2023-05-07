import { NextApiRequest, NextApiResponse } from 'next';
//import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';

import prisma from '@/lib/prismadb';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const serverAuth = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    throw new Error('Not authenticated serverAuth');
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    throw new Error('Not authenticated serverAuth 2');
  }

  return { user };
};

export default serverAuth;
