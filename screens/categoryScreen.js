import { StyleSheet,View,Text, FlatList } from "react-native";
import { CATEGORIES } from '../data/dummy-data';
import Box from '../components/Box';
function CategoryScreens(){
  return(
<FlatList data={CATEGORIES} 
key={(item)=>item.id} 
renderItem={(itemData)=> <Box  background={itemData.item.color}>{itemData.item.title} </Box>} 
numColumns={2}
/>
  // {CATEGORIES.map((category)=>{
  //   return 
  //  })}

   );
}
export default CategoryScreens;

const styles = StyleSheet.create({

  boxContainer:{
    
  },
});