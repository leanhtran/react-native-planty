import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, LayoutAnimation } from "react-native";
import { BUTTONS, COLORS, FONTS, TEXTS } from "../constants";
import firebase from "firebase";



const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const signOut=()=>{
        firebase.auth().signOut;
    }
    const user =()=>{
        const {email, name}=firebase.auth().currentUser;
        setEmail(email);
        setName(name);
    }
    useEffect(() => {
        user()
    });
    
    // LayoutAnimation.easeInEaseOut();

    return (
        
        <SafeAreaView>
        <Text h1> HOME</Text>
        <Text h2> {email} and {name}</Text>
            

        </SafeAreaView>


    )
}, styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f3f3",
        // marginTop: StatusBar.currentHeight || 0,

    },
});

export default Login;