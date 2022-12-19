import React, { useState } from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Signup({ navigation }) {
  const [data, setData] = useState({
    email: "",
    pass: "",
    fname: "",
    lname: "",
  });
  const handleSignup = async () => {
    if (data.email && data.pass && data.fname && data.lname) {
      const key = data.email;
      try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
        navigation.navigate("Login");
      } catch (e) {
        console.log("Error saving");
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.loginText, { textAlign: "center" }]}>
        create NEw Account
      </Text>
      <View>
        <Text style={{ margin: "5px" }}>First Name</Text>
        <TextInput
          onChange={(e) => setData({ ...data, fname: e.target.value })}
          value={data.fname}
          style={styles.iinput}
        />

        <Text style={{ margin: "5px" }}>Last Name</Text>
        <TextInput
          onChange={(e) => setData({ ...data, lname: e.target.value })}
          value={data.lname}
          style={styles.iinput}
        />

        <Text style={{ margin: "5px" }}>Email</Text>
        <TextInput
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
          style={styles.iinput}
        />
        <Text style={{ margin: "5px" }}>Password</Text>
        <TextInput
          onChange={(e) => setData({ ...data, pass: e.target.value })}
          value={data.pass}
          style={styles.iinput}
        />
        <Button onPress={handleSignup} title={"Sign up"}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    width:430,
    height:400,
    backgroundColor:'pink',
    alignSelf:'center',
  },

  iinput: {
    borderWidth : 1,
    borderColor : 'black',
    backgroundColor:'transparent',
    textShadowColor:'white',
    borderRadius : 3,
    width : 400,
    height : 35,
    padding : 10,
    margin : 10,
    color: 'black',
  }


});
export default Signup;
