import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button,View ,image,ImageBackground } from 'react-native';
import { TextInput } from 'react-native-web';

const pic={uri:"https://th.bing.com/th/id/R.aaa3715b1d25ebda80321dff39be6f02?rik=XER%2bHbQhB3g7DQ&riu=http%3a%2f%2fcaptainkimo.com%2fwp-content%2fuploads%2f2012%2f11%2fwpid17294-Sunrise-at-Pine-Forest-and-Palm-Scrubs.jpg&ehk=HDK8jyiVelsnmb6TZyjMi1PCaMRKXrqudi6VWsSW7FI%3d&risl=&pid=ImgRaw&r=0.png"};
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={pic}
      style={styles.image} 
      blurRadius={2}
      > 
  <Text style={{flex:1,color:'white',fontStyle:'italic',textAlign:'center',
  fontSize:100,justifyContent:'flex-start',alignItems:'center', fontWeight: 'bold'}}>  path</Text>
   <View  style={{bottom:120,height:20,width: 300,color:'white',textAlign:'left',right:60,
  fontSize:20,justifyContent:'flex-start',alignItems:'left', fontWeight: 'bold'}}>
      <TextInput style = {styles.iinput} 
      placeholder = 'Email Address '
      ></TextInput>
  </View> 

  <View  style={{bottom:90,height:20,width: 300,color:'white',right:60,
  fontSize:20,justifyContent:'flex-start',alignItems:'stretch', fontWeight: 'bold'}}>
      <TextInput style = {styles.iinput }
      placeholder = 'Password'
      ></TextInput>
  </View> 
  <View  style={{bottom:60,height:20,width:100,color:'white',left:8,
  fontSize:20}} > 
    <Button  title="Register" color="transparent" ></Button>
  </View>

  <View  style={{ bottom:5,height:30,width:400,alignSelf:"stretch",color:'white',left:1,
  fontSize:100}} > 
    <Button  title="Login" color="red" ></Button>
  </View>
      </ImageBackground>
    
      
    </View>
);
  }

const styles = StyleSheet.create({
    container: {
     
     width:400,
     height:400,
     alignSelf:'center',
     
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
      backgroundColor:'transparent',
      textShadowColor:'white',
      borderRadius : 3,
      width : 400,
      height : 35,
      padding : 10,
      margin : 10,
      color: 'white',
    }
});


