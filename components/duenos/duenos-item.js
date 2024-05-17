import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const DuenoItem = ({id, title, description}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Dueños", {duenoId: id, title, description})}>
            <Text>Nombre: {title}</Text>
            <Text>Mascota: {description}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    }
})

export default DuenoItem;