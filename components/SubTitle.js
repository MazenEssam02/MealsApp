import { View,Text,StyleSheet } from "react-native";

function SubTitle({subTitle}){
return  (
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
         
);
}
export default SubTitle;
const styles=StyleSheet.create({
    subTitleContainer:{
      padding:8,
      borderBottomWidth:2,
      borderBottomColor:'#d39df8',  
      marginVertical:4,
      // marginHorizontal:,
    },
    subTitle:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        color:'white'
        
    },
   
});