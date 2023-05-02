import { signOut } from 'next-auth/react';

export default function Home() {
  return (
    <>
      <h1 className='text-2xl text-green-500'>Netflix clone</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
