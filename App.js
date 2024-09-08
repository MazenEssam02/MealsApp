import { StyleSheet,SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{NavigationContainer} from '@react-navigation/native';
import CategoryScreens from './screens/categoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack =createNativeStackNavigator();
export default function App() {
  return (
  <>
    <StatusBar style='dark'/>
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Meals Categories" component={CategoryScreens}/>
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
