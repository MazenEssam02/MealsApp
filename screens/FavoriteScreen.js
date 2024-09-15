import { useContext } from "react";
import { StyleSheet,View,FlatList,Text} from "react-native";
import { FavoriteContext } from "../store/context/favorite-context";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import Ionicons from '@expo/vector-icons/Ionicons';
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
   let screen=(<View style={styles.container}>
   <Ionicons name="star-outline" size={70} style={{color:'white'}} />
   <Text style={styles.emptyText}>You haven't added any favorites yet</Text>
   </View>)
   if(displayedMeals.length!==0)screen= <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={gridMealItem} />

  return(
    
    <View style={styles.root}>
      {screen}
    </View>
  );
  }
export default FavoriteScreens;
const styles=StyleSheet.create({
  root:{
flex:1,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  emptyText:{
    paddingTop:15,
    fontSize:20,
    color:'white'
  }
});