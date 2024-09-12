import { StyleSheet,View,Text, Pressable, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
function MealDetail({duration,complexity,affordability,color}){

return(
<View style={styles.detailsContainer}>
      <Text style={[styles.detail,{color:color}]}>
        {duration}m
      </Text>
      <Text style={[styles.detail,{color:color}]}>
        {(complexity).toUpperCase()}
      </Text>
      <Text style={[styles.detail,{color:color}]}>
        {affordability.toUpperCase()}
      </Text>
      </View>
);
}
export default MealDetail;
const styles=StyleSheet.create({
  detailsContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:8,
  },
  detail:{
    marginHorizontal:4,
    fontSize:15,
  },
});