import React from "react";
import { View, Text } from "react-native";
function Profile({ navigation, route }) {
  const data = route.params.data;
  return (
    <View style={{backgroundColor:'pink',width:400,height:400,alignSelf:'center',}}>
      <Text>First Name: {data.fname}</Text>
      <Text>Last Name: {data.lname}</Text>
      <Text>Email: {data.email}</Text>
      <Text>Password: {data.pass}</Text>
    </View>
  );
}


export default Profile;
