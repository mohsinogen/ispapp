import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {COLORS} from '../../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const PlanComponent = ({name, speed, validity, price,isActive}) => {
  return (
    <View
      style={{
        //borderWidth: 2,
        //borderColor: 'white',
        marginHorizontal: EStyleSheet.value('1rem'),
        width: EStyleSheet.value('21rem'),
        marginTop: EStyleSheet.value('1rem'),
        borderRadius: 20,
        backgroundColor: COLORS.primary,
      }}>
      <View
        style={{
          padding: EStyleSheet.value('1rem'),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontWeight: 'bold',
            fontSize: EStyleSheet.value('1.3rem'),
            color: COLORS.foreground,
          }}>
          {name}
          <Text
            style={{
              fontWeight: 'normal',
              fontSize: EStyleSheet.value('1rem'),
              color: COLORS.foreground,
            }}>
            {' (unlimited)'}
          </Text>
        </Text>
       {isActive ? ( <View
          style={{
            backgroundColor: COLORS.foreground,
            paddingHorizontal: EStyleSheet.value('0.7rem'),
            paddingVertical: EStyleSheet.value('0.2rem'),
            justifyContent: 'center',
            alignItems: 'center',

            borderRadius: 8,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontWeight: '700',
              fontSize: EStyleSheet.value('1rem'),
              color: COLORS.primary,
            }}>
            Active
          </Text>
        </View>):null}
      </View>
      <View
        style={{
          backgroundColor: COLORS.foreground,
          justifyContent: 'space-around',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          paddingHorizontal: EStyleSheet.value('1rem'),
          paddingVertical: EStyleSheet.value('0.5rem'),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text
              style={{
                color: COLORS.background,
                fontSize: EStyleSheet.value('2rem'),
              }}>
              ₹{price}
            </Text>
            <Text
              style={{
                color: COLORS.bgSecondary,
                fontSize: EStyleSheet.value('1rem'),
              }}>
              /Month
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text
              style={{
                color: COLORS.background,
                fontSize: EStyleSheet.value('2rem'),
              }}>
              {speed}
            </Text>
            <Text
              style={{
                color: COLORS.bgSecondary,
                fontSize: EStyleSheet.value('1rem'),
              }}>
              Mbps
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text
              style={{
                color: COLORS.background,
                fontSize: EStyleSheet.value('2rem'),
              }}>
              {validity}
            </Text>
            <Text
              style={{
                color: COLORS.bgSecondary,
                fontSize: EStyleSheet.value('1rem'),
              }}>
              Days
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            marginTop:EStyleSheet.value("0.5rem"),
            marginRight:EStyleSheet.value("0.5rem"),
            alignSelf:"flex-end",
            width: EStyleSheet.value('1.6rem'),
            height: EStyleSheet.value('1.6rem'),
            borderRadius:25,
            padding:2,
            justifyContent:"center",
            alignItems:"center"
          }}>
          <Icon name="caretright" color={COLORS.foreground} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlanComponent;

const styles = EStyleSheet.create({});
