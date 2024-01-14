import react from 'react';
import { View, Text, Image, TextInput, Button, Linking, ScrollView } from 'react-native';
import LoginPage from './components/LoginPage';
import RegistPage from './components/Registpage';
import PortoPage from './components/PortoPage';
import CustomButton from './components/CustomButton'
import CustomTextinput from './components/CustomTextinput';


const App = () => {
  return (
    <View style={{height: 160, flex: 1, paddingVertical: 15, paddingHorizontal:20}}>
    <PortoPage/>
    </View>
  );
};

export default App;
