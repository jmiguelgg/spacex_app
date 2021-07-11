import { ApolloError } from '@apollo/client';
import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import LaunchInfoCard from '../../components/LaunchInfoCard';
import useLauchesPastService from '../../services/launches';
import { LaunchesPastDataInfo } from '../../services/querys/launches';
import Color from '../../theme/color';
import styles from './index.style';

interface OverviewProps {
  navigation: any;
};

const Overview = ({navigation}: OverviewProps) => {
  const LIMIT_REQUEST = 10;
  const result = useLauchesPastService({limit: LIMIT_REQUEST});

  const renderLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Color.deepBlue} />
        <Text style={styles.textLoading}>Loading launches...</Text>
      </View>
    );
  }

  const renderError = () => {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.textLoading}>Sorry, something went wrong!</Text>
      </View>
    );
  };

  const handdleNavigatToDetails = (launchesInfo: LaunchesPastDataInfo) => {
    navigation.navigate('Details', {infoLaunch: launchesInfo});
  };

  const renderLaunches = (launchesInfo: LaunchesPastDataInfo[]) => {
    const orderLaunches = [...result] as LaunchesPastDataInfo[];
    const newOrderLaunches = orderLaunches.sort((a,b) => new Date(a.launch_date_local).getTime() - new Date(b.launch_date_local).getTime());
    return (
      <FlatList
        data={newOrderLaunches}
        keyExtractor={item => 'card'+item.mission_name}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <LaunchInfoCard cardInfo={item} goToDetails={handdleNavigatToDetails} />}
      />
    );
  };

  return (
    <View style={styles.containerScreen}>
      {result ? renderLaunches(result) : renderLoading()}
    </View>
  );
};

export default Overview;
