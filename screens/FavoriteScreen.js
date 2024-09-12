import { useContext } from "react";
import { StyleSheet,View,FlatList} from "react-native";
import { FavoriteContext } from "../store/context/favorite-context";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

function FavoriteScreens({navigation}){
  const favoriteMealsCtx=useContext(FavoriteContext);
  const displayedMeals=MEALS.filter((mealItem)=>{
    return (favoriteMealsCtx.ids.includes(mealItem.id));
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
export default FavoriteScreens;
const styles=StyleSheet.create({
  container:{
    flex:1,
    
  }
});