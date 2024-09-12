import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { StyleSheet,View,FlatList } from "react-native";
function MealsScreenView({route,navigation}){
  const catId=route.params.categoryId;
  
  // console.log(catId);
  const displayedMeals=MEALS.filter((mealItem)=>{
    return (mealItem.categoryIds.indexOf(catId)>=0);
  });
 function gridMealItem(itemData){
  function pressHandler(){
    navigation.navigate('MealDetails',{id:itemData.item.id});
  }
  return(
    <MealItem item={itemData.item} onPress={pressHandler}/>
  );
 }
return(
  <View style={styles.container}>
   <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={gridMealItem} />
  </View>
);
}
export default MealsScreenView;

const styles=StyleSheet.create({
  container:{
    flex:1,
   
  }
});