import React from 'react';
import {View, Text, Button} from 'react-native';
import useLauchesPastService from '../../services/launches';

interface OverviewProps {
  navigation: any;
};

const Overview = ({navigation}: OverviewProps) => {
  const lauches = useLauchesPastService({limit: 10});

  return (
    <View>
      <Text>Start project</Text>
      <Button onPress={() => navigation.navigate('Details')} title="Next" />
    </View>
  );
};

export default Overview;
