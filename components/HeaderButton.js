import { Pressable, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
function HeaderButton({onPress,isStarred}){

return(
<Pressable onPress={onPress} style={({pressed})=>pressed?styles.pressed:null}>
<Ionicons name={isStarred?"star":"star-outline"} size={24}color={'black'}/>
</Pressable>
);
}
export default HeaderButton;

const styles=StyleSheet.create({
  pressed:{
    opacity:0.7,
  }
});