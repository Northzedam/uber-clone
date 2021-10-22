import React, {useState} from 'react'
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'; 
const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber-X-456",
        title: "UberXL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-X-789",
        title: "UberLUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    },
];

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
            <TouchableOpacity
             style={tw`absolute top-3 left-5 p-3 rounded-full`}
             onPress={() => navigation.navigate("NavigateCard")}
             >
                <Icon name="chevron-left" type="fontawesome" />       
            </TouchableOpacity>
            <Text stlye={tw`text-center py-5 text-xl`}>Select a Ride</Text>
            </View>
            <FlatList data = {data} keyExtractor = { (item) => item.id }
                 renderItem={({item: {id,title,multiplier,image}, item }) => (
                    <TouchableOpacity style={tw`flex-row justify-between items-center px-10` }
                    onPress={() => (setSelected(item))}
                    >
                     <Image 
                     style={{
                         width: 100,
                         height: 100,
                         resizeMode: "contain",
                     }}
                     source={{uri: image}}
                     />
                     <View style={tw`ml-6`}>
                         <Text style={tw`text-xl font-semibold`}>{title}</Text>
                         <Text>Travel Time...</Text>
                     </View>
                     <Text style={tw`text-xl`}>$100</Text>
                    </TouchableOpacity>
                 )}

            />
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
