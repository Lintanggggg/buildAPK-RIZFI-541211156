import React from 'react';
import { View, Text, Image, TextInput, Button, Linking, ScrollView, Alert } from 'react-native';

import CustomButton from '../Custom/CustomButton'
import CustomTextInput from '../Custom/CustomTextinput'
import TextCustom from '../Custom/Text'

const RegisterPage = ({ navigation }) => {
  const Register = () => {
    Alert.alert('Alert', 'Selamat datang!');
  };

  return (
    <ScrollView>
    <View style={{backgroundColor:"white"}}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/logoburung1.jpg')}
          style={{ width: 80, height: 94, marginTop: 30, borderRadius: 5}}
        />
      </View>
     
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginTop: 20, marginLeft: 18 }}>Hi There!</Text>
      <Text style={{ marginTop: 5, fontSize: 15, marginLeft: 18 }}>Register to have an account</Text>
      <View  style={{paddingHorizontal:20}}>
<TextInput
          style={{ borderWidth: 1, borderRadius: 5, paddingVertical: 10, paddingHorizontal: 20, marginTop: 15, color: '#AAAAAA' }}
          placeholder='Email'
        />
        <TextInput
          style={{ borderWidth: 1, borderRadius: 5, paddingVertical: 10, paddingHorizontal: 20, marginTop: 15, color: '#AAAAAA' }}
          placeholder='Username'
        />
        <TextInput
          style={{ borderWidth: 1, borderRadius: 5, paddingVertical: 10, paddingHorizontal: 20, marginTop: 15, color: '#AAAAAA' }}
          placeholder='Password' 
        secureTextEntry
        />
      </View>
      <Text style={{ textAlign: 'right', marginTop: 15, color: 'blue', paddingRight:18 }}>  Forgot Password?
      </Text>
      <View style={{ marginTop: 20, paddingHorizontal:20 }}>
        <CustomButton title= 'Register' onPress={() => navigation.navigate('Porto')}/>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', textAlign:'center', justifyContent: 'center', marginTop:40, paddingBottom: 70}}>
        <Text style={{ textAlign: 'center' }}>Already have an account?</Text>
        <Text style={{ fontWeight: 'bold', color: 'blue', marginLeft: 5}}onPress={() => navigation.navigate('Login')}>Login</Text>
      </View>
    </View>
    </ScrollView>
  );
};

export default RegisterPage;
