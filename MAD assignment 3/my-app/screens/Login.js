import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const pic={uri:"https://th.bing.com/th/id/R.aaa3715b1d25ebda80321dff39be6f02?rik=XER%2bHbQhB3g7DQ&riu=http%3a%2f%2fcaptainkimo.com%2fwp-content%2fuploads%2f2012%2f11%2fwpid17294-Sunrise-at-Pine-Forest-and-Palm-Scrubs.jpg&ehk=HDK8jyiVelsnmb6TZyjMi1PCaMRKXrqudi6VWsSW7FI%3d&risl=&pid=ImgRaw&r=0.png"};

function Login({ navigation }) {
  const [data, setData] = useState({ email: "", pass: "" });
  const handleLogin = async () => {
    if (data.email && data.pass) {
      try {
        const email = data.email;
        const val = await AsyncStorage.getItem(email);
        if (val != null) {
          const obj = JSON.parse(val);
          if (obj.pass == data.pass) {
            navigation.push("Profile", { data: obj });
          }
        }
      } catch (e) {}
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={pic}
      style={styles.image} 
      blurRadius={2}
      > 
      <Text style={styles.pth}>
        path
      </Text>
      <View style={{color:'white'}}>
        
        <TextInput
        placeholder="Email"
        placeholderTextColor={'white'}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
          style={styles.iinput}
        />
        
        <TextInput
        
         placeholder="Password"
         placeholderTextColor={'white'}
          onChange={(e) => setData({ ...data, pass: e.target.value })}
          value={data.pass}
          style={styles.iinput}
        />
        <View style={{width:400,left:10}}>
        <Button onPress={handleLogin} title={"Login"}></Button>
        
           <Text style={{color:'white'}}>
              Don't have an account?
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            Click here
          </TouchableOpacity>
        </Text>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    width:430,
    height:400,
    alignSelf:'center',
  },
  pth:{

    flex:1,color:'white',fontStyle:'italic',textAlign:'center',
    fontSize:100,justifyContent:'flex-start',alignItems:'center', fontWeight: 'bold'

  },
  image :{
    width:400,
    height:400,
    alignself:'center',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  txt:{
  color:'white ',
  fontSize:100,
  justifyContent: 'center',
  alignItems: 'center',
  },

  iinput: {
    borderWidth : 1,
    borderColor : 'white',
    backgroundColor:'black',
    textShadowColor:'white',
    borderRadius : 3,
    width : 400,
    height : 35,
    padding : 10,
    margin : 10,
    color: 'white',
  }




});
export default Login;
