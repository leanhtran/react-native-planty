import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, LayoutAnimation } from "react-native";
import { BUTTONS, COLORS, FONTS, TEXTS } from "../constants";
import firebase from "firebase";


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [noti, setNoti] = useState('');

    const handlerLogin =()=>{
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                
                navigation.navigate('FireBaseHome')
            })
            .catch(
                error => setNoti(error.message)
                )
    }
    const onPress = () => {
        handlerLogin();
        
    }
    // const [user, setUser] = useState({
    //     email: "",
    //     password: ""
    // })
    // LayoutAnimation.easeInEaseOut();
    // const changeState = (e) => {
    //     console.log(e)
    //     setUser({...user, [name]: e.targ})
    // }
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
                    placeholder="Email"
                    underlineColorAndroid="transparent"
                    // onChangeText={(e) => changeState(e)}
                    onChangeText={setEmail}
                    // name="email"
                    value={email}
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
                    value={password}
                    onChangeText={setPassword}
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
            
            <TouchableOpacity 
                onPress={() => navigation.navigate('FireBaseRegister')}>
                <Text> Register </Text>
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