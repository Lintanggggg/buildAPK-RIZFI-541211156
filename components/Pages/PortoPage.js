import react from 'react';
import {View,Text,Image,TextInput,Button,ScrollView,Linking, StyleSheet, TouchableOpacity, } from 'react-native';
import MyButton from '../Button'
import { Card } from 'react-native-paper';
import LikeDislikeButton from '../Custom/LikeDislikeButton'
import CustomImage from '../Custom/CustomImage'


export default function Porto() {
  const Website = require('../../assets/website.png')
  const Moneybage = require('../../assets/Moneybage.jpg')
  const todolist = require('../../assets/todolist.png')

  return (
    <ScrollView style={styles.container}>
    <View style={{ paddingBottom: 30 }}> 
      <Text style={styles.overviewheading}>Portofolio Lintang</Text>
      <Card style={styles.card}>
        <View style={styles.inner_card}>
          <View style={{ position: 'relative', height: 100 }}>
            <Image
              style={{
                width: 98,
                height: 140,
                position: 'absolute',
                bottom: -45,
                left: -8,
              }}
              source={require('../../assets/lintang_cv.png')}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 104 }}>
            <Text style={styles.pb1}>My Biodata</Text>
            <Text style={(styles.text, styles.textleft)}>
              Saya siswi kelas 12 SMK Telkom Purwokerto dari jurusan Rekayasa Perangkat Lunak yang memiliki minat di bidang database dan website.
            </Text>
          </View>
        </View>
      </Card>
      </View>
      <Text style={styles.projectheading}>My Project</Text>
      <View>
        <View style={{ marginBottom: 20 }}>
          <Card style={styles.card}>
            <View style={styles.inner_card1}>
              <View>
                <CustomImage path = {Moneybage}/>
              </View>
              <View
                style={{
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginTop: 30,
                  marginLeft: 200,
                }}>
              </View>
              <View style={{ marginLeft: 10, marginTop: 5, marginBottom: 10 }}>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'left',
            color: 'black',
            fontSize: 15,
          }}>
          Moneybage
        </Text>

        <Text 
          style={{
            textAlign: 'left', 
            color: '#176B87', 
            fontSize: 13
          }}>
          Desain Project
        </Text>
      <LikeDislikeButton />
              </View>
            </View>
          </Card>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Card style={styles.card}>
            <View style={styles.inner_card1}>
              <View>
                <CustomImage path = {Website}/>
              </View>
              <View
                style={{
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginTop: 30,
                  marginLeft: 200, 
                  }}>
              </View>
              <View style={{ marginLeft: 10, marginTop: 5, marginBottom: 10 }}>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'left',
            color: 'black',
            fontSize: 15,
          }}>
          To-do-List
        </Text>
        <Text 
          style={{
            textAlign: 'left', 
            color: '#176B87', 
            fontSize: 13
          }}>
          Website 
        </Text>
      <LikeDislikeButton />
              </View>
            </View>
          </Card>
        </View>
      </View>

      <View style={{ marginBottom: 20 }}>
          <Card style={styles.card}>
            <View style={styles.inner_card1}>
              <View>
                <CustomImage path = {todolist}/>
              </View>
              <View
                style={{
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginTop: 30,
                  marginLeft: 200, 
                  }}>
              </View>
              <View style={{ marginLeft: 10, marginTop: 5, marginBottom: 10 }}>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'left',
            color: 'black',
            fontSize: 15,
          }}>
          To-do-List
        </Text>
        <Text 
          style={{
            textAlign: 'left', 
            color: '#176B87', 
            fontSize: 13
          }}>
          Website CRUD
        </Text>
      <LikeDislikeButton />
              </View>
            </View>
          </Card>
        </View>
      
      <View style={{ paddingBottom: 30 }}>
                <Card style={styles.card}>
        <Text style={styles.projectheading}>Social Media</Text>
          <Text style={styles.text}>Kunjungi{' '}
          <Text
    style={{ color: 'blue', textDecorationLine: 'underline' }}
    onPress={() => Linking.openURL('https://www.instagram.com/tang.slfdla/')}>
    Instagram
  </Text>
  </Text>
   <Text style={styles.text}>Kunjungi{' '}
  <Text
    style={{ color: 'blue', textDecorationLine: 'underline' }}
    onPress={() => Linking.openURL('https://wa.me/+6281393718933')}>
    WhatsApp
  </Text>
  </Text>
  <View style={{ marginTop: 20 }}>
        <Button color='black' title="Contact Me"/>
      </View>
           </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  overviewheading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  projectheading: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inter',
  },
  card: {
    position: 'relative',
    padding: 18,
    borderWidth: 1,
    borderColor: 'black',
  },
  inner_card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  inner_card1: {
    textAlign: 'center',
  },
  textleft: {
    fontSize: 13.5,
    textAlign: 'left',
    fontFamily: 'Inter'

  },
  pb1: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Inter'
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Inter'
  },
});
