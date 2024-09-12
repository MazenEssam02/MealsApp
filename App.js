import { StyleSheet,SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{NavigationContainer} from '@react-navigation/native';
import CategoryScreens from './screens/categoryScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsScreenView from './screens/MealsScreenView';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreens from './screens/FavoriteScreen';

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack =createNativeStackNavigator();
function DrawerHandler(){
  return(
    <Drawer.Navigator screenOptions={{headerBackTitleVisible:false,headerTintColor:"black",sceneContainerStyle:{backgroundColor:'#491e66'},headerStyle:{backgroundColor:'#d39df8'}, drawerContentStyle:{backgroundColor:'#491e66'},drawerActiveBackgroundColor:"#d39df8",drawerInactiveTintColor:'white',drawerActiveTintColor:"black"}}>
      <Drawer.Screen
        name="MealCategories"
        component={CategoryScreens}
      />
        <Drawer.Screen
        name="Favorites"
        component={FavoriteScreens}
      />
    </Drawer.Navigator>
  );
}
  return (
  <>
    <StatusBar style='dark'/>
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerBackTitleVisible:false,headerTintColor:"black",contentStyle:{backgroundColor:'#491e66'},headerStyle:{backgroundColor:'#d39df8'}}}>
        <Stack.Screen
         name="MealsCategories"
         component={DrawerHandler} 
         options={{headerShown:false}}
         />
        <Stack.Screen name="MealsOverview" 
        component={MealsScreenView}
        options={({route})=>{
          const title=route.params.title;
          return(
            {title:title.toUpperCase()}
          );
        }}
        />
         <Stack.Screen
         name="MealDetails"
         component={MealDetailsScreen} 
         options={{title:'Meal Detail'}}/>
       </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
  

  },
  boxContainer:{
    
  },
});
