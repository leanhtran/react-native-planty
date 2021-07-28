import React, { useEffect } from "react";

import LayoutLogin from './screens/LayoutLogin';
import LayoutBuy from './screens/LayoutBuy';
import ListViewLayout from './screens/ListViewLayout';
import Test from "./screens/Test";
import Tabs from "./navigation/Tabs";

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from "./screens/Main";
import Login from "./screens/Login";
import Register from "./screens/Register";
import NavigationC from "./navigation/NavigationC";
import FireBaseLogin from "./screens/FireBaseLogin";


const firebaseConfig = {
    apiKey: "AIzaSyBEl_Qj9DzR3B4w8Cfp1X8iN8R1c4dI3JY",
    authDomain: "reactnative-basic-c810b.firebaseapp.com",
    projectId: "reactnative-basic-c810b",
    storageBucket: "reactnative-basic-c810b.appspot.com",
    messagingSenderId: "842479112513",
    appId: "1:842479112513:web:b7803c3bbf69d85fcb91c0"
};

// const Stack = createStackNavigator();
const App = () => {
    const [loaded] = useFonts({
        "Lato-Italic" : require('./assets/fonts/Lato-Italic.ttf'),
        "Lato-Regular" : require('./assets/fonts/Lato-Regular.ttf'),
        "Lato-Bold" : require('./assets/fonts/Lato-Bold.ttf'),
        "Lato-Black" : require('./assets/fonts/Lato-Black.ttf'),
        "Lato-Light" : require('./assets/fonts/Lato-Light.ttf'),

    })
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log("oke---------")
    }

    if(!loaded){
        return null;
    }

    // return (<Test />)
    
    // return (<FireBaseLogin/>)
    return (<NavigationC />)
}

export default App;