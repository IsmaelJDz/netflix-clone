import React, { useCallback, useMemo } from 'react';
import axios from 'axios';

import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';

import useCurrentUser from '@/hooks/useCurrentUser';
import useFavorites from '@/hooks/useFavorites';

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  movieId,
}) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: user, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = user?.favoritesIds || [];

    return list.includes(movieId);
  }, [user, movieId]);

  const toggleFavorite = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete('/api/favorite', {
        data: { movieId },
      });
    } else {
      response = await axios.post('/api/favorite', { movieId });
    }

    const updatedFavorites = response?.data?.favoritesIds;

    mutate({
      ...user,
      favoritesIds: updatedFavorites,
    });

    mutateFavorites();
  }, [movieId, isFavorite, user, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorite}
      className='flex items-center justify-center w-6 h-6 transition border-2 border-white rounded-full cursor-pointer group/item lg:w-10 lg:h-10 hover:border-neutral-300'>
      <Icon
        className='text-white group-hover:text-neutral-300'
        size={30}
      />
    </div>
  );
};

export default FavoriteButton;
