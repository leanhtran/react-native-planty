import React from "react";
import { createBottomTabNavigator,BottomTabBar } from '@react-navigation/bottom-tabs';

import ListViewLayout from "../screens/ListViewLayout";
import LayoutBuy from "../screens/LayoutBuy";
import LayoutLogin from "../screens/LayoutLogin";
import {Image} from "react-native";

import {Icons, COLORS} from "../constants";

const Tab = createBottomTabNavigator();

const Tabs=()=> {
    return (
        <Tab.Navigator
            tabBarOptions={{showLabel: false}}
        >
            <Tab.Screen name="Buy"
                        component={LayoutBuy}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={Icons.homeIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? COLORS.primary : COLORS.secondary
                                    }}
                                />
                            ),
                        }}
            />
            <Tab.Screen name="Login" component={LayoutLogin}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={Icons.searchIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? COLORS.primary : COLORS.secondary
                                    }}
                                />
                            ),
                        }}
            />
            <Tab.Screen name="List" component={ListViewLayout}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={Icons.likeIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? COLORS.primary : COLORS.secondary
                                    }}
                                />
                            ),
                        }}
            />
        </Tab.Navigator>
    );
}
export default Tabs