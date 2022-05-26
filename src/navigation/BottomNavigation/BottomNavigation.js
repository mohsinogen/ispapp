import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
import {COLORS} from '../../utils/colors';
import PlansScreen from '../../screens/PlansScreen/PlansScreen';
import {View,Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomNavigation = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          zIndex:1,
          position: 'absolute',
          //margin: EStyleSheet.value('1rem'),
          height: EStyleSheet.value('4rem'),
          backgroundColor: 'red',
          //margin: EStyleSheet.value('0.5rem'),
          elevation: 5,
          borderTopWidth: 0,
          borderTopStartRadius: EStyleSheet.value('1rem'),
          borderTopEndRadius: EStyleSheet.value('1rem'),
          
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <View style={styles.textbox}>
                    <Text style={{fontWeight:"bold"}}>Home</Text>
                  </View>
                ) : (
                  <Icon
                    name={'home'}
                    size={30}
                    color={focused ? COLORS.foreground : COLORS.foreground}
                  />
                )}
              </View>
            );
          },
        }}
        name="Feed"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <View style={styles.textbox}>
                    <Text style={{fontWeight:"bold"}}>Plans</Text>
                  </View>
                ) : (
                  <Icon
                  name={'cart'}
                  size={30}
                  color={focused ? COLORS.foreground : COLORS.foreground}
                />
                )}
                
              </View>
            );
          },
        }}
        name="Plans"
        component={PlansScreen}
      />
    </Tab.Navigator>
  );
};

const styles = EStyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '1.2rem',
    paddingVertical: '0.5rem',
    borderRadius: '1rem',
    // borderWidth: 1,
    borderRadius: '1.5rem',
  },
  bar: {
    width: '0.8rem',
    height: '0.5rem',
    backgroundColor: 'black',
    borderRadius: 5,
  },
  active: {
    color: 'red',
  },
  textbox:{
    backgroundColor:COLORS.foreground,
    paddingHorizontal:10,
    paddingVertical:3,
    borderRadius:8
  }
});

export default BottomNavigation;
