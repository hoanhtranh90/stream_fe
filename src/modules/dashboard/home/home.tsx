import React from 'react'
import { FlatList,Button, Text, TouchableOpacity, View, NativeModules,requireNativeComponent, StyleSheet } from 'react-native'
import * as RootNavigation from 'app/config/root-navigation';

const Home = () => {
    const data = [
        { id: 1111,url:"https://video-weaver.sin01.hls.ttvnw.net/v1/playlist/CqAEcCkSGTSK8DroHb_fjP9szShTxzg2iUw0jFichW0kb6dzvMVaIvN-3FFvbKh6yOhcnB2htvSCwcUwIOZ7-vph4oMQAYLhjtxm8vQsxRSkybFDOlHj9kf6eohDMHwo0vL_JcDnlaLcBSP75mx3AlU7Zf-_DM4F64zpgM88u6evtPDnN_x4imR_GJGZtHlgTt6GyKmNii-m2iEiKu-Z6bYIFgISUU2LsF8cl9f69wI-IOs63UD8QNrvXqz0yYQARUuF_Z8G5cM5BTN460W3aNYR-sES17ihlEabK4gXNTl6wlHxzX_rSc7pgIUBQxJK8imp1xSzhbnFr27PGOUyO8a8hSCgwFvdQ-SRNefnebr09AJ5wFq-vXKokPsfP-bLZXOKjL64XOzFK-PtK5Vl8gKvZVsZ0QONEfUbXviYwBSrujsctWIElJJ-GEFl1FNpQ3rkgwZYE0RmIgoOlzoahsJ6pvtYtLvt6AKrg2xutHVUW5vmiyOQbvTiXBRKHYXmsSdf5fKA4Pf-G6YZ58ZXEWMi35n-yeLvy44nFFgTN1IWJYlkJr8Nph9dkbpKbiJw818qAU5i9mmsuDwaBPNeUUCh6tFpniPlASeKqe7T6h2-ktt_iq606Lbe726S6jyKK7NUUo7Iz2AirmJFGiIblxGrs_3fvPDFdmMvbQ0aEiYJiO3iE1Ytxr99rh0t3oJtHBtAfCGmfqngdZ--Yhd--L6YOxIQZ7UaAryeHYBl0V6w5t42oBoMWAPB_m5Xsvyjq9n5.m3u8" },
        { id: 21112,url:"http://192.168.1.199:8000/livetest1/test1.flv" },
        { id: 1214,url:"https://media.inspirahub.id/trailer/3/1591269758129847909689/hls/index_1080.m3u8" },
        { id: 412,url:"https://media.inspirahub.id/trailer/3/1591269758129847909689/hls/index_1080.m3u8" },
        { id: 124124,url:"https://media.inspirahub.id/trailer/3/1591269758129847909689/hls/index_1080.m3u8" },
        { id: 12321,url:"https://media.inspirahub.id/trailer/3/1591269758129847909689/hls/index_1080.m3u8" },
        { id: 141354,url:"https://media.inspirahub.id/trailer/3/1591269758129847909689/hls/index_1080.m3u8" },

    ]
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => NativeModules.ActivityOpen.navigateToWatch(item.url)}>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    hello: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    scannerview: {
      height: 300,
      width: 300,
    },
  });

export default Home;