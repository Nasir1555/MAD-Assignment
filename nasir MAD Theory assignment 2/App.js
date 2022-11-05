import { StyleSheet, Text, View, TextInput } from "react-native";
import BlueSteps from "./components/blue";
import GreenStpes from "./components/green";
import RedSteps from "./components/red";
import Steps from "./components/yellow";

export default function App() {
  return(
    <View style={styles.container}>
      <View style={styles.wrapper2}>
        <View style={styles.wrapper}>
          <View style={styles.Box1}>
            <View style={styles.box1}>
              <View style={styles.circle}/>
              <View style={styles.circle}/>
              <View style={styles.circle}/>
              <View style={styles.circle}/>
            </View>
          </View>
          <Steps />
          <View style={styles.Box2}>
            <View style={styles.box2}>
              <View style={styles.circle}/>
              <View style={styles.circle}/>
              <View style={styles.circle}/>
              <View style={styles.circle}/>
            </View>
          </View>
        </View>
        <View style={styles.wrapper}>
        <RedSteps/>
        <View style={styles.centeralBox}/>
        <BlueSteps/>
        </View>
        
        <View style={styles.wrapper}>
          <View style={styles.Box3}>
              <View style={styles.box3}>
                <View style={styles.circle}/>
                <View style={styles.circle}/>
                <View style={styles.circle}/>
                <View style={styles.circle}/>
              </View>
            </View>
            <GreenStpes/>
            <View style={styles.Box4}>
              <View style={styles.box4}>
                <View style={styles.circle}/>
                <View style={styles.circle}/>
                <View style={styles.circle}/>
                <View style={styles.circle}/>
              </View>
            </View>
          </View>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "black",
  },
  wrapper2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center'
  },
  Box1: {
    backgroundColor: "red",
    height: 150,
    width: 150,
  },
  box1: {
    backgroundColor: "maroon",
    height: 100,
    width: 100,
    margin: 25,
    flexWrap: "wrap"
  },
  Box2: {
    backgroundColor: "gold",
    height: 150,
    width: 150,
  },
  box2: {
    backgroundColor: "goldenrod",
    height: 100,
    width: 100,
    margin: 25,
    flexWrap: "wrap"
  },
  Box3: {
    backgroundColor: "green",
    height: 150,
    width: 150,
  },
  box3: {
    backgroundColor: "darkgreen",
    height: 100,
    width: 100,
    margin: 25,
    flexWrap: "wrap"
  },
  Box4: {
    backgroundColor: "blue",
    height: 150,
    width: 150,
  },
  box4: {
    backgroundColor: "darkblue",
    height: 100,
    width: 100,
    margin: 25,
    flexWrap: "wrap"
  },
  circle: {
    backgroundColor: "white",
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 14
  },
  row: {
    justifyContent: "center",
    flexDirection: "row",
  },
  centeralBox: {
    width: 75,
    height: 75,
    backgroundColor: 'pink'
  }

});