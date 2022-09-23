import React, {useState, useEffect} from 'react';
import {
    Image,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";

const Login = ({ navigation }) => {

  const [user, setuser] = useState('');
  const [pass, setpass] = useState('');
  const [message, setmessage] = useState('');

  useEffect(()=> {
    setmessage('')
  },[user,pass])
  
  const Ingresar = () => {

    if(user == 'Joel' && pass == 'Supermario27')
    {

      navigation.navigate('Home', {
        User:user
      })
      setpass('');
      setuser('');
    }else{

      setmessage('Usuario incorrecto.!!')
      
    }

  }

  return (
    <View style={styles.container}>
      <Image source={require('../img/logo.png')} style={{width: '35%', height:'16%', marginBottom:80}}/>
          <TextInput
            placeholder="User"
            value={user}
            onChangeText={(e)=>setuser(e)}
            style={{
              width: 300,
              height: 50,
              margin: 5,
              padding: 5,
              backgroundColor: "gray",
              borderRadius: 5,
            }}
          />
          <TextInput
            placeholder="Pass"
            value={pass}
            onChangeText={(e)=>setpass(e)}
            style={{
              width: 300,
              height: 50,
              margin: 10,
              padding: 5,
              backgroundColor: "gray",
              borderRadius: 5,
            }}
          />
          <Pressable style={styles.Button}
           onPress={Ingresar}>
            <Text>Ingresar</Text>
          </Pressable>
          <Text style={{color: 'red'}}>{message}</Text>
          <StatusBar style="auto" />
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      
    },
    Button: {
      textAlign: "center",
      width: 300,
      padding: 10,
      backgroundColor: "green",
      borderColor: "while",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      elevation: 3,
    },
  });

export default Login