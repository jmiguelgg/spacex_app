import React from 'react';
import {View, Text, Image} from 'react-native';
import { LaunchesPastData, LaunchesPastDataInfo } from '../../services/querys/launches';
import styles from './index.style';

interface LaunchInfoCardProps {
  cardInfo: LaunchesPastDataInfo;
};

const LaunchInfoCard = ({cardInfo}: LaunchInfoCardProps)  => {
  const existImage = cardInfo.links.flickr_images[0] !== undefined;
  return (
    <View style={styles.cardContainer}>
      <Image style={existImage ? styles.imagePreview : styles.missinImage} source={existImage ? {uri: cardInfo.links.flickr_images[0]} : require('../../assets/imageIcon.png')} />
      <View style={{flex: 1}}>
        <Text style={styles.textCardTitle}>{cardInfo.mission_name}</Text>
        <Text style={styles.textCardDate}>{cardInfo.launch_date_local}</Text>
      </View>
      <Image style={styles.arrowIcon} source={require('../../assets/rightArrow.png')} />
    </View>
  );
};

export default LaunchInfoCard;
