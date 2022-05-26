import {View, Text} from 'react-native';
import React, {useRef, useEffect} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {COLORS} from '../../../utils/colors';
import {AnimatedCircularProgress, cir} from 'react-native-circular-progress';
import {Easing} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalStyles} from '../../../utils/globalStyles';

const TransactionComponent = ({price}) => {
  return (
    <View
      style={{
        //borderWidth: 2,
        //borderColor: 'white',
        marginHorizontal: EStyleSheet.value('1rem'),
        width: EStyleSheet.value('21rem'),
        marginTop: EStyleSheet.value('1rem'),
        borderRadius: 20,
        zIndex: 999,
        elevation: 5,
        backgroundColor: COLORS.foreground,
      }}>
      <View>
        <View
          style={{
            paddingVertical: EStyleSheet.value('0.5rem'),
            paddingHorizontal: EStyleSheet.value('1rem'),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontWeight: 'bold',
              color: COLORS.bgSecondary,
              fontSize: 18,
            }}>
            Plan type :
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontWeight: 'bold',
              color: COLORS.background,
              fontSize: 18,
            }}>
            Basic
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: EStyleSheet.value('1rem'),
            paddingVertical: EStyleSheet.value('0.5rem'),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontWeight: 'bold',
              color: COLORS.bgSecondary,
              fontSize: 18,
            }}>
            Activated At :
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontWeight: 'bold',
              color: COLORS.background,
              fontSize: 18,
            }}>
            26-05-2022
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: COLORS.primary,
          borderRadius: 20,
          marginHorizontal: 2,
          marginBottom: 2,
          paddingHorizontal: EStyleSheet.value('1rem'),
          paddingVertical: EStyleSheet.value('0.5rem'),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

            // marginTop: EStyleSheet.value('0.5rem'),
          }}>
          <Text
            style={{
              color: COLORS.foreground,
              fontWeight: 'bold',
              fontSize: 30,
            }}>
            ₹{price}
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              width: EStyleSheet.value('10rem'),
              flex: 1,
              //borderWidth:2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.foreground,
              color: COLORS.background,
              borderRadius: EStyleSheet.value('0.8rem'),
              //paddingVertical: EStyleSheet.value('1rem'),
              //paddingHorizontal: EStyleSheet.value('1.2rem'),
            }}>
            <Text
              style={{
                color: COLORS.background,
                fontWeight: 'bold',
              }}>
              Invoice
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TransactionComponent;
