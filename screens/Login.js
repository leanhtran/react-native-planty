import React, { useState } from "react";
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Alert} from "react-native";
import {BUTTONS, COLORS, FONTS, TEXTS} from "../constants";


const Login = ({navigation}) => {
    
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [noti,setNoti] = useState('');
    
    const onPress = () =>{
        if (check(name, pass)) {
            navigation.navigate('Main')
        } else {
            setNoti('Noti: Fail')
        }
    }


   const check = (name, pass) => {
        ;
        // Alert.alert(
        //     "Alert "+name+"  "+pass,)
        if (name == 'a' && pass == 'a')
            return true
        else return false

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
                    },styles.input]}
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
                <Text style={{...TEXTS.textBtn}}>
                    Login
                </Text>
            </TouchableOpacity>
            <Text style={{color: "red"}}> {noti}</Text>

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