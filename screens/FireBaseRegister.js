import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, LayoutAnimation } from "react-native";
import { BUTTONS, COLORS, FONTS, TEXTS } from "../constants";
import firebase from "firebase";



const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [noti, setNoti] = useState('');

    const handlerRegister =()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(userCredential=>{
            return userCredential.user.updateProfile({
                name: name
            })
        })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    const onPress = () => {
        handlerRegister();

    }

    // LayoutAnimation.easeInEaseOut();

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
                    onChangeText={setEmail}
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
                    secureTextEntry={false}

                    placeholder="Name"
                    underlineColorAndroid="transparent"
                    value={name}
                    onChangeText={setName}
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
                    Register
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