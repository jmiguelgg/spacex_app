import React, { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './index.style';

interface FavoritImageProps {
  uri: string;
}

const FavoritImage = ({uri}: FavoritImageProps) => {
  const [isFavorit, setIsFavorit] = useState(false);
  const favoritIcon = require('../../assets/startFilled.png')
  const noFavoritIcon = require('../../assets/start.png');

  const handdleFavorit = () => {
    setIsFavorit(!isFavorit);
  };

  return (
    <TouchableOpacity onPress={handdleFavorit}>
      <Image style={styles.images} source={{uri}} />
      <Image style={styles.favoritIcon} source={isFavorit ? favoritIcon : noFavoritIcon} />
    </TouchableOpacity>
  );
};

export default FavoritImage;
