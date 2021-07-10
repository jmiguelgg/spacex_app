import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import { GET_LAUCHES } from '../../services/querys';
import useLauchesPastService from '../../services';

const Overview = () => {
  const lauches = useLauchesPastService({limit: 10});

  return (
    <View>
      <Text>Start project</Text>
    </View>
  );
};

export default Overview;
