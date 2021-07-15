import React from "react";
import {BlurView} from '@react-native-community/blur';
import LayoutLogin from './screens/LayoutLogin';
import LayoutBuy from './screens/LayoutBuy';
import ListViewLayout from './screens/ListViewLayout';
import Test from "./screens/Test";
import Tabs from "./navigation/Tabs";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from "./screens/Main";

const Stack = createStackNavigator();
const App = () => {
    // return (<LayoutLogin />)
    // return (<LayoutBuy/>)
    // return (<ListViewLayout />)
    // return (<Test />)
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main"
                             screenOptions={{
                                 headerShown: true
                             }}
            >
                <Stack.Screen name="LayoutLogin" component={LayoutLogin}
                              options={{ title: 'My home' }}/>
                <Stack.Screen name="Test" component={Test} />
                <Stack.Screen name="Main" component={Tabs} />
                <Stack.Screen name="LayoutBuy" component={LayoutBuy} />
                <Stack.Screen name="ListViewLayout" component={ListViewLayout} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;