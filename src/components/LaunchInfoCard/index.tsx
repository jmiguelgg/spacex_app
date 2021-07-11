import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {LaunchesPastDataInfo} from '../../services/querys/launches';
import styles from './index.style';

interface LaunchInfoCardProps {
  cardInfo: LaunchesPastDataInfo;
  goToDetails: any;
};

const LaunchInfoCard = ({cardInfo, goToDetails}: LaunchInfoCardProps)  => {
  const existImage = cardInfo.links.flickr_images[0] !== undefined;

  const handdleDetaild = () => {
    goToDetails(cardInfo);
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handdleDetaild}>
      <Image style={existImage ? styles.imagePreview : styles.missinImage} source={existImage ? {uri: cardInfo.links.flickr_images[0]} : require('../../assets/imageIcon.png')} />
      <View style={{flex: 1}}>
        <Text style={styles.textCardTitle}>{cardInfo.mission_name}</Text>
        <Text style={styles.textCardDate}>
          {cardInfo.launch_date_local.toString().split('T')[0]}
        </Text>
      </View>
      <Image style={styles.arrowIcon} source={require('../../assets/rightArrow.png')} />
    </TouchableOpacity>
  );
};

export default LaunchInfoCard;
