import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { StyleSheet,View,FlatList } from "react-native";
function MealsScreenView({route}){
  const catId=route.params.categoryId;
  
  // console.log(catId);
  const displayedMeals=MEALS.filter((mealItem)=>{
    return (mealItem.categoryIds.indexOf(catId)>=0);
  });
 function gridMealItem(itemData){
  return(
    <MealItem item={itemData.item} />
  );
 }
return(
  <View style={styles.container}>
   <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={gridMealItem}/>
  </View>
);
}
export default MealsScreenView;

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:16
  }
});