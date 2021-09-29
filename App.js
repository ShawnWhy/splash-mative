import React, {useState, useRef, useEffect} from 'react';

import { Animated, StyleSheet, Text, View } from 'react-native';
import { useLayoutEffect } from 'react/cjs/react.development';

export default function App() {
  const [bulletheight, setbulletHeight]=useState("80%");
  const [bulletleft, setbulletLeft]=useState(155);
  const [bulletStrength, setBulletStrength]=useState(1);

  const bullet = useRef();
  const magazine = useRef();
  const [bulletDrag, setBulletDrag]=useState(
      "off"
  )

  //placement of the top of the magazine div
  const [magazineheight , setMagazineHeight]= useState();
  
  const calcMagazineTop = function(e){
    var top = e.nativeEvent.layout.y;
    setMagazineHeight(top);
    // console.log("top");
    // console.log(top)
  }

  const [bulletState , setBulletstate]= useState(
      "off"
    
  )
  const moveBullet=function(e){
      if(bulletDrag=="on"){
          // console.log("bullet")
          // console.log(bullet);
          var moveY = e.nativeEvent.touches[0].pageY;
          var moveX = e.nativeEvent.touches[0].pageX;
          if(moveY-40>magazineheight){
            // console.log(magazineheight)
            // console.log(moveY)
          setbulletHeight(moveY-40)
          setbulletLeft(moveX-40)
          }
      }
}

const shoot = useRef(
  new Animated.Value(0)
).current;

const shootbullet=function(){
  Animated.timing(
    shoot,{
      toValue:-800,
      duration:500,
      useNativeDriver:true,


    }).start();
}

const rotateBullet = useRef(
new Animated.Value(0)
).current;

const turnBullet = function(){
  console.log("turn")

  Animated.timing(
    rotateBullet,{
      toValue:4,
      duration:600,
      useNativeDriver:true,

    }
  ).start();
}

const [bulletTransform, setBulletTransform]=useState("");

const readyBullet = function(){
  turnBullet();
  setBulletstate("on");
  setBulletDrag("on")


}

const returnBullet = function(e){
  var moveY = e.nativeEvent.pageY;
  var moveX = e.nativeEvent.pageX;
  if(moveY-60<magazineheight){
    // console.log(magazineheight)
    // console.log(moveY)
  setbulletHeight(moveY-40)
  setbulletLeft(moveX-40)
  
  setBulletstate("off")
  setBulletDrag("off")
  setbulletHeight("80%")
  setbulletLeft(155)

}
else{shootbullet()}

}

 
  const [countNumber, setCount]=useState(0);
  // static propTypes = {
  //     randomNumberCount = PropTypes.string.isRequired,
  // };

 

  return (
    <View style={styles.Body}>
    <View style={styles.Canvass} 
    onTouchMove ={(e)=>{returnBullet(e)}}
    >
    </View>
    <Animated.View ref={bullet} onTouchStart = {()=>readyBullet()} onStartShouldSetResponder={() => true}
    style={bulletState === "on" ? [styles.bulletReady, {transform:[{ translateY: shoot},{rotate:rotateBullet}]}] : styles.bulletnot}  top={bulletheight} left={bulletleft} pointerEvents={bulletState === "on" ? "none":"auto"}></Animated.View>
    <View style={styles.Magazine} ref={magazine} onLayout={(e)=>calcMagazineTop(e)} onTouchMove={(e)=>moveBullet(e)} onTouchEndCapture={(e)=>{returnBullet(e)}}>
   
    <View style={[styles.bullet]}></View>
    <View style={styles.bullet}></View>
    </View>
    <View>
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
    bullet:{
      height:40,
      width:40,
      backgroundColor:"gray",
      borderWidth: 2,
      borderRadius:10,
      


      
  },
  bulletnot:{
    height:40,
    width:40,
    position:"absolute",

    backgroundColor:"gray",
    borderWidth: 2,
    borderRadius:10,
    zIndex:3


    
},
  bulletReady:{
      height:60,
      width:60,
      position:"absolute",
      backgroundColor:"blue",
      borderWidth: 2,
      borderColor:"black",
      borderRadius:10,
      zIndex:3,
      
      
      
      

      
      
  },
  Magazine:{
     
      position:"absolute",
      top:"80%",
      backgroundColor:"lightgrey",
      height:"20%",
      width:"100%",
      
      flexDirection:"row",
     

  },
  Canvass:{
      
      height:"90%",
      backgroundColor:"white"
  },
  Body:{
      height:"100%",
      flexDirection:"column"
  }
});