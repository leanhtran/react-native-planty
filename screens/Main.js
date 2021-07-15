import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

const App = ({navigation}) => {

    return (
        <View>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("LayoutBuy")
                }}>
                <Text>LayoutBuy</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("LayoutLogin")
                }}>
                <Text>LayoutLogin</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("ListViewLayout")
                }}>
                <Text>ListViewLayout</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("Test")
                }}>
                <Text>Test</Text>
            </TouchableOpacity>


        </View>

    )
}

export default App;