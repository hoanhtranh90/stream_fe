import { IRootState } from 'app/shared/store';
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Playlist from '../Playlist';
import Header from './header/header';
import Home from './home/home';
import SlideBar from './slideBar/slideBar';

const DashBoard = () => {
    const menuType = useSelector(
        (state: IRootState) => state.DashBoardReducer.menuType
      );
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Header />
            <View style={{flexDirection:'row',height:'100%'}}>
                <SlideBar />
                {menuType == 1 ? <Home/> :<Playlist/>}
            </View>
        </View>
    )
}

export default DashBoard;