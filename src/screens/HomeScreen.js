import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DuenosList from "../../components/duenos/duenos-list";

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      <DuenosList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  }
})

export default HomeScreen;
