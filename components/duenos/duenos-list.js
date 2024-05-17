import { View, Text, FlatList, RefreshControl} from "react-native";
import { DUMMY_DATA } from "../../data/dummy";
import DuenoItem from "./duenos-item";



const DuenosList = () => {
    const renderItem = ({item}) => {
        return <DuenoItem id={item.id} title={item.title} description={item.description} />
    }
    return (
        <View>
            <FlatList
                data={DUMMY_DATA}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
                refreshControl = {
                    <RefreshControl
                        refreshing={false}
                        onRefresh={()=> console.log('refreshing...')}
                    />
                }
            />
        </View>
    );
}

export default DuenosList;