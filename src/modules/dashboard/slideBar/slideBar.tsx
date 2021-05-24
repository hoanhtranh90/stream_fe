import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'   
import Icon from 'react-native-vector-icons/Ionicons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../home/home';
import { connect, useSelector } from 'react-redux';
import { IRootState } from 'app/shared/store';
import { changeMenu } from '../dashboard.reducer';

const SlideBar = ({changeMenu}) => {
   
    const [listItem, setListItem] = useState([
        { id: 1, text: "Home", icon: "home-sharp", active: 1 },
        { id: 2, text: "Playlist", icon: "list-sharp", active: 0 }
    ])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', padding: 15 }} onPress={() => {
                setListItem(listItem.map(function (x) {
                    x.active = 0;
                    return x
                }));
                const newList = listItem.map((e) => {
                    if (e.id === item.id) {
                        const updatedItem = {
                            ...e,
                            active: 1,
                        };

                        return updatedItem;
                    }

                    return e;
                });
                setListItem(newList);
                changeMenu(item.id);
                
            }}>
                <Icon name={item.icon} color={item.active == 1 ? "#509AB9" : '#fff'} size={20} />
                <Text style={{ color: item.active == 1 ? "#509AB9" : '#fff', alignSelf: 'center', fontSize: 16 }}>  {item.text}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ width: '20%', backgroundColor: '#212121' }}>
            {/* <Text style={{color:'#fff'}}>{menuType}</Text> */}
            <FlatList
                data={listItem}
                renderItem={renderItem}
            />
        </View>
    )
}
const mapStateToProps = (state: IRootState) => ({

  });
  
  const mapDispatchToProps = {
    changeMenu
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SlideBar);