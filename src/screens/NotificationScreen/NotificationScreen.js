import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import {globalStyles} from '../../utils/globalStyles';

const NotificationScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
      <StatusBar
        showHideTransition="fade"
        barStyle="light-content"
        backgroundColor={COLORS.background}
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: EStyleSheet.value('3rem'),
          paddingTop: EStyleSheet.value('3rem'),
          paddingBottom:EStyleSheet.value("2rem")
        }}>
        <Text
          style={{...globalStyles.text, fontSize: EStyleSheet.value('2rem')}}>
          Notifications
        </Text>
        <View style={{marginTop: EStyleSheet.value('2rem'),justifyContent:"center",alignItems:"center"}}>
          <View style={styles.container}>
            <View>
              <Text style={{...globalStyles.text,fontFamily:"Poppins-Light"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <Text style={{...globalStyles.text,fontFamily:"Poppins-Light"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <Text style={{...globalStyles.text,fontFamily:"Poppins-Light"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <Text style={{...globalStyles.text,fontFamily:"Poppins-Light"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <Text style={{...globalStyles.text,fontFamily:"Poppins-Light"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <Text style={{...globalStyles.text,fontFamily:"Poppins-Light"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <Text style={{...globalStyles.text,fontFamily:"Poppins-Light"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  container: {
    marginVertical:"0.3rem",
    //overflow:"hidden",
    //height:"5rem",
    width:"19rem",
    backgroundColor: COLORS.bgSecondary,
    borderRadius: '1rem',
    paddingHorizontal: '2rem',
    paddingVertical:'1rem'
  },
});

export default NotificationScreen;
