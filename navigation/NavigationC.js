import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LayoutLogin from "../screens/LayoutLogin";
import Test from "../screens/Test";
import Tabs from "./Tabs";
import LayoutBuy from "../screens/LayoutBuy";
import ListViewLayout from "../screens/ListViewLayout";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();
const NavigationC = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LayoutLogin"
                             screenOptions={{
                                 headerShown: false
                             }}
            >
                <Stack.Screen name="LayoutLogin" component={LayoutLogin}
                              options={{ title: 'My home' }}/>
                <Stack.Screen name="Test" component={Test} />
                <Stack.Screen name="Main" component={Tabs} />
                <Stack.Screen name="LayoutBuy" component={LayoutBuy} />
                <Stack.Screen name="ListViewLayout" component={ListViewLayout} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationC;