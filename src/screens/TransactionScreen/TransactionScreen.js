import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {COLORS} from '../../utils/colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDrawerStatus} from '@react-navigation/drawer';
import TransactionComponent from './TransactionComponent/TransactionComponent';

const TransactionScreen = ({navigation}) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  useEffect(() => {}, [refreshing]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        paddingTop: EStyleSheet.value('1rem'),
      }}>
      <StatusBar
        showHideTransition="fade"
        barStyle="light-content"
        backgroundColor={COLORS.background}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: EStyleSheet.value('5rem')}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      <TransactionComponent price={500} />
      <TransactionComponent price={500} />
      <TransactionComponent price={500} />
      <TransactionComponent price={500} />
      <TransactionComponent price={500} />
      <TransactionComponent price={500} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = EStyleSheet.create({
  box: {
    flexDirection: 'row',
    //justifyContent:"space-around",
    alignItems: 'center',
    justifyContent: 'center',
    //width: '19rem',
    height: '3rem',
    borderRadius: '1rem',
    //borderWidth: 2,
    //borderColor: COLORS.foreground,
    paddingHorizontal: EStyleSheet.value('1rem'),
  },
});
export default TransactionScreen;
