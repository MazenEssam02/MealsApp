import { Text,StyleSheet,Image,View ,ScrollView,Button} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import { useLayoutEffect, useState } from "react";
import HeaderButton from "../components/HeaderButton";



function MealDetailsScreen({route,navigation}){
  const mealId=route.params.id;
  const selectedMeal=MEALS.find((meal)=> mealId===meal.id);
  const [starred,setStarred]=useState(selectedMeal.isStarred);
  function headerPressHandler(){
    selectedMeal.isStarred=!selectedMeal.isStarred;
    setStarred(selectedMeal.isStarred);
  }

  useLayoutEffect(()=>{
    navigation.setOptions({headerRight:()=>{
      return <HeaderButton onPress={headerPressHandler} isStarred={starred}/>
    }})
  },[navigation,headerPressHandler]);
return(
  <ScrollView style={styles.container}>
    <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
    <Text style={styles.title}>{selectedMeal.title}</Text>
    <MealDetail duration={selectedMeal.duration} 
    complexity={selectedMeal.complexity}
    affordability={selectedMeal.affordability} color={'white'}/>
    <View style={styles.listOuterContainer}>
    <View style={styles.listContainer}>
    <SubTitle subTitle='Ingrediants' />
    <List data={selectedMeal.ingredients}/>
    <SubTitle subTitle='Steps'/>
    <List data={selectedMeal.steps}/>
    </View>
    </View>
  </ScrollView>
);
}
export default MealDetailsScreen;

const styles=StyleSheet.create({
  container:{
    marginBottom:30,
  },
  image:{
    width:'100%',
    height:350,
  },
  title:{
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold',
    margin:8,
    color:'white'
  },
  listOuterContainer:{
    alignItems:'center'
  },
  listContainer:{
    width:'75%'
  }
});