import {View, Text, Image, TextInput,SafeAreaView,StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import {globalStyles} from '../../utils/globalStyles';
import {Button} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {StackActions, NavigationActions} from 'react-navigation';

const SignupScreen = ({navigation}) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Home'})],
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
        <StatusBar showHideTransition='slide' barStyle="light-content" backgroundColor={COLORS.background} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <SharedElement id={'logo'}>
          <Image
            style={{...styles.logo}}
            source={require('../../../assets/images/logo.png')}
          />
        </SharedElement>
        <View style={{marginTop: EStyleSheet.value('0.5rem')}}>
          <TextInput
            placeholderTextColor={'grey'}
            style={globalStyles.input}
            placeholder="Enter your name"
          />
          <TextInput
            placeholderTextColor={'grey'}
            style={globalStyles.input}
            placeholder="Enter your email"
          />
          <TextInput
            placeholderTextColor={'grey'}
            style={globalStyles.input}
            placeholder="Enter your password"
          />
          <TextInput
            placeholderTextColor={'grey'}
            style={globalStyles.input}
            placeholder="Re enter your password"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('Base');
          }}
          activeOpacity={0.7}
          size={'lg'}
          style={{
            ...globalStyles.button,
            marginTop: EStyleSheet.value('1.5rem'),
          }}>
          <Text
            style={{
              color: COLORS.background,
              fontWeight: 'bold',
              fontSize: EStyleSheet.value('1.2rem'),
            }}>
            Signup
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: COLORS.foreground,
            marginTop: EStyleSheet.value('1.5rem'),
          }}>
          Already have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          activeOpacity={0.7}>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: 'bold',
              fontSize: EStyleSheet.value('1.2rem'),
              marginTop: EStyleSheet.value('1rem'),
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  logo: {
    width: '8rem',
    height: '8rem',
    marginTop: '2rem',
    borderRadius: '10rem',
  },
});
export default SignupScreen;
