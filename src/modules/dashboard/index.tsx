import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Header from './header/header';
import Home from './home/home';
import SlideBar from './slideBar/slideBar';

const DashBoard = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Header />
            <View style={{flexDirection:'row',height:'100%'}}>
                <SlideBar />
                <Home/>
            </View>
        </View>
    )
}

export default DashBoard;