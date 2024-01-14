import React from 'react';
import { View, Text, Image, TextInput, Button, Linking, ScrollView, Alert } from 'react-native';

import CustomButton from '../Custom/CustomButton';
import CustomTextInput from '../Custom/CustomTextinput'
import TextCustom from '../Custom/Text'

const LoginPage = ({ navigation }) => {
  const Login = () => {
    Alert.alert('Alert', 'Selamat datang kembali!');
  };

  return (
    <View style={{backgroundColor:"white"}}>
      <View>
        <Image
          source={require('../../assets/logoburung1.jpg')}
          style={{ width: 80, height: 94, marginTop: 30, borderRadius: 5, marginLeft: 150}}
        />
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginTop: 20, marginLeft: 18}}>Welcome Back!</Text>
      <Text style={{ marginTop: 5, fontSize: 15, marginLeft:20 }}>Login to your account</Text>
      <View style={{paddingHorizontal:20}}>
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
      <Text style={{ textAlign: 'right', marginTop: 15, color: 'blue', paddingRight:18 }}>Forgot Password?</Text>
      <View style={{ marginTop: 20, paddingHorizontal:20 }}>
        <CustomButton title= 'Login' onPress={() => navigation.navigate('Porto')}/>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', textAlign:'center', justifyContent: 'center', marginTop:40}}>
        <Text style={{ textAlign: 'center' }}>Don't have an account?</Text>
        <Text style={{ fontWeight: 'bold', color: 'blue', marginLeft: 5}} onPress={() => navigation.navigate('Register')}>Register</Text>
      </View>
    </View>
  );
};

export default LoginPage;
