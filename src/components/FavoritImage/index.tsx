import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Context } from '../../store';
import { addFavorite, removeFavorite } from '../../store/actions';
import styles from './index.style';

interface FavoritImageProps {
  uri: string;
}

const FavoritImage = ({uri}: FavoritImageProps) => {
  const [isFavorit, setIsFavorit] = useState(false);
  const { state, dispatch } = useContext(Context);
  const favoritIcon = require('../../assets/startFilled.png')
  const noFavoritIcon = require('../../assets/start.png');

  const handdleFavorit = () => {
    if (isFavorit) {
      dispatch(removeFavorite(uri));
    } else {
      dispatch(addFavorite(uri));
    }
    setIsFavorit(!isFavorit);
  };

  useEffect(() => {
    const findFavorite = state.favoriteImages.find(item => item === uri);
    if (findFavorite) {
      setIsFavorit(findFavorite.length > 0);
    }
  }, []);

  return (
    <TouchableOpacity onPress={handdleFavorit}>
      <Image style={styles.images} source={{uri}} />
      <Image style={styles.favoritIcon} source={isFavorit ? favoritIcon : noFavoritIcon} />
    </TouchableOpacity>
  );
};

export default FavoritImage;
