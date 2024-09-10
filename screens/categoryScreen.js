import { StyleSheet,View,Text, FlatList } from "react-native";
import { CATEGORIES } from '../data/dummy-data';
import Box from '../components/categoryBox';
function CategoryScreens({navigation}){
  function itemHandler(itemData){
    function pressHandler(){
      navigation.navigate('MealsOverview',{categoryId:itemData.item.id,title:itemData.item.title});
    }
    return(
      <Box  background={itemData.item.color} onPress={pressHandler}>{itemData.item.title} </Box>
    );
}
  return(
<FlatList data={CATEGORIES} 
key={(item)=>item.id} 
renderItem={itemHandler} 
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