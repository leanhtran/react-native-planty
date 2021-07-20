import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { BUTTONS, COLORS, FONTS, TEXTS } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [noti, setNoti] = useState('');

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('user')
            if (value !== null) {
                console.log(value)
            }
        } catch (e) {
            // error reading value
        }
    }
    const saveData = async (value) => {
        try {
            await AsyncStorage.setItem('user', value)
        } catch (e) {
            
        }
    }
    const register=(name,pass)=>{
        var user={
            username: name,
            password: pass,
            
        }
        saveObjectData(user);
        
    }

    const saveObjectData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
            // saving error
        }
    }
    const getObjectData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            console.log(jsonValue);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    }

    const onPress = () => {
        saveData(name);
        register(name,pass)
        // if (register(name, pass)) {
        //     navigation.navigate('Main')
        // } else {
        //     setNoti('Noti: Fail')
        // }
        getData();
        getObjectData();
        
    }



    return (
        <SafeAreaView>
            <View style={[{
                ...TEXTS.textRadius,
                ...TEXTS.shadow,
                backgroundColor: COLORS.white,

            }]}>
                <TextInput style={[{
                    ...TEXTS.textInput,
                }, styles.input]}
                    placeholder="UserName"
                    underlineColorAndroid="transparent"
                    onChangeText={setName}
                    value={name}
                />
            </View>

            <View style={[{
                ...TEXTS.textRadius,
                ...TEXTS.shadow,
                backgroundColor: COLORS.white,
            }]}>
                <TextInput
                    style={[{
                        ...TEXTS.textInput,
                    }, styles.input]}
                    secureTextEntry={true}
                    placeholder="Password"
                    underlineColorAndroid="transparent"
                    value={pass}
                    onChangeText={setPass}
                />
            </View>

            <TouchableOpacity
                style={{
                    ...BUTTONS.btnRadius,
                    ...BUTTONS.shadow,
                    backgroundColor: COLORS.white,
                }}
                onPress={onPress}
            >
                <Text style={{ ...TEXTS.textBtn }}>
                    Login
                </Text>
            </TouchableOpacity>
            <Text style={{ color: "red" }}> {noti}</Text>

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