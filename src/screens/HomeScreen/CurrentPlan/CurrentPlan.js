import {View, Text} from 'react-native';
import React, {useRef, useEffect} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {COLORS} from '../../../utils/colors';
import {AnimatedCircularProgress, cir} from 'react-native-circular-progress';
import {Easing} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalStyles} from '../../../utils/globalStyles';

const CurrentPlan = () => {
  let mbpsProgress, daysProgress, dataProgress;

  const initHandler=()=>{
    mbpsProgress.animate(70, 2000, Easing.quad);
    daysProgress.animate((20 / 25) * 100, 2000, Easing.quad);
    dataProgress.animate(100, 2000, Easing.quad);
  }

  useEffect(() => {
    initHandler()
  }, []);

  return (
    <View
      style={{
        //borderWidth: 2,
        //borderColor: 'white',
        marginHorizontal: EStyleSheet.value('1rem'),
        width: EStyleSheet.value('21rem'),
        marginTop: EStyleSheet.value('2rem'),
        borderRadius: 20,
        backgroundColor: COLORS.primary,
      }}>
      <View style={{padding: EStyleSheet.value('1rem')}}>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontWeight: 'bold',
            color: COLORS.foreground,
          }}>
          Current Plan
        </Text>
      </View>
      <View
        style={{
          backgroundColor: COLORS.foreground,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          paddingHorizontal: EStyleSheet.value('1rem'),
          paddingVertical: EStyleSheet.value('0.5rem'),
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: EStyleSheet.value('11rem'),
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontWeight: 'normal',
              color: COLORS.bgSecondary,
            }}>
            Renewed At :{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontWeight: 'bold',
              color: COLORS.primary,
            }}>
            24-05-2022
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: EStyleSheet.value('11rem'),
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontWeight: 'normal',
              color: COLORS.bgSecondary,
            }}>
            Expires At :{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontWeight: 'bold',
              color: COLORS.primary,
            }}>
            24-06-2022
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: EStyleSheet.value('0.5rem'),
            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center'}}>
            <AnimatedCircularProgress
              ref={ref => (mbpsProgress = ref)}
              prefill={0}
              size={80}
              width={5}
              backgroundWidth={5}
              rotation={-360}
              tintTransparency={true}
              fill={70}
              tintColor={COLORS.primary}
              backgroundColor={COLORS.bgSecondary}>
              {fill => (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontFamily: 'FiraSansCondensed-Bold',
                      fontSize: 25,
                      color: COLORS.primary,
                    }}>
                    30
                  </Text>
                  <Text style={{fontSize: 10, color: COLORS.background}}>
                    Mbps
                  </Text>
                </View>
              )}
            </AnimatedCircularProgress>
            <Text
              style={{
                fontFamily: 'FiraSansCondensed-Bold',
                fontSize: 20,
                color: COLORS.background,
              }}>
              Speed
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <AnimatedCircularProgress
              ref={ref => (daysProgress = ref)}
              prefill={0}
              size={80}
              width={5}
              backgroundWidth={5}
              rotation={-360}
              tintTransparency={true}
              fill={70}
              tintColor={COLORS.primary}
              backgroundColor={COLORS.bgSecondary}>
              {fill => (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontFamily: 'FiraSansCondensed-Bold',
                      fontSize: 25,
                      color: COLORS.primary,
                    }}>
                    20
                  </Text>
                  <Text style={{fontSize: 10, color: COLORS.background}}>
                    Days
                  </Text>
                </View>
              )}
            </AnimatedCircularProgress>
            <Text
              style={{
                fontFamily: 'FiraSansCondensed-Bold',
                fontSize: 20,
                color: COLORS.background,
              }}>
              Days
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <AnimatedCircularProgress
              ref={ref => (dataProgress = ref)}
              prefill={0}
              size={80}
              width={5}
              backgroundWidth={5}
              rotation={-360}
              tintTransparency={true}
              fill={100}
              tintColor={COLORS.primary}
              backgroundColor={COLORS.bgSecondary}>
              {fill => (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontFamily: 'FiraSansCondensed-Bold',
                      fontSize: 25,
                      color: COLORS.primary,
                    }}>
                    ∞
                  </Text>
                </View>
              )}
            </AnimatedCircularProgress>
            <Text
              style={{
                fontFamily: 'FiraSansCondensed-Bold',
                fontSize: 20,
                color: COLORS.background,
              }}>
              Data
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: EStyleSheet.value('0.5rem'),
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              ...globalStyles.button,
              backgroundColor: COLORS.primary,
              width: EStyleSheet.value('7rem'),
              borderRadius: EStyleSheet.value('0.8rem'),
              paddingVertical: EStyleSheet.value('0.8rem'),
              paddingHorizontal: EStyleSheet.value('0.8rem'),
            }}>
            <Text
              style={{
                color: COLORS.foreground,
                fontWeight: 'bold',
              }}>
              Renew
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              width: EStyleSheet.value('10rem'),
              flex:1,
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
              Cancel subscription
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CurrentPlan;
