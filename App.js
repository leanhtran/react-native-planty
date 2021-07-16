import React from "react";
import {BlurView} from '@react-native-community/blur';
import LayoutLogin from './screens/LayoutLogin';
import LayoutBuy from './screens/LayoutBuy';
import ListViewLayout from './screens/ListViewLayout';
import Test from "./screens/Test";
import Tabs from "./navigation/Tabs";

import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from "./screens/Main";
import Login from "./screens/Login";
import Register from "./screens/Register";
import NavigationC from "./navigation/NavigationC"

// const Stack = createStackNavigator();
const App = () => {
    const [loaded] = useFonts({
        "Lato-Italic" : require('./assets/fonts/Lato-Italic.ttf'),
        "Lato-Regular" : require('./assets/fonts/Lato-Regular.ttf'),
        "Lato-Bold" : require('./assets/fonts/Lato-Bold.ttf'),
        "Lato-Black" : require('./assets/fonts/Lato-Black.ttf'),
        "Lato-Light" : require('./assets/fonts/Lato-Light.ttf'),

    })

    if(!loaded){
        return null;
    }
    // return (<LayoutBuy/>)
    // return (<ListViewLayout />)
    // return (<Test />)
    return (<NavigationC />)

    // return (
    //     <NavigationC>
    //         <Stack.Navigator initialRouteName="LayoutLogin"
    //                          screenOptions={{
    //                              headerShown: false
    //                          }}
    //         >
    //             <Stack.Screen name="LayoutLogin" component={LayoutLogin}
    //                           options={{ title: 'My home' }}/>
    //             <Stack.Screen name="Test" component={Test} />
    //             <Stack.Screen name="Main" component={Tabs} />
    //             <Stack.Screen name="LayoutBuy" component={LayoutBuy} />
    //             <Stack.Screen name="ListViewLayout" component={ListViewLayout} />
    //             <Stack.Screen name="Login" component={Login} />
    //             <Stack.Screen name="Register" component={Register} />
    //         </Stack.Navigator>
    //     </NavigationC>
    // )
}

export default App;