import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const DuenosDetailsScreen = () => {
    const route = useRoute()

    const {duenoId, title, description} = route.params
  return (
    <View>
      <Text style ={{fontSize: 20}}>Esto es el detalle del dueño {duenoId}</Text>
      <Text style ={{fontSize: 20}}>{title}</Text>
      <Text style ={{fontSize: 20}}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 200,
  }
})

export default DuenosDetailsScreen;
