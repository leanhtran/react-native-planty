import React from "react";

import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LayoutLogin from "../screens/LayoutLogin";
import Test from "../screens/Test";
import Tabs from "./Tabs";
import LayoutBuy from "../screens/LayoutBuy";
import ListViewLayout from "../screens/ListViewLayout";
import Login from "../screens/Login";
import Register from "../screens/Register";
import FireBaseLogin from "../screens/FireBaseLogin";
import FireBaseHome from "../screens/FireBaseHome";
import FireBaseRegister from "../screens/FireBaseRegister";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

const Stack = createStackNavigator();
const NavigationC = () => {

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator initialRouteName="Test"
                             screenOptions={{
                                 headerShown: false
                             }}
            >
                <Stack.Screen name="LayoutLogin" component={LayoutLogin}
                              options={{ title: 'My home' }}/>
                <Stack.Screen name="Test" component={Test} />
                <Stack.Screen name="Main" component={Test} />
                <Stack.Screen name="LayoutBuy" component={LayoutBuy} />
                <Stack.Screen name="ListViewLayout" component={ListViewLayout} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="FireBaseHome" component={FireBaseHome} />
                <Stack.Screen name="FireBaseRegister" component={FireBaseRegister} />
                <Stack.Screen name="FireBaseLogin" component={FireBaseLogin} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationC;