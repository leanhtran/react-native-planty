import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListViewLayout from "../screens/ListViewLayout";
import LayoutBuy from "../screens/LayoutBuy";
import LayoutLogin from "../screens/LayoutLogin";

const Tab = createBottomTabNavigator();

const Tabs=()=> {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Buy" component={LayoutBuy} />
            <Tab.Screen name="Login" component={LayoutLogin} />
            <Tab.Screen name="List" component={ListViewLayout} />
        </Tab.Navigator>
    );
}
export default Tabs