import React from 'react';
import { View } from 'react-native';
import UserScore from '../../domain/models/UserScore.model';
import Label from '../Label/Label';
import ProgressBar from '../ProgressBar/ProgressBar';

const Score = ({ list }: any) => <>
  {list.map((item: UserScore, index: number) => (
    <View key={index}>
      <Label align='center'>{item.description}</Label>
      <ProgressBar progress={item.level} />
    </View>
  ))}
</>;

export default Score;