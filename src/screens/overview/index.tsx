import React from 'react';
import {View, Text} from 'react-native';
import useLauchesPastService from '../../services/launches';

const Overview = () => {
  const lauches = useLauchesPastService({limit: 10});

  return (
    <View>
      <Text>Start project</Text>
    </View>
  );
};

export default Overview;
