import React, {useState, useRef, useEffect} from 'react';

import { Animated, StyleSheet, Text, View, Button } from 'react-native';
import { useLayoutEffect } from 'react/cjs/react.development';

export default function App() {

  const [bulletPowerArray, setbulletPowerArray]= useState(
    {
      0:1,
      2:1,
      3:1,
      4:1,
      5:1,
      6:1,
      7:1,
      8:1,
      9:1,
      10:1
    }


  )

  const [bulletLeftArray, setBulletLeftArray]= useState(  {
    0:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0,
    10:0
  })


  const [splatterColorArray, setSplatterColorArray]=useState(
    {
      0:'',
      2:'',
      3:'',
      4:'',
      5:'',
      6:'',
      7:'',
      8:'',
      9:'',
      10:''
    }

  )
const [smallSplatters, setSmallSplatters]=useState({

  0:{
    0:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'1deg',

    },
    1:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'20deg',

    },
 
    2:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'44deg',

    },
 
    3:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'62deg',

    },
 
    4:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'70deg',

    },
 
    5:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'88deg',

    },
 
    6:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'110deg',


    },
 
    7:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'136deg',

    

    },
    8:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'160deg',


    },
    9:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'180deg',


    },
    10:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'145deg',


    },
  
  },
  1:{
    0:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'18deg',


    },
    1:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'26deg',


    },
 
    2:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'44deg',

    },
 
    3:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'62deg',

    },
 
    4:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'70deg',

    },
 
    5:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'88deg',

    },
 
    6:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'110deg',


    },
 
    7:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'136deg',

    

    },
    8:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'160deg',


    },
    9:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'180deg',


    },
    10:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'145deg',


    },
  
  },
  2:{
    0:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'18deg',

    },
    1:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'24deg',

    },
 
    2:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'44deg',

    },
 
    3:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'62deg',

    },
 
    4:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'70deg',

    },
 
    5:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'88deg',

    },
 
    6:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'110deg',


    },
 
    7:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'136deg',

    

    },
    8:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'160deg',


    },
    9:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'180deg',


    },
    10:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'145deg',


    },
  
  },
  3:{
    0:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'18deg',

    },
    1:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'24deg',

    },
 
    2:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'44deg',

    },
 
    3:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'62deg',

    },
 
    4:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'70deg',

    },
 
    5:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'88deg',

    },
 
    6:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'110deg',


    },
 
    7:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'136deg',

    

    },
    8:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'160deg',


    },
    9:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'180deg',


    },
    10:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'145deg',


    },
  
  },
  4:{
    0:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'18deg',

    },
    1:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'24deg',

    },
 
    2:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'44deg',

    },
 
    3:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'62deg',

    },
 
    4:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'70deg',

    },
 
    5:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'88deg',

    },
 
    6:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'110deg',


    },
 
    7:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'136deg',

    

    },
    8:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'160deg',


    },
    9:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'180deg',


    },
    10:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'145deg',


    },
  
  },
  5:{
    0:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'18deg',

    },
    1:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'24deg',

    },
 
    2:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'44deg',

    },
 
    3:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'62deg',

    },
 
    4:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'70deg',

    },
 
    5:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'88deg',

    },
 
    6:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'110deg',


    },
 
    7:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'136deg',

    

    },
    8:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'160deg',


    },
    9:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'180deg',


    },
    10:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'145deg',


    },
  
  },
  6:{
    0:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'18deg',

    },
    1:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'24deg',

    },
 
    2:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'44deg',

    },
 
    3:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'62deg',

    },
 
    4:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'70deg',

    },
 
    5:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'88deg',

    },
 
    6:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'110deg',


    },
 
    7:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'136deg',

    

    },
    8:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'160deg',


    },
    9:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'180deg',


    },
    10:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'145deg',


    },
  
  },
  7:{
    0:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'18deg',

    },
    1:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'24deg',

    },
 
    2:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'44deg',

    },
 
    3:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'62deg',

    },
 
    4:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'70deg',

    },
 
    5:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'88deg',

    },
 
    6:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'110deg',


    },
 
    7:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'136deg',

    

    },
    8:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'160deg',


    },
    9:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'180deg',


    },
    10:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'145deg',


    },
  
  },
  8:{
    0:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'18deg',

    },
    1:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'24deg',

    },
 
    2:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'44deg',

    },
 
    3:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'62deg',

    },
 
    4:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'70deg',

    },
 
    5:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'88deg',

    },
 
    6:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'110deg',


    },
 
    7:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'136deg',

    

    },
    8:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'160deg',


    },
    9:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'180deg',


    },
    10:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'145deg',


    },
  
  },
  9:{
    0:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'18deg',

    },
    1:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'24deg',

    },
 
    2:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'44deg',

    },
 
    3:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'62deg',

    },
 
    4:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'70deg',

    },
 
    5:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'88deg',

    },
 
    6:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'110deg',


    },
 
    7:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'136deg',

    

    },
    8:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'160deg',


    },
    9:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'180deg',


    },
    10:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'145deg',


    },
  
  },
  10:{
    0:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'18deg',

    },
    1:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
        direction:'24deg',

    },
 
    2:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'44deg',

    },
 
    3:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'62deg',

    },
 
    4:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'70deg',

    },
 
    5:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,

     direction:'88deg',

    },
 
    6:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'110deg',


    },
 
    7:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'136deg',

    

    },
    8:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'160deg',


    },
    9:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'180deg',


    },
    10:{
      size:1,
      power:useRef(
        new Animated.Value(0)
        ).current,
     direction:'145deg',


    },
  
  },
})

//this returns the transforms of the small splatters
const returnTransdforms=function(){
  for(i=0;i<11;i++){
         Animated.timing(
        bigSplatter[i],{
          toValue:1,
          duration:20,
          useNativeDriver:true, 
    
    
        }).start()
        for(j=0;j<11;j++){
          Animated.timing(
            smallSplatters[i][j]["power"],{
              toValue:0,
              duration:20,
              useNativeDriver:true,
            }
          ).start()
     }   
  }
}

//this mixes up the position and size of the splatters
const mix = function(){
  for(i=0;i<countNumber+1;i++){
    // setBulletLeftArray(...bulletLeftArray, ) bulletLeftArray[i]
    var rand = Math.random()*4+1
    var rand3 = Math.random()*4+1
    var rand4 = Math.random()*4+1
    Animated.timing(
      bigSplatter[i],{
        toValue:rand,
        duration:200,
        useNativeDriver:true, 
  
  
      }).start()
      Animated.timing(
        splatterTransformLeft[i],{
          toValue:rand4*100,
          duration:200,
          useNativeDriver:true, 
    
    
        }).start()
        Animated.timing(
          splatterTransformTop[i],{
            toValue:rand3*100,
            duration:200,
            useNativeDriver:true, 
      
      
          }).start()


      for(j=0;j<11;j++){
        var rand2 = Math.random()*4+1
        Animated.timing(
          smallSplatters[i][j]["power"],{
            toValue:rand2*100,
            duration:200,
            useNativeDriver:true,
          }
        ).start()
        
        }
      }

}

//this is suppose to clear the screen
const clear = function(){
setCount(0)
returnTransdforms();
console.log(splatterColorArray);

var tempsplattercolors = splatterColorArray;
for(i=0;i<11;i++){
  tempsplattercolors[i]='transparent';

}
setSplatterColorArray(
  
tempsplattercolors
  )

setBulletLeftArray(
  {
    0:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0,
    10:0
  


})

setbulletPowerArray(
  {
    0:1,
    2:1,
    3:1,
    4:1,
    5:1,
    6:1,
    7:1,
    8:1,
    9:1,
    10:1
  }
)

setBulletLeftArray({
  0:0,
  2:0,
  3:0,
  4:0,
  5:0,
  6:0,
  7:0,
  8:0,
  9:0,
  10:0


})


}
  const [restbulletColor, setrestBulletColor]=useState("")
  const [bulletColor, setBulletColor]=useState("")
  const [fakebullet, setFakebullet]=useState("on")
  const [bulletheight, setbulletHeight]=useState("80%");
  const [bulletleft, setbulletLeft]=useState(155);
  const [bulletStrength, setBulletStrength]=useState(.5);

  const bullet = useRef();
  const magazine = useRef();
  const [bulletDrag, setBulletDrag]=useState(
      "off"
  )


  //automatically return bulltet in original location
  //expand bigsplatter
  const autoBulletReady = function(bulletPower){
    temptpowerArray = bulletPowerArray;
    temptpowerArray[countNumber]= bulletPower;
    setbulletPowerArray(temptpowerArray);
    scatterSplatterSizes();

    setBulletstate("off");
    Animated.parallel([
      Animated.timing(
        bulletAutoReady,{
          toValue:100,
          duration:400,
          useNativeDriver:true, 
    
    
        }),
      Animated.timing(
        bigSplatter[countNumber],{

          toValue:4/bulletPowerArray[countNumber],
          duration:500,
          useNativeDriver:true
        }
      )
      
    ])
  .start();
    

  }

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
};



const bigSplatter = {
  0:useRef(
new Animated.Value(1)
).current,
1:useRef(
  new Animated.Value(1)
  ).current,
2:useRef(
    new Animated.Value(1)
    ).current,
3:useRef(
    new Animated.Value(1)
    ).current,
4:useRef(
    new Animated.Value(1)
    ).current,
5:useRef(
    new Animated.Value(1)
    ).current,
6:useRef(
    new Animated.Value(1)
    ).current,
7:useRef(
    new Animated.Value(1)
    ).current,
8:useRef(
    new Animated.Value(1)
    ).current,
9:useRef(
    new Animated.Value(1)
    ).current,
10:useRef(
    new Animated.Value(1)
    ).current,
}

// const expandSplatter = function(){
//   Animated.spring(
//     bigSplatter,{
//       toValue:4,
//       duration:500,
//       useNativeDriver:true,

//     }).start()
// }

// const expandSplatter = function(){
//   console.log("big splatter")
//   console.log(bigSplatter[countNumber]);
//   Animated.timing(
//     bigSplatter[countNumber],{
//       toValue:4,
//       duration:500,
//       useNativeDriver:true,
//     }
//   ).start();
//   console.log("start")
//   console.log(bigSplatter);

// }

const scatterSplatters = function(){
   for(i=0; i<11;i++){
     randPower = Math.random()*4+1
    // console.log(smallSplatters[countNumber][i])
    Animated.timing(
      smallSplatters[countNumber][i]["power"],{
        toValue:randPower*40,
        duration:300,
        useNativeDriver:true,
  
  
      }).start();

   }
}
const scatterSplatterSizes = function(){
  for(i=0; i<11;i++){
    randsize = Math.random()*2+1;
    tempSizes = smallSplatters;
    tempSizes[countNumber][i]["size"]=randsize;
    setSmallSplatters(tempSizes);

  }
}

const shoot = useRef(
  new Animated.Value(0)
).current;

const bulletAutoReady = useRef(
  new Animated.Value(0)
).current;

const shootbullet=function(bulletPower){
  Animated.timing(
    shoot,{
      toValue:-800,
      duration:bulletPower*1000,
      useNativeDriver:true,


    }).start();

    setTimeout(() => {
    console.log("bulletPower")

    // console.log(bulletPower)
    autoBulletReady(bulletPower);

      
    tempColorArray= splatterColorArray
    tempColorArray[countNumber]=restbulletColor;
    setSplatterColorArray(tempColorArray)
    var tempbulletLeftArray = bulletLeftArray;
    tempbulletLeftArray[countNumber]= bulletleft
    setBulletLeftArray[tempbulletLeftArray]
    newcount = countNumber+1;
    setCount(newcount);
    scatterSplatters();
      // expandSplatter();
      
    }, bulletPower*1000);
}

const rotateBullet = useRef(
new Animated.Value(0)
).current;

const turnBullet = function(){
  console.log("turn")

  Animated.spring(
    rotateBullet,{
      toValue:4,
      duration:600,
      useNativeDriver:true,

    }
  ).start();
}

const [splatterTransformLeft, setSplatterTransformLeft]=useState(
  {
    0:useRef(
  new Animated.Value(1)
  ).current,
  1:useRef(
    new Animated.Value(1)
    ).current,
  2:useRef(
      new Animated.Value(1)
      ).current,
  3:useRef(
      new Animated.Value(1)
      ).current,
  4:useRef(
      new Animated.Value(1)
      ).current,
  5:useRef(
      new Animated.Value(1)
      ).current,
  6:useRef(
      new Animated.Value(1)
      ).current,
  7:useRef(
      new Animated.Value(1)
      ).current,
  8:useRef(
      new Animated.Value(1)
      ).current,
  9:useRef(
      new Animated.Value(1)
      ).current,
  10:useRef(
      new Animated.Value(1)
      ).current,
  }
  
)

const [splatterTransformTop, setSplatterTransformTop]=useState(
  {
    0:useRef(
  new Animated.Value(1)
  ).current,
  1:useRef(
    new Animated.Value(1)
    ).current,
  2:useRef(
      new Animated.Value(1)
      ).current,
  3:useRef(
      new Animated.Value(1)
      ).current,
  4:useRef(
      new Animated.Value(1)
      ).current,
  5:useRef(
      new Animated.Value(1)
      ).current,
  6:useRef(
      new Animated.Value(1)
      ).current,
  7:useRef(
      new Animated.Value(1)
      ).current,
  8:useRef(
      new Animated.Value(1)
      ).current,
  9:useRef(
      new Animated.Value(1)
      ).current,
  10:useRef(
      new Animated.Value(1)
      ).current,
  }
  
)

const readyBullet = function(){
  if(countNumber<11){
  turnBullet();
  setBulletstate("on");
  setBulletDrag("on")
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];}

    setrestBulletColor(color)

  
    }

    else{
      clear();
      console.log(splatterColorArray)
    }

}

//wether to shoot it or return
const returnBullet = function(e){
  var moveY = e.nativeEvent.pageY;
  var moveX = e.nativeEvent.pageX;
  //setting bullet shoot speed
  var bulletPower= 1; 
  bulletPower= 1-(moveY-magazineheight)/200
  console.log(magazineheight)
  console.log(moveY) 
  if(moveY-60<magazineheight){
   
  setbulletHeight(moveY-40)
  setbulletLeft(moveX-40)
  
  setBulletstate("off")
  setBulletDrag("off")
  setbulletHeight("80%")
  setbulletLeft(155)

}
else{
    // console.log(bulletStrength)
    shootbullet(bulletPower)
    
  
}

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
    style={bulletState === "on" ? [styles.bulletReady, {transform:[{ translateY: shoot},{rotate:rotateBullet},]},{backgroundColor:restbulletColor}] : [styles.bulletnot, {transform:[{translateX:bulletAutoReady}]}]}  top={bulletheight} left={bulletleft} pointerEvents={bulletState === "on" ? "none":"auto"}></Animated.View>
    <View style={styles.Magazine} ref={magazine} onLayout={(e)=>calcMagazineTop(e)} onTouchMove={(e)=>moveBullet(e)} onTouchEndCapture={(e)=>{returnBullet(e)}}>
   
    <View style={fakebullet==="on"? [styles.bullet, {display:"auto"}] : [styles.bullet, {display:"none"}]}></View>
    <View style={styles.bullet}></View>
    </View>
    
    <Animated.View style={[styles.largeSplatter, 
    {
      transform:[{scale: bigSplatter[0]},{translateX:splatterTransformLeft[0]},{translateY:splatterTransformTop[0]}],
      
    backgroundColor:splatterColorArray[0],
    left:bulletLeftArray[0]

  }
    ]} >
   </Animated.View>

   <Animated.View style={[styles.smallSplatter,{
   transform:[
     {scale:smallSplatters[0][0]['size']},
   
   {rotate:smallSplatters[0][0]['direction']},
   {translateY:smallSplatters[0][0]['power']},
  ]

   }, {backgroundColor:splatterColorArray[0]},{left:bulletLeftArray[0]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[0][1]['size']},{rotate:smallSplatters[0][1]['direction']},{translateY:smallSplatters[0][1]['power']}, ],

   }, {backgroundColor:splatterColorArray[0]},{left:bulletLeftArray[0]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[0][2]['size']},{rotate:smallSplatters[0][2]['direction']},{translateY:smallSplatters[0][2]['power']}, ],

   }, {backgroundColor:splatterColorArray[0]},{left:bulletLeftArray[0]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[0][3]['size']},{rotate:smallSplatters[0][3]['direction']},{translateY:smallSplatters[0][3]['power']}, ],

   }, {backgroundColor:splatterColorArray[0]},{left:bulletLeftArray[0]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[0][4]['size']},{rotate:smallSplatters[0][4]['direction']},{translateY:smallSplatters[0][4]['power']}, ],

   }, {backgroundColor:splatterColorArray[0]},{left:bulletLeftArray[0]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[0][5]['size']},{rotate:smallSplatters[0][5]['direction']},{translateY:smallSplatters[0][5]['power']}, ],

   }, {backgroundColor:splatterColorArray[0]},{left:bulletLeftArray[0]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[0][6]['size']},{rotate:smallSplatters[0][6]['direction']},{translateY:smallSplatters[0][6]['power']}, ],

   }, {backgroundColor:splatterColorArray[0]},{left:bulletLeftArray[0]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[0][7]['size']},{rotate:smallSplatters[0][7]['direction']}, {translateY:smallSplatters[0][7]['power']},],

   }, {backgroundColor:splatterColorArray[0]},{left:bulletLeftArray[0]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[0][8]['size']},{rotate:smallSplatters[0][8]['direction']},{translateY:smallSplatters[0][8]['power']}, ],

   }, {backgroundColor:splatterColorArray[0]},{left:bulletLeftArray[0]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[0][9]['size']},{rotate:smallSplatters[0][9]['direction']},{translateY:smallSplatters[0][9]['power']} ],
   
   
  }, {backgroundColor:splatterColorArray[0]},{left:bulletLeftArray[0]}
]}>

</Animated.View>
<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[0][10]['size']},{rotate:smallSplatters[0][10]['direction']},{translateY:smallSplatters[0][10]['power']} ],

   }, {backgroundColor:splatterColorArray[0]},{left:bulletLeftArray[0]}
]}>

</Animated.View>





   <Animated.View style={[styles.largeSplatter, 
    {
      transform:[{scale: bigSplatter[1]},{translateX:splatterTransformLeft[1]},{translateY:splatterTransformTop[1]}],
      
    backgroundColor:splatterColorArray[1],
    left:bulletLeftArray[1]
  }
    ]} >
   </Animated.View>


   <Animated.View style={[styles.smallSplatter,{
   transform:[
     {scale:smallSplatters[1][0]['size']},
   
   {rotate:smallSplatters[1][0]['direction']},
   {translateY:smallSplatters[1][0]['power']},
  ]

   }, {backgroundColor:splatterColorArray[1]},{left:bulletLeftArray[1]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[1][1]['size']},{rotate:smallSplatters[1][1]['direction']},{translateY:smallSplatters[1][1]['power']}, ],

   }, {backgroundColor:splatterColorArray[1]},{left:bulletLeftArray[1]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[1][2]['size']},{rotate:smallSplatters[1][2]['direction']},{translateY:smallSplatters[1][2]['power']}, ],

   }, {backgroundColor:splatterColorArray[1]},{left:bulletLeftArray[1]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[1][3]['size']},{rotate:smallSplatters[1][3]['direction']},{translateY:smallSplatters[1][3]['power']}, ],

   }, {backgroundColor:splatterColorArray[1]},{left:bulletLeftArray[1 ]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[1][4]['size']},{rotate:smallSplatters[1][4]['direction']},{translateY:smallSplatters[1][4]['power']}, ],

   }, {backgroundColor:splatterColorArray[1]},{left:bulletLeftArray[1]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[1][5]['size']},{rotate:smallSplatters[1][5]['direction']},{translateY:smallSplatters[1][5]['power']}, ],

   }, {backgroundColor:splatterColorArray[1]},{left:bulletLeftArray[1]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[1][6]['size']},{rotate:smallSplatters[1][6]['direction']},{translateY:smallSplatters[1][6]['power']}, ],

   }, {backgroundColor:splatterColorArray[1]},{left:bulletLeftArray[1]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[1][7]['size']},{rotate:smallSplatters[1][7]['direction']}, {translateY:smallSplatters[1][7]['power']},],

   }, {backgroundColor:splatterColorArray[1]},{left:bulletLeftArray[1]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[1][8]['size']},{rotate:smallSplatters[1][8]['direction']},{translateY:smallSplatters[1][8]['power']}, ],

   }, {backgroundColor:splatterColorArray[1]},{left:bulletLeftArray[1]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[1][9]['size']},{rotate:smallSplatters[1][9]['direction']},{translateY:smallSplatters[1][9]['power']} ],
   
   
  }, {backgroundColor:splatterColorArray[1]},{left:bulletLeftArray[1]}
]}>

</Animated.View>
<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[1][10]['size']},{rotate:smallSplatters[1][10]['direction']},{translateY:smallSplatters[1][10]['power']} ],

   }, {backgroundColor:splatterColorArray[1]},{left:bulletLeftArray[1]}
]}>

</Animated.View>







   <Animated.View style={[styles.largeSplatter, 
    {
      transform:[{scale: bigSplatter[2]},{translateX:splatterTransformLeft[2]},{translateY:splatterTransformTop[2]}],
      
    backgroundColor:splatterColorArray[2],
    left:bulletLeftArray[2]
  }
    ]} >
   </Animated.View>

   <Animated.View style={[styles.smallSplatter,{
   transform:[
     {scale:smallSplatters[2][0]['size']},
   
   {rotate:smallSplatters[2][0]['direction']},
   {translateY:smallSplatters[2][0]['power']},
  ]

   }, {backgroundColor:splatterColorArray[2]},{left:bulletLeftArray[2]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[2][1]['size']},{rotate:smallSplatters[2][1]['direction']},{translateY:smallSplatters[2][1]['power']}, ],

   }, {backgroundColor:splatterColorArray[2]},{left:bulletLeftArray[2]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[2][2]['size']},{rotate:smallSplatters[2][2]['direction']},{translateY:smallSplatters[2][2]['power']}, ],

   }, {backgroundColor:splatterColorArray[2]},{left:bulletLeftArray[2]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[2][3]['size']},{rotate:smallSplatters[2][3]['direction']},{translateY:smallSplatters[2][3]['power']}, ],

   }, {backgroundColor:splatterColorArray[2]},{left:bulletLeftArray[2]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[2][4]['size']},{rotate:smallSplatters[2][4]['direction']},{translateY:smallSplatters[2][4]['power']}, ],

   }, {backgroundColor:splatterColorArray[2]},{left:bulletLeftArray[2]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[2][5]['size']},{rotate:smallSplatters[2][5]['direction']},{translateY:smallSplatters[2][5]['power']}, ],

   }, {backgroundColor:splatterColorArray[2]},{left:bulletLeftArray[2]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[2][6]['size']},{rotate:smallSplatters[2][6]['direction']},{translateY:smallSplatters[2][6]['power']}, ],

   }, {backgroundColor:splatterColorArray[2]},{left:bulletLeftArray[2]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[2][7]['size']},{rotate:smallSplatters[2][7]['direction']}, {translateY:smallSplatters[2][7]['power']},],

   }, {backgroundColor:splatterColorArray[2]},{left:bulletLeftArray[2]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[2][8]['size']},{rotate:smallSplatters[2][8]['direction']},{translateY:smallSplatters[2][8]['power']}, ],

   }, {backgroundColor:splatterColorArray[2]},{left:bulletLeftArray[2]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[2][9]['size']},{rotate:smallSplatters[2][9]['direction']},{translateY:smallSplatters[2][9]['power']} ],
   
   
  }, {backgroundColor:splatterColorArray[2]},{left:bulletLeftArray[2]}
]}>

</Animated.View>
<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[2][10]['size']},{rotate:smallSplatters[2][10]['direction']},{translateY:smallSplatters[2][10]['power']} ],

   }, {backgroundColor:splatterColorArray[2]},{left:bulletLeftArray[2]}
]}>

</Animated.View>






   <Animated.View style={[styles.largeSplatter, 
    {
      transform:[{scale: bigSplatter[3]},{translateX:splatterTransformLeft[3]},{translateY:splatterTransformTop[3]}],
      
    backgroundColor:splatterColorArray[3],
    left:bulletLeftArray[3]
  }
    ]} >
   </Animated.View>
   <Animated.View style={[styles.smallSplatter,{
   transform:[
     {scale:smallSplatters[3][0]['size']},
   
   {rotate:smallSplatters[3][0]['direction']},
   {translateY:smallSplatters[3][0]['power']},
  ]

   }, {backgroundColor:splatterColorArray[3]},{left:bulletLeftArray[3]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[3][1]['size']},{rotate:smallSplatters[3][1]['direction']},{translateY:smallSplatters[3][1]['power']}, ],

   }, {backgroundColor:splatterColorArray[3]},{left:bulletLeftArray[3]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[3][2]['size']},{rotate:smallSplatters[3][2]['direction']},{translateY:smallSplatters[3][2]['power']}, ],

   }, {backgroundColor:splatterColorArray[3]},{left:bulletLeftArray[3]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[3][3]['size']},{rotate:smallSplatters[3][3]['direction']},{translateY:smallSplatters[3][3]['power']}, ],

   }, {backgroundColor:splatterColorArray[3]},{left:bulletLeftArray[3]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[3][4]['size']},{rotate:smallSplatters[3][4]['direction']},{translateY:smallSplatters[3][4]['power']}, ],

   }, {backgroundColor:splatterColorArray[3]},{left:bulletLeftArray[3]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[3][5]['size']},{rotate:smallSplatters[3][5]['direction']},{translateY:smallSplatters[3][5]['power']}, ],

   }, {backgroundColor:splatterColorArray[3]},{left:bulletLeftArray[3]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[3][6]['size']},{rotate:smallSplatters[3][6]['direction']},{translateY:smallSplatters[3][6]['power']}, ],

   }, {backgroundColor:splatterColorArray[3]},{left:bulletLeftArray[3]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[3][7]['size']},{rotate:smallSplatters[3][7]['direction']}, {translateY:smallSplatters[3][7]['power']},],

   }, {backgroundColor:splatterColorArray[3]},{left:bulletLeftArray[3]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[3][8]['size']},{rotate:smallSplatters[3][8]['direction']},{translateY:smallSplatters[3][8]['power']}, ],

   }, {backgroundColor:splatterColorArray[3]},{left:bulletLeftArray[3]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[3][9]['size']},{rotate:smallSplatters[3][9]['direction']},{translateY:smallSplatters[3][9]['power']} ],
   
   
  }, {backgroundColor:splatterColorArray[3]},{left:bulletLeftArray[3]}
]}>

</Animated.View>
<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[3][10]['size']},{rotate:smallSplatters[3][10]['direction']},{translateY:smallSplatters[3][10]['power']} ],

   }, {backgroundColor:splatterColorArray[3]},{left:bulletLeftArray[3]}
]}>

</Animated.View>



   <Animated.View style={[styles.largeSplatter, 
    {
      transform:[{scale: bigSplatter[4]},{translateX:splatterTransformLeft[4]},{translateY:splatterTransformTop[4]}],
      
    backgroundColor:splatterColorArray[4],
    left:bulletLeftArray[4]
  }
    ]} >
   </Animated.View>
   <Animated.View style={[styles.smallSplatter,{
   transform:[
     {scale:smallSplatters[4][0]['size']},
   
   {rotate:smallSplatters[4][0]['direction']},
   {translateY:smallSplatters[4][0]['power']},
  ]

   }, {backgroundColor:splatterColorArray[4]},{left:bulletLeftArray[4]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[4][1]['size']},{rotate:smallSplatters[4][1]['direction']},{translateY:smallSplatters[4][1]['power']}, ],

   }, {backgroundColor:splatterColorArray[4]},{left:bulletLeftArray[4]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[4][2]['size']},{rotate:smallSplatters[4][2]['direction']},{translateY:smallSplatters[4][2]['power']}, ],

   }, {backgroundColor:splatterColorArray[4]},{left:bulletLeftArray[4]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[4][3]['size']},{rotate:smallSplatters[4][3]['direction']},{translateY:smallSplatters[4][3]['power']}, ],

   }, {backgroundColor:splatterColorArray[4]},{left:bulletLeftArray[4]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[4][4]['size']},{rotate:smallSplatters[4][4]['direction']},{translateY:smallSplatters[4][4]['power']}, ],

   }, {backgroundColor:splatterColorArray[4]},{left:bulletLeftArray[4]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[4][5]['size']},{rotate:smallSplatters[4][5]['direction']},{translateY:smallSplatters[4][5]['power']}, ],

   }, {backgroundColor:splatterColorArray[4]},{left:bulletLeftArray[4]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[4][6]['size']},{rotate:smallSplatters[4][6]['direction']},{translateY:smallSplatters[4][6]['power']}, ],

   }, {backgroundColor:splatterColorArray[4]},{left:bulletLeftArray[4]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[4][7]['size']},{rotate:smallSplatters[4][7]['direction']}, {translateY:smallSplatters[4][7]['power']},],

   }, {backgroundColor:splatterColorArray[4]},{left:bulletLeftArray[4]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[4][8]['size']},{rotate:smallSplatters[4][8]['direction']},{translateY:smallSplatters[4][8]['power']}, ],

   }, {backgroundColor:splatterColorArray[4]},{left:bulletLeftArray[4]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[4][9]['size']},{rotate:smallSplatters[4][9]['direction']},{translateY:smallSplatters[4][9]['power']} ],
   
   
  }, {backgroundColor:splatterColorArray[4]},{left:bulletLeftArray[4]}
]}>

</Animated.View>
<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[4][10]['size']},{rotate:smallSplatters[4][10]['direction']},{translateY:smallSplatters[4][10]['power']} ],

   }, {backgroundColor:splatterColorArray[4]},{left:bulletLeftArray[4]}
]}>

</Animated.View>




   <Animated.View style={[styles.largeSplatter, 
    {
      transform:[{scale: bigSplatter[5]},{translateX:splatterTransformLeft[5]},{translateY:splatterTransformTop[5]}],
      
    backgroundColor:splatterColorArray[5],
    left:bulletLeftArray[5]
  }
    ]} >
   </Animated.View>
   <Animated.View style={[styles.smallSplatter,{
   transform:[
     {scale:smallSplatters[5][0]['size']},
   
   {rotate:smallSplatters[5][0]['direction']},
   {translateY:smallSplatters[5][0]['power']},
  ]

   }, {backgroundColor:splatterColorArray[5]},{left:bulletLeftArray[5]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[5][1]['size']},{rotate:smallSplatters[5][1]['direction']},{translateY:smallSplatters[5][1]['power']}, ],

   }, {backgroundColor:splatterColorArray[5]},{left:bulletLeftArray[5]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[5][2]['size']},{rotate:smallSplatters[5][2]['direction']},{translateY:smallSplatters[5][2]['power']}, ],

   }, {backgroundColor:splatterColorArray[5]},{left:bulletLeftArray[5]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[5][3]['size']},{rotate:smallSplatters[5][3]['direction']},{translateY:smallSplatters[5][3]['power']}, ],

   }, {backgroundColor:splatterColorArray[5]},{left:bulletLeftArray[5]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[5][4]['size']},{rotate:smallSplatters[5][4]['direction']},{translateY:smallSplatters[5][4]['power']}, ],

   }, {backgroundColor:splatterColorArray[5]},{left:bulletLeftArray[5]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[5][5]['size']},{rotate:smallSplatters[5][5]['direction']},{translateY:smallSplatters[5][5]['power']}, ],

   }, {backgroundColor:splatterColorArray[5]},{left:bulletLeftArray[5]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[5][6]['size']},{rotate:smallSplatters[5][6]['direction']},{translateY:smallSplatters[5][6]['power']}, ],

   }, {backgroundColor:splatterColorArray[5]},{left:bulletLeftArray[5]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[5][7]['size']},{rotate:smallSplatters[5][7]['direction']}, {translateY:smallSplatters[5][7]['power']},],

   }, {backgroundColor:splatterColorArray[5]},{left:bulletLeftArray[5]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[5][8]['size']},{rotate:smallSplatters[5][8]['direction']},{translateY:smallSplatters[5][8]['power']}, ],

   }, {backgroundColor:splatterColorArray[5]},{left:bulletLeftArray[5]}
]}>

</Animated.View>

<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[5][9]['size']},{rotate:smallSplatters[5][9]['direction']},{translateY:smallSplatters[5][9]['power']} ],
   
   
  }, {backgroundColor:splatterColorArray[5]},{left:bulletLeftArray[5]}
]}>

</Animated.View>
<Animated.View style={[styles.smallSplatter,{
   transform:[{scale:smallSplatters[5][10]['size']},{rotate:smallSplatters[5][10]['direction']},{translateY:smallSplatters[5][10]['power']} ],

   }, {backgroundColor:splatterColorArray[5]},{left:bulletLeftArray[5]}
]}>

</Animated.View>





   <Animated.View style={[styles.largeSplatter, 
    {
      transform:[{scale: bigSplatter[6]},{translateX:splatterTransformLeft[6]},{translateY:splatterTransformTop[6]}],
      
    backgroundColor:splatterColorArray[6],
    left:bulletLeftArray[6]
  }
    ]} >
   </Animated.View>
   <Animated.View style={[styles.smallSplatter,{
    transform:[
      {scale:smallSplatters[6][0]['size']},
    
    {rotate:smallSplatters[6][0]['direction']},
    {translateY:smallSplatters[6][0]['power']},
   ]
 
    }, {backgroundColor:splatterColorArray[6]},{left:bulletLeftArray[6]}
 ]}>
 
 </Animated.View>
 
 <Animated.View style={[styles.smallSplatter,{
    transform:[{scale:smallSplatters[6][1]['size']},{rotate:smallSplatters[6][1]['direction']},{translateY:smallSplatters[6][1]['power']}, ],
 
  }, {backgroundColor:splatterColorArray[6]},{left:bulletLeftArray[6]}
  ]}>
 
 </Animated.View>
 
 <Animated.View style={[styles.smallSplatter,{
    transform:[{scale:smallSplatters[6][2]['size']},{rotate:smallSplatters[6][2]['direction']},{translateY:smallSplatters[6][2]['power']}, ],
 
    }, {backgroundColor:splatterColorArray[6]},{left:bulletLeftArray[6]}
 ]}>
 
 </Animated.View>
 
 <Animated.View style={[styles.smallSplatter,{
    transform:[{scale:smallSplatters[6][3]['size']},{rotate:smallSplatters[6][3]['direction']},{translateY:smallSplatters[6][3]['power']}, ],
 
    }, {backgroundColor:splatterColorArray[6]},{left:bulletLeftArray[6]}
 ]}>
 
 </Animated.View>
 
 <Animated.View style={[styles.smallSplatter,{
    transform:[{scale:smallSplatters[6][4]['size']},{rotate:smallSplatters[6][4]['direction']},{translateY:smallSplatters[6][4]['power']}, ],
 
    }, {backgroundColor:splatterColorArray[6]},{left:bulletLeftArray[6]}
 ]}>
 
 </Animated.View>
 
 <Animated.View style={[styles.smallSplatter,{
    transform:[{scale:smallSplatters[6][5]['size']},{rotate:smallSplatters[6][5]['direction']},{translateY:smallSplatters[6][5]['power']}, ],
 
    }, {backgroundColor:splatterColorArray[6]},{left:bulletLeftArray[6]}
 ]}>
 
 </Animated.View>
 
 <Animated.View style={[styles.smallSplatter,{
    transform:[{scale:smallSplatters[6][6]['size']},{rotate:smallSplatters[6][6]['direction']},{translateY:smallSplatters[6][6]['power']}, ],
 
    }, {backgroundColor:splatterColorArray[6]},{left:bulletLeftArray[6]}
 ]}>
 
 </Animated.View>
 
 <Animated.View style={[styles.smallSplatter,{
    transform:[{scale:smallSplatters[6][7]['size']},{rotate:smallSplatters[6][7]['direction']}, {translateY:smallSplatters[6][7]['power']},],
 
    }, {backgroundColor:splatterColorArray[6]},{left:bulletLeftArray[6]}
 ]}>
 
 </Animated.View>
 
 <Animated.View style={[styles.smallSplatter,{
    transform:[{scale:smallSplatters[6][8]['size']},{rotate:smallSplatters[6][8]['direction']},{translateY:smallSplatters[6][8]['power']}, ],
 
    }, {backgroundColor:splatterColorArray[6]},{left:bulletLeftArray[6]}
 ]}>
 
 </Animated.View>
 
 <Animated.View style={[styles.smallSplatter,{
    transform:[{scale:smallSplatters[6][9]['size']},{rotate:smallSplatters[6][9]['direction']},{translateY:smallSplatters[6][9]['power']} ],
    
    
   }, {backgroundColor:splatterColorArray[6]},{left:bulletLeftArray[6]}
 ]}>
 
 </Animated.View>
 <Animated.View style={[styles.smallSplatter,{
    transform:[{scale:smallSplatters[6][10]['size']},{rotate:smallSplatters[6][10]['direction']},{translateY:smallSplatters[6][10]['power']} ],
 
    }, {backgroundColor:splatterColorArray[6]},{left:bulletLeftArray[6]}
 ]}>
 
 </Animated.View>
 
 


   <Animated.View style={[styles.largeSplatter, 
    {
      transform:[{scale: bigSplatter[7]},{translateX:splatterTransformLeft[7]},{translateY:splatterTransformTop[7]}],
      
    backgroundColor:splatterColorArray[7],
    left:bulletLeftArray[7]
  }
    ]} >
   </Animated.View>
      <Animated.View style={[styles.smallSplatter,{
        transform:[
          {scale:smallSplatters[7][0]['size']},
        
        {rotate:smallSplatters[7][0]['direction']},
        {translateY:smallSplatters[7][0]['power']},
       ]
     
        }, {backgroundColor:splatterColorArray[7]},{left:bulletLeftArray[7]}
     ]}>
     
     </Animated.View>
     
     <Animated.View style={[styles.smallSplatter,{
        transform:[{scale:smallSplatters[7][1]['size']},{rotate:smallSplatters[7][1]['direction']},{translateY:smallSplatters[7][1]['power']}, ],
     
      }, {backgroundColor:splatterColorArray[7]},{left:bulletLeftArray[7]}
      ]}>
     
     </Animated.View>
     
     <Animated.View style={[styles.smallSplatter,{
        transform:[{scale:smallSplatters[7][2]['size']},{rotate:smallSplatters[7][2]['direction']},{translateY:smallSplatters[7][2]['power']}, ],
     
        }, {backgroundColor:splatterColorArray[7]},{left:bulletLeftArray[7]}
     ]}>
     
     </Animated.View>
     
     <Animated.View style={[styles.smallSplatter,{
        transform:[{scale:smallSplatters[7][3]['size']},{rotate:smallSplatters[7][3]['direction']},{translateY:smallSplatters[7][3]['power']}, ],
     
        }, {backgroundColor:splatterColorArray[7]},{left:bulletLeftArray[7]}
     ]}>
     
     </Animated.View>
     
     <Animated.View style={[styles.smallSplatter,{
        transform:[{scale:smallSplatters[7][4]['size']},{rotate:smallSplatters[7][4]['direction']},{translateY:smallSplatters[7][4]['power']}, ],
     
        }, {backgroundColor:splatterColorArray[7]},{left:bulletLeftArray[7]}
     ]}>
     
     </Animated.View>
     
     <Animated.View style={[styles.smallSplatter,{
        transform:[{scale:smallSplatters[7][5]['size']},{rotate:smallSplatters[7][5]['direction']},{translateY:smallSplatters[7][5]['power']}, ],
     
        }, {backgroundColor:splatterColorArray[7]},{left:bulletLeftArray[7]}
     ]}>
     
     </Animated.View>
     
     <Animated.View style={[styles.smallSplatter,{
        transform:[{scale:smallSplatters[7][6]['size']},{rotate:smallSplatters[7][6]['direction']},{translateY:smallSplatters[7][6]['power']}, ],
     
        }, {backgroundColor:splatterColorArray[7]},{left:bulletLeftArray[7]}
     ]}>
     
     </Animated.View>
     
     <Animated.View style={[styles.smallSplatter,{
        transform:[{scale:smallSplatters[7][7]['size']},{rotate:smallSplatters[7][7]['direction']}, {translateY:smallSplatters[7][7]['power']},],
     
        }, {backgroundColor:splatterColorArray[7]},{left:bulletLeftArray[7]}
     ]}>
     
     </Animated.View>
     
     <Animated.View style={[styles.smallSplatter,{
        transform:[{scale:smallSplatters[7][8]['size']},{rotate:smallSplatters[7][8]['direction']},{translateY:smallSplatters[7][8]['power']}, ],
     
        }, {backgroundColor:splatterColorArray[7]},{left:bulletLeftArray[7]}
     ]}>
     
     </Animated.View>
     
     <Animated.View style={[styles.smallSplatter,{
        transform:[{scale:smallSplatters[7][9]['size']},{rotate:smallSplatters[7][9]['direction']},{translateY:smallSplatters[7][9]['power']} ],
        
        
       }, {backgroundColor:splatterColorArray[7]},{left:bulletLeftArray[7]}
     ]}>
     
     </Animated.View>
     <Animated.View style={[styles.smallSplatter,{
        transform:[{scale:smallSplatters[7][10]['size']},{rotate:smallSplatters[7][10]['direction']},{translateY:smallSplatters[7][10]['power']} ],
     
        }, {backgroundColor:splatterColorArray[7]},{left:bulletLeftArray[7]}
     ]}>
     
     </Animated.View>
     



   <Animated.View style={[styles.largeSplatter, 
    {
      transform:[{scale: bigSplatter[8]},{translateX:splatterTransformLeft[8]},{translateY:splatterTransformTop[8]}],
      
    backgroundColor:splatterColorArray[8],
    left:bulletLeftArray[8]
  }
    ]} >
   </Animated.View>
         <Animated.View style={[styles.smallSplatter,{
          transform:[
            {scale:smallSplatters[8][0]['size']},
          
          {rotate:smallSplatters[8][0]['direction']},
          {translateY:smallSplatters[8][0]['power']},
         ]
       
          }, {backgroundColor:splatterColorArray[8]},{left:bulletLeftArray[8]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[8][1]['size']},{rotate:smallSplatters[8][1]['direction']},{translateY:smallSplatters[8][1]['power']}, ],
       
        }, {backgroundColor:splatterColorArray[8]},{left:bulletLeftArray[8]}
        ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[8][2]['size']},{rotate:smallSplatters[8][2]['direction']},{translateY:smallSplatters[8][2]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[8]},{left:bulletLeftArray[8]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[8][3]['size']},{rotate:smallSplatters[8][3]['direction']},{translateY:smallSplatters[8][3]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[8]},{left:bulletLeftArray[8]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[8][4]['size']},{rotate:smallSplatters[8][4]['direction']},{translateY:smallSplatters[8][4]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[8]},{left:bulletLeftArray[8]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[8][5]['size']},{rotate:smallSplatters[8][5]['direction']},{translateY:smallSplatters[8][5]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[8]},{left:bulletLeftArray[8]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[8][6]['size']},{rotate:smallSplatters[8][6]['direction']},{translateY:smallSplatters[8][6]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[8]},{left:bulletLeftArray[8]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[8][7]['size']},{rotate:smallSplatters[8][7]['direction']}, {translateY:smallSplatters[8][7]['power']},],
       
          }, {backgroundColor:splatterColorArray[8]},{left:bulletLeftArray[8]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[8][8]['size']},{rotate:smallSplatters[8][8]['direction']},{translateY:smallSplatters[8][8]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[8]},{left:bulletLeftArray[8]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[8][9]['size']},{rotate:smallSplatters[8][9]['direction']},{translateY:smallSplatters[8][9]['power']} ],
          
          
         }, {backgroundColor:splatterColorArray[8]},{left:bulletLeftArray[8]}
       ]}>
       
       </Animated.View>
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[8][10]['size']},{rotate:smallSplatters[8][10]['direction']},{translateY:smallSplatters[8][10]['power']} ],
       
          }, {backgroundColor:splatterColorArray[8]},{left:bulletLeftArray[8]}
       ]}>
       
       </Animated.View>
       


   <Animated.View style={[styles.largeSplatter, 
    {
      transform:[{scale: bigSplatter[9]},{translateX:splatterTransformLeft[9]},{translateY:splatterTransformTop[9]}],
      
    backgroundColor:splatterColorArray[9],
    left:bulletLeftArray[9]
  }
    ]} >
   </Animated.View>
   <Animated.View style={[styles.smallSplatter,{
          transform:[
            {scale:smallSplatters[9][0]['size']},
          
          {rotate:smallSplatters[9][0]['direction']},
          {translateY:smallSplatters[9][0]['power']},
         ]
       
          }, {backgroundColor:splatterColorArray[9]},{left:bulletLeftArray[9]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[9][1]['size']},{rotate:smallSplatters[9][1]['direction']},{translateY:smallSplatters[9][1]['power']}, ],
       
        }, {backgroundColor:splatterColorArray[9]},{left:bulletLeftArray[9]}
        ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[9][2]['size']},{rotate:smallSplatters[9][2]['direction']},{translateY:smallSplatters[9][2]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[9]},{left:bulletLeftArray[9]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[9][3]['size']},{rotate:smallSplatters[9][3]['direction']},{translateY:smallSplatters[9][3]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[9]},{left:bulletLeftArray[9]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[9][4]['size']},{rotate:smallSplatters[9][4]['direction']},{translateY:smallSplatters[9][4]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[9]},{left:bulletLeftArray[9]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[9][5]['size']},{rotate:smallSplatters[9][5]['direction']},{translateY:smallSplatters[9][5]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[9]},{left:bulletLeftArray[9]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[9][6]['size']},{rotate:smallSplatters[9][6]['direction']},{translateY:smallSplatters[9][6]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[9]},{left:bulletLeftArray[9]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[9][7]['size']},{rotate:smallSplatters[9][7]['direction']}, {translateY:smallSplatters[9][7]['power']},],
       
          }, {backgroundColor:splatterColorArray[9]},{left:bulletLeftArray[9]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[9][8]['size']},{rotate:smallSplatters[9][8]['direction']},{translateY:smallSplatters[9][8]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[9]},{left:bulletLeftArray[9]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[9][9]['size']},{rotate:smallSplatters[9][9]['direction']},{translateY:smallSplatters[9][9]['power']} ],
          
          
         }, {backgroundColor:splatterColorArray[9]},{left:bulletLeftArray[9]}
       ]}>
       
       </Animated.View>
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[9][10]['size']},{rotate:smallSplatters[9][10]['direction']},{translateY:smallSplatters[9][10]['power']} ],
       
          }, {backgroundColor:splatterColorArray[9]},{left:bulletLeftArray[9]}
       ]}>
       
       </Animated.View>
       


   <Animated.View style={[styles.largeSplatter, 
    {
      transform:[{scale: bigSplatter[10]},{translateX:splatterTransformLeft[10]},{translateY:splatterTransformTop[10]}],
      
    backgroundColor:splatterColorArray[10],
    left:bulletLeftArray[10]
  }
    ]} >
   </Animated.View>
   <Animated.View style={[styles.smallSplatter,{
          transform:[
            {scale:smallSplatters[10][0]['size']},
          
          {rotate:smallSplatters[10][0]['direction']},
          {translateY:smallSplatters[10][0]['power']},
         ]
       
          }, {backgroundColor:splatterColorArray[10]},{left:bulletLeftArray[10]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[10][1]['size']},{rotate:smallSplatters[10][1]['direction']},{translateY:smallSplatters[10][1]['power']}, ],
       
        }, {backgroundColor:splatterColorArray[10]},{left:bulletLeftArray[10]}
        ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[10][2]['size']},{rotate:smallSplatters[10][2]['direction']},{translateY:smallSplatters[10][2]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[10]},{left:bulletLeftArray[10]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[10][3]['size']},{rotate:smallSplatters[10][3]['direction']},{translateY:smallSplatters[10][3]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[10]},{left:bulletLeftArray[10]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[10][4]['size']},{rotate:smallSplatters[10][4]['direction']},{translateY:smallSplatters[10][4]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[10]},{left:bulletLeftArray[10]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[10][5]['size']},{rotate:smallSplatters[10][5]['direction']},{translateY:smallSplatters[10][5]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[10]},{left:bulletLeftArray[10]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[10][6]['size']},{rotate:smallSplatters[10][6]['direction']},{translateY:smallSplatters[10][6]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[10]},{left:bulletLeftArray[10]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[10][7]['size']},{rotate:smallSplatters[10][7]['direction']}, {translateY:smallSplatters[10][7]['power']},],
       
          }, {backgroundColor:splatterColorArray[10]},{left:bulletLeftArray[10]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[10][8]['size']},{rotate:smallSplatters[10][8]['direction']},{translateY:smallSplatters[10][8]['power']}, ],
       
          }, {backgroundColor:splatterColorArray[10]},{left:bulletLeftArray[10]}
       ]}>
       
       </Animated.View>
       
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[10][9]['size']},{rotate:smallSplatters[10][9]['direction']},{translateY:smallSplatters[10][9]['power']} ],
          
          
         }, {backgroundColor:splatterColorArray[10]},{left:bulletLeftArray[10]}
       ]}>
       
       </Animated.View>
       <Animated.View style={[styles.smallSplatter,{
          transform:[{scale:smallSplatters[10][10]['size']},{rotate:smallSplatters[10][10]['direction']},{translateY:smallSplatters[10][10]['power']} ],
       
          }, {backgroundColor:splatterColorArray[10]},{left:bulletLeftArray[10]}
       ]}>
       
       </Animated.View>
       
<Button
onPress={()=>clear()}

style={{backgroundColor:"blue"},{position:"absolute"},{left:100}}
title="Clear!"
>

</Button>

<Button
onPress={()=>mix()}

style={{backgroundColor:"orange"},{position:"absolute"},{left:150}}
title="mix!"
>

</Button>
   </View>
  );
}

const styles = StyleSheet.create({
smallSplatter:{
  width:20,
  height:20,
  borderRadius:10,
  position:"absolute",
  zIndex:9910
  

},

  largeSplatter:{
    width:50,
    height:50,
     borderRadius:25,
     position:"absolute",
     top:-25,
     zIndex:9910

  }
  ,
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
      // backgroundColor:"blue",
      borderWidth: 2,
      borderColor:"black",
      borderRadius:10,
      zIndex:9999,
      
      
      
      

      
      
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