import React from 'react'
import { FlatList, Button, Text, TouchableOpacity, View, NativeModules, requireNativeComponent, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import * as RootNavigation from 'app/config/root-navigation';

const Playlist = () => {
    const data = [
        { id: 1,name:"video1", url: "https://media.inspirahub.id/video/208/16188891357902053581892/hls/index.m3u8", uri: "https://s3-ap-southeast-1.amazonaws.com/prod.inspirahub.id/stream/thumbnail/16033488807071666230078.jpg" },
        { id: 2,name:"video2", url: "https://media.inspirahub.id/video/170/16133836641551032597058/hls/index.m3u8", uri: "https://s3-ap-southeast-1.amazonaws.com/prod.inspirahub.id/stream/thumbnail/15897732751261332965053.jpg" },
        { id: 3,name:"video3", url: "https://media.inspirahub.id/video/208/16188891357902053581892/hls/index.m3u8", uri: "https://s3-ap-southeast-1.amazonaws.com/prod.inspirahub.id/stream/thumbnail/16020620009608661542.jpg" },
        { id: 4,name:"video4", url: "https://media.inspirahub.id/audio/210/16188912002751208952840/hls/index.m3u8", uri: "https://s3-ap-southeast-1.amazonaws.com/prod.inspirahub.id/stream/thumbnail/1602057404115754262147.jpg" },
        { id: 5,name:"video5", url: "https://media.inspirahub.id/audio/210/16188912002751208952840/hls/index_19220210420T041755_00001.aac", uri: "https://s3-ap-southeast-1.amazonaws.com/prod.inspirahub.id/stream/thumbnail/16151984121021848943896.jpg" },
        { id: 6,name:"video6", url: "https://media.inspirahub.id/video/208/16188891357902053581892/hls/index.m3u8", uri: "https://s3-ap-southeast-1.amazonaws.com/prod.inspirahub.id/stream/thumbnail/16033488807071666230078.jpg" },
        { id: 7,name:"video7", url: "https://media.inspirahub.id/video/170/16133836641551032597058/hls/index.m3u8", uri: "https://s3-ap-southeast-1.amazonaws.com/prod.inspirahub.id/stream/thumbnail/15897732751261332965053.jpg" },
        { id: 8,name:"video8", url: "https://media.inspirahub.id/video/208/16188891357902053581892/hls/index.m3u8", uri: "https://s3-ap-southeast-1.amazonaws.com/prod.inspirahub.id/stream/thumbnail/16020620009608661542.jpg" },
        { id: 9,name:"video39", url: "https://media.inspirahub.id/audio/210/16188912002751208952840/hls/index.m3u8", uri: "https://s3-ap-southeast-1.amazonaws.com/prod.inspirahub.id/stream/thumbnail/1602057404115754262147.jpg" },
        { id: 10,name:"video10", url: "https://media.inspirahub.id/audio/210/16188912002751208952840/hls/index_19220210420T041755_00001.aac", uri: "https://s3-ap-southeast-1.amazonaws.com/prod.inspirahub.id/stream/thumbnail/16151984121021848943896.jpg" },

    ]
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => NativeModules.ActivityOpen.navigateToWatch(item.url)}>
            <ImageBackground source={{uri:item.uri}} style={{ width: 250, height: 160, backgroundColor: 'gray', margin: 5 }}>
            </ImageBackground>
            <Text style={{fontWeight:'bold',fontSize:18,color:'#fff',marginBottom:30}}>  {item.name}</Text>
        </TouchableOpacity>
        );
    };
    return (
        <ScrollView style={{ backgroundColor: '#373737' }}>
            <View style={{ margin: 10 }}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:18,marginBottom:15}}>Play List</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

});

export default Playlist;