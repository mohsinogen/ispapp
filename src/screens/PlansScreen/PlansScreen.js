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
import {useDrawerStatus} from '@react-navigation/drawer';
import PlanComponent from './PlanComponent/PlanComponent';

const PlansScreen = ({navigation}) => {
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
        paddingTop: EStyleSheet.value('2rem'),
        paddingBottom: EStyleSheet.value('4rem'),
      }}>
      <StatusBar
        showHideTransition="fade"
        barStyle="light-content"
        backgroundColor={COLORS.background}
      />

      <ScrollView
        contentContainerStyle={{paddingBottom: EStyleSheet.value('1rem')}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <PlanComponent isActive={true} name={'Basic'} price={500} validity={25} speed={30} />
        <PlanComponent isActive={false}
          name={'Standard'}
          price={2000}
          validity={50}
          speed={30}
        />
        <PlanComponent isActive={false}
          name={'Premium'}
          price={3000}
          validity={100}
          speed={50}
        />
        <PlanComponent isActive={false}
          name={'Exclusive'}
          price={5000}
          validity={150}
          speed={90}
        />
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
    width: '19rem',
    height: '3rem',
    borderRadius: '1rem',
    //borderWidth: 2,
    //borderColor: COLORS.foreground,
    paddingHorizontal: 3,
  },
});
export default PlansScreen;
