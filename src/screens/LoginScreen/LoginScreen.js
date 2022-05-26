import {View, Text, Image, TextInput, StatusBar,SafeAreaView} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import {globalStyles} from '../../utils/globalStyles';
import {Button} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';

const LoginScreen = ({navigation}) => {
  return (      

    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: EStyleSheet.value('4rem'),
      }}><StatusBar showHideTransition='slide' barStyle="light-content" backgroundColor={COLORS.background} />

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <SharedElement id={'logo'}>
          <Image
            style={{...styles.logo}}
            source={require('../../../assets/images/logo.png')}
          />
        </SharedElement>
        <View style={{marginTop: EStyleSheet.value('7rem')}}>
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
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: COLORS.foreground,
            marginTop: EStyleSheet.value('1.5rem'),
          }}>
          Dont't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
          activeOpacity={0.7}>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: 'bold',
              fontSize: EStyleSheet.value('1.2rem'),
              marginTop: EStyleSheet.value('1rem'),
            }}>
            Signup
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
export default LoginScreen;
