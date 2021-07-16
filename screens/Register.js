import React from "react";
import {SafeAreaView, Text, TextInput, TouchableOpacity} from "react-native";

const Register = ({navigation}) => {

    return (
        <SafeAreaView>
            <TextInput
                style={[{marginLeft: 20}]}
                placeholder="UserName"
                underlineColorAndroid="transparent"
            />

            <TextInput
                style={[{marginLeft: 20}]}
                placeholder="Password"
                underlineColorAndroid="transparent"
            />
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Main')
                }}
            >
                <Text>
                    Login
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Register;