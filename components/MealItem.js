import { StyleSheet,View,Text, Pressable, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetail";
function MealItem({item,onPress}){

return(
  
  <View style={styles.container}>
    <Pressable android_ripple={{color:'#ccc'}} 
    style={({pressed})=>[styles.buttonStyle,pressed?styles.buttonPressed :null]}
    onPress={onPress}
    >
      <View style={styles.innerContainer}>
       
        <Image source={{uri:item.imageUrl}} style={styles.image}/>
       
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {item.title}
          </Text>
        </View>
          <MealDetail duration={item.duration} complexity={item.complexity} affordability={item.affordability}/>
      </View>
    </Pressable>
  </View>
);
}
export default MealItem;

const styles=StyleSheet.create({
container:{
flex:1,
margin:16,
// height:250,
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
  flex:1,
  // padding:16,
  borderRadius:8,
  backgroundColor:'white',
  overflow:'hidden'
},

image:{
  width:'100%',
  height:200,
},
title:{
  textAlign:'center',
  fontSize:18,
  fontWeight:'bold',
  padding:8,
  borderBottomWidth:5,
  borderBottomColor:'white',
},

});