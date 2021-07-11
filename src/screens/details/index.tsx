import React from 'react';
import { FlatList, Text, View, Image, ScrollView } from 'react-native';
import FavoritImage from '../../components/FavoritImage';
import styles from './index.style';

interface DetaildProps {
  navigation: any;
  route: any;
}

const Details = ({navigation, route}: DetaildProps) => {
  const {infoLaunch} = route.params;
  return (
    <View style={styles.containerScreen}>
      <Text style={styles.title}>{infoLaunch.mission_name}</Text>
      <Text style={styles.textInfo}>{infoLaunch.rocket.rocket_name}</Text>
      <Text style={styles.textInfo}>{infoLaunch.launch_date_local.toString().split('T')[0]}</Text>
      <Text style={styles.textInfo}>{infoLaunch.launch_site.site_name_long}</Text>
      <FlatList
        data={infoLaunch.links.flickr_images}
        keyExtractor={item => 'image'+item}
        style={styles.imagesContainer}
        key={3}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <FavoritImage uri={item} />}
      />
    </View>
  );
};

export default Details;
