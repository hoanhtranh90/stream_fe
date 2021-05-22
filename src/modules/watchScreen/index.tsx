import React from 'react';
import { Text, TextInput, View, Button, StatusBar } from 'react-native';
import {  NodePlayerView } from 'react-native-nodemediaclient';
import ActionButton from 'react-native-action-button';

const PlayScreen = (props) => {
    const streamKey = '5b2a4a75-86c2-177c-72a2-45ab2b5e2584';
  const url = `rtmps://global-live.mux.com:443/app/${streamKey}`;
  const url1 = `https://stream.mux.com/${streamKey}.m3u8`
    console.log(props)
    return (
        // streamlink --stream-url https://www.twitch.tv/hoanhtranh80

        <View style={{ flex: 1 }}>
            {/* <StatusBar
                barStyle="light-content"
                backgroundColor="#6a51ae"
            />
            <NodePlayerView
                style={{ flex: 1, backgroundColor: '#333' }}
                ref={(vp) => { vp = vp }}
                inputUrl={url1}
                scaleMode={"ScaleAspectFill"}
                bufferTime={300}
                maxBufferTime={1000}
                autoplay={true}
                onStatus={(code, msg) => {
                    console.log("onStatus=" + code + " msg=" + msg);
                }}
            />

            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                // position='left'
                offsetY={32}
                offsetX={16}
                size={32}
                hideShadow={true}
                buttonText='x'
                verticalOrientation='down'
                onPress={() => { props.navigation.goBack() }}
            /> */}
            <NodePlayerView 
                ref={(vp) => { vp = vp }}
                style={{ height: '100%' }}
                inputUrl={"http://192.168.1.199:8000/livetest1/test1.flv"}
                scaleMode={"ScaleAspectFill"}
                bufferTime={300}
                maxBufferTime={1000}
                autoplay={true}
                onStatus={(code, msg) => {
                    console.log("onStatus=" + code + " msg=" + msg);
                }}
                />
        </View>
    );
}


export default PlayScreen;