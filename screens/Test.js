import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LayoutLogin from './LayoutLogin';
import LayoutBuy from './LayoutBuy';

const Tab = createBottomTabNavigator();

const Test=()=> {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={LayoutBuy} />
            <Tab.Screen name="Settings" component={LayoutLogin} />
        </Tab.Navigator>
    );
}
export default Test