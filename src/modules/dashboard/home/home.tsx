import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import * as RootNavigation from 'app/config/root-navigation';

const Home = () => {
    const data = [
        { id: 12 },
        { id: 234 },
        { id: 14214 },
        { id: 142424214 },
        { id: 1422114 },
        { id: 512512 },
        { id: 345 }
    ]
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => RootNavigation.navigate('PlayScreen')}>
                <View style={{ width: 150, height: 200, backgroundColor: 'gray', marginRight: 10 }}>
                    <Text>{item.id}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <View style={{ margin: 10 }}>
                <Text>Test 1</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    horizontal
                />
            </View>
            <View style={{ margin: 10 }}>
                <Text>Test 2</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    horizontal
                />
            </View>
        </View>
    )
}
export default Home;