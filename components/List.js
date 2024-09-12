import { View,Text,StyleSheet } from "react-native";

function List({data}){
return(<>
  {data.map(item=>(
    <View style={styles.itemContainer}  key={item}>
    <Text  style={styles.itemText}>{item}</Text>
    </View>
    ))}
  </>
);
}
export default List;
const styles=StyleSheet.create({
  itemContainer:{
    backgroundColor:'#d39df8',
    marginVertical:3,
    // marginHorizontal:8,
    borderColor:'black',
    borderWidth:1,
    borderRadius:8,
    paddingVertical:3,
    paddingHorizontal:6,
  },
  itemText:{
    marginVertical:2,
    textAlign:'center'

  }
});