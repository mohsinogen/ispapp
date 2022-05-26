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
import CurrentPlan from './CurrentPlan/CurrentPlan';
import PlanComponent from '../PlansScreen/PlanComponent/PlanComponent';
import AntIcon from 'react-native-vector-icons/AntDesign';

const HomeScreen = ({navigation}) => {
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
        <View style={{...styles.box, justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
              //console.log(isDrawerOpen);
            }}
            activeOpacity={0.7}
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              /* borderWidth:2,borderColor:"red" ,*/ width: 70,
              height: 30,
              alignItems: 'flex-start',
            }}>
            <View
              style={{
                width: 50,
                backgroundColor: COLORS.foreground,
                height: 3,
                borderRadius: 5,
              }}></View>
            <View
              style={{
                width: 30,
                backgroundColor: COLORS.foreground,
                height: 3,
                borderRadius: 5,
              }}></View>
            <View
              style={{
                width: 15,
                backgroundColor: COLORS.foreground,
                height: 3,
                borderRadius: 5,
              }}></View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}
              activeOpacity={0.7}
              style={{
                height: '100%',
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                //borderColor:"white",
                //borderWidth:2
              }}>
              <View
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  backgroundColor: COLORS.primary,
                  width: 20,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: EStyleSheet.value('3rem'),
                  zIndex: 9999,
                }}>
                <Text style={{color: COLORS.foreground}}>7</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 3,
                  backgroundColor: COLORS.foreground,
                  borderRadius: 8,
                }}>
                <Icon name="bell" size={20} color={COLORS.primary} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <CurrentPlan />
        <View
          style={{
            marginHorizontal: EStyleSheet.value('1rem'),
            marginTop: EStyleSheet.value('1rem'),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.primary,
              fontFamily: 'FiraSansCondensed-Bold',
              fontSize: EStyleSheet.value('1.8rem'),
            }}>
            Plans
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate("Plans")}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: COLORS.foreground,
                fontSize: EStyleSheet.value('1.2rem'),
              }}>
              view all
            </Text>
            <AntIcon size={20} color={COLORS.foreground} name="arrowright" />
          </TouchableOpacity>
        </View>

        <PlanComponent
          isActive={true}
          name={'Basic'}
          price={500}
          validity={25}
          speed={30}
        />
        <PlanComponent
          isActive={false}
          name={'Standard'}
          price={2000}
          validity={50}
          speed={30}
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
    //width: '19rem',
    height: '3rem',
    borderRadius: '1rem',
    //borderWidth: 2,
    //borderColor: COLORS.foreground,
    paddingHorizontal: EStyleSheet.value('1rem'),
  },
});
export default HomeScreen;
