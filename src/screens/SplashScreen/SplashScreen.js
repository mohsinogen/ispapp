import {View, Text, Image, TouchableOpacity,SafeAreaView,StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {COLORS} from '../../utils/colors';
import {Button, Row, Spinner} from 'native-base';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {globalStyles} from '../../utils/globalStyles';
import {SharedElement} from 'react-navigation-shared-element';
import {useRoute} from '@react-navigation/native';


const SplashScreen = ({navigation}) => {
  const route = useRoute();
  const [loading, setLoading] = useState(true);

  const animation = useSharedValue(1.1);

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(
            animation.value,
            {
              duration: 2000,
            },
            () => {
              //animation.value = 0.9;
            },
          ),
        },
      ],
    };
  });

  setTimeout(() => {
    setLoading(false);
    animation.value = 0.9;
  }, 2000);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar showHideTransition='slide' barStyle="" backgroundColor={COLORS.primary} />
      <Image
        style={{
          position: 'absolute',
          top: EStyleSheet.value('14rem'),
          zIndex: 999,
          width: EStyleSheet.value('17rem'),
          height: '40%',
          alignSelf: 'center',
        }}
        source={require('../../../assets/images/cable.jpg')}
      />
      <Animated.View style={[styles.container, animationStyle]}>
        <SharedElement id={'logo'}>
          <Image
            style={{...styles.logo}}
            source={require('../../../assets/images/logo.png')}
          />
        </SharedElement>
      </Animated.View>
      <View style={styles.textBox}>
        {loading && (
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Text style={styles.text}>
                THE HUB OF BEST{'\n'}
                <Text style={{...styles.text, color: COLORS.primary}}>
                  BROADBAND{'\n'}SERVICES
                </Text>
              </Text>
            </View>
            <View
              style={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLORS.primary,
                  borderRadius: EStyleSheet.value('6rem'),
                  width: EStyleSheet.value('4rem'),
                  height: EStyleSheet.value('4rem'),
                }}>
                <Spinner size={50} color={COLORS.foreground} />
              </View>
            </View>
          </View>
        )}
        {!loading && (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginBottom: EStyleSheet.value('1rem'),
            }}>
            <View style={{marginBottom: EStyleSheet.value('1rem')}}>
              <Text style={{...styles.text, textAlign: 'center'}}>
                GET YOUR{' \n'}
                <Text style={{...styles.text, color: COLORS.primary}}>
                  CONNECTION{' '}
                </Text>
                NOW
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  ...globalStyles.button,
                  backgroundColor: COLORS.primary,
                }}
                size={12}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={{color: COLORS.foreground, fontWeight: 'bold',fontSize:EStyleSheet.value("1.2rem")}}>
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('Signup');
                }}
                size={12}
                style={{
                  ...globalStyles.button,
                  backgroundColor: COLORS.foreground,
                }}>
                <Text style={{color: COLORS.background, fontWeight: 'bold',fontSize:EStyleSheet.value("1.2rem")}}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = EStyleSheet.create({
  main: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  container: {
    flex: 3,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomRightRadius: 600,
    borderBottomLeftRadius: 600,
    width: '180%',
    top: -40,
  },
  logo: {
    width: '13rem',
    height: '13rem',
    marginTop: '3rem',
  },
  textBox: {
    padding: '1rem',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
  },
  text: {
    color: COLORS.foreground,
    fontSize: '2rem',
    fontFamily: 'FiraSansCondensed-Bold',
  },
});
