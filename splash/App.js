import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const bullet = useRef();
  const [bulletState, setBulletState] = useState("off");
  const [bulletheight, setbulletHeight]=useState(20);

  return (
    <View style={styles.Body}>
    <View style={styles.Canvass} 
    onTouchStart={(e)=>moveBullet(e)}
    >
    </View>
    <View style={styles.Magazine}>
    <View ref={bullet} onTouchStart = {()=>readyBullet()} onStartShouldSetResponder={() => true}
     style={bulletState === "on" ? styles.bulletReady : styles.bullet}></View>
    <View style={{ height:40,width:40,position:"absolute",backgroundColor:"red",border:"2solid black", top:bulletheight}}></View>
    <View style={styles.bullet}></View>
    <View style={styles.bullet}></View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bullet:{},
  bulletReady:{},
  magazine:{}
});
