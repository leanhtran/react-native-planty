import React from "react";
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {BUTTONS,COLORS} from "../constants";
const Login = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.container,{height: '30%'}]}>
                <TextInput
                    style={[{marginLeft: 20,height: '30%'}]}
                    placeholder="UserName"
                />

                <TextInput
                    style={[{marginLeft: 20,height: '30%'}]}
                    placeholder="Password"
                />

                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('Main')
                    }}
                    style={[{...BUTTONS.btnRadius}]}
                >
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",

    },

    text: {
        color: "white",
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Lato-Regular"

    },
    textBtn: {
        fontSize: 25,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },

    btnSignUp: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",

    },
    radius: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 60,
        borderWidth: 0,
        borderColor: '#fff',
    },

});

export default Login;