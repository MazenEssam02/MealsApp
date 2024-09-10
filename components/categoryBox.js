import { StyleSheet,View,Text, Pressable } from "react-native";
function Box({children,background,onPress}){
return(
  <View style={styles.container}>
    <Pressable android_ripple={{color:'#ccc'}} 
    style={({pressed})=>[styles.buttonStyle,pressed?styles.buttonPressed :null]}
    onPress={onPress}
    >
      <View style={[styles.innerContainer,{backgroundColor:background}]}>
        <Text style={styles.title}>
          {children}
        </Text>
      </View>
    </Pressable>
  </View>
);
}
export default Box;

const styles=StyleSheet.create({
container:{
flex:1,
margin:16,
height:150,
elevation:4,
borderRadius:8,
shadowColor:'black',
shadowOffset:{width:0,height:2},
shadowRadius:8,
shadowOpacity:0.25,
},
buttonStyle:{
flex:1
},
buttonPressed:{
  opacity:0.5,
},
innerContainer:{
  justifyContent:'center',
  flex:1,
  padding:16,
  borderRadius:8,
},
title:{
  textAlign:'center',
  fontSize:18,
  fontWeight:'bold'
}
});