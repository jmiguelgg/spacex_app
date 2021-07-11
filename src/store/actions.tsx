export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (payload: string) => ({
  type: ADD_FAVORITE,
  payload,
});

export const removeFavorite = (payload: string) => ({
  type: REMOVE_FAVORITE,
  payload,
});