import React from "react";
import {SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet,View} from "react-native";
import {BUTTONS, COLORS, FONTS, TEXTS} from "../constants";

const Register = ({navigation}) => {
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
                />
            </View>
           
            <TouchableOpacity
                style={{
                    ...BUTTONS.btnRadius,
                    ...BUTTONS.shadow,
                    backgroundColor: COLORS.white,
                }}
                onPress={()=>{
                        navigation.navigate('Main')
                }}
            >
                <Text style={{...TEXTS.textBtn}}>
                    Register
                </Text>
            </TouchableOpacity>

        </SafeAreaView>


    )
}, styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f3f3",
        // marginTop: StatusBar.currentHeight || 0,

    },
});    

export default Register;