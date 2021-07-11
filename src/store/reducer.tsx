import React, { createContext, useReducer } from 'react';
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from './actions';

interface IState {
  favoriteImages: string[];
};

interface IAction {
  type: string,
  payload: any,
};

const Reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favoriteImages: [
          ...state.favoriteImages,
          action.payload,
        ],
      };
    case REMOVE_FAVORITE:
      const clearFavorites = state.favoriteImages.filter(item => item !== action.payload);
      return {
        ...state,
        favoriteImages: clearFavorites,
      };
    default:
      return state;
  }
};

const initialState = {
  favoriteImages: [] as string[],
};

const Context = createContext({
  state: initialState,
  dispatch: () => {},
});

const Provider = ({children}: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
