import { StyleSheet,SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{NavigationContainer} from '@react-navigation/native';
import CategoryScreens from './screens/categoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsScreenView from './screens/MealsScreenView';
const Stack =createNativeStackNavigator();
export default function App() {
  return (
  <>
    <StatusBar style='dark'/>
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
         name="MealsCategories"
         component={CategoryScreens} 
         options={{title:'All Categories'}}/>
        <Stack.Screen name="MealsOverview" 
        component={MealsScreenView}
        options={({route})=>{
          const title=route.params.title;
          return(
            {title:title.toUpperCase()}
          );
        }}
        />
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
