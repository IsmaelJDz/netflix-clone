import React from 'react';
import { useRouter } from 'next/router';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import useMovie from '@/hooks/useMovie';

const Watch = () => {
  const router = useRouter();

  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className='w-screen h-screen bg-black '>
      <nav className='fixed z-10 flex flex-row items-center w-full gap-8 p-4 bg-black bg-opacity-70'>
        <AiOutlineArrowLeft
          className='text-2xl text-white cursor-pointer'
          size={40}
          //onClick={() => router.back()}
          onClick={() => router.push('/')}
        />
        <p className='font-bold text-white text-1xl md:text-3xl'>
          <span className='font-light'>Watching: </span>
          {data?.title}
        </p>
      </nav>
      <video
        className='w-full h-full'
        autoPlay
        controls
        src={data?.videoUrl}></video>
    </div>
  );
};

export default Watch;
