import React, { useState } from "react";
import {ImageBackground, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput,Modal} from "react-native";
import {windowHeight, windowWidth, window} from "../utils";
import {BUTTONS, COLORS, TEXTS} from "../constants";

import {Overlay } from 'react-native-elements';
import { registerRootComponent } from "expo";


const imageURL = { uri: "https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-la-cay-mau-xanh-dam.jpg" };

const LayoutLogin = (props) => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [visible, setVisible] = useState(false);
  const setOverlay = () => {
    setVisible(!visible);
  };
  return (

    <View style={styles.containerBackground }>
      {/* ---------------------------- */}

      <ImageBackground
          source={imageURL}
          resizeMode="cover"
          style={ [styles.radiusImage] }>
        <View style={[styles.containerBackground]}>

          {/*Text--------------*/}
          <View style={[{flex: 3}]}>

            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <Text style={[styles.textTitle,{fontSize: 65}]}>Planty</Text>
              <Text style={[styles.textH2,{fontSize: 30,marginTop: -30}]}>Increase your natural beaty</Text>
            </View>
          </View>

          {/*Button--------------*/}
          <View style={[{flex: 1.1}]}>
            <TouchableOpacity
                style={[{
                  ...BUTTONS.btnRadius,
                  backgroundColor: "#000000a0",
                }]}
                onPress={setOverlay}
                underlayColor='#fff'>
              <Text style={[styles.textBtn,{color:"#fff"}]}
              >Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[{
                  ...BUTTONS.btnRadius,
                  backgroundColor: COLORS.white,
                }]}
                onPress={() => props.navigation.navigate("Login")}
                underlayColor='#fff'>

              <Text style={styles.textBtn}
                    color="black">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* ------------------------------------------ */}
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <Text style={{
          textAlign: "center",
          color: "black",
          fontSize: 25,
          marginTop: 12,
          fontFamily: "Lato-Regular",
        }}>Terms of Service</Text>
      </View>


        {/* --------------Overlay------------- */}

        {visible?(

      <Overlay 
      // isVisible={visible}
       onBackdropPress={setOverlay} fullScreen={false}
          animationType="slide"
          backdropStyle={{ color:'#000000a8', }}
          overlayStyle={{borderRadius: 30}}
        >
          <View>

            <View style={[{
              ...TEXTS.textRadius,
              ...TEXTS.shadow,
              backgroundColor: COLORS.white,
              width: windowWidth / 1.5,
            }]}>
              <TextInput style={[{
                ...TEXTS.textInput,
              }, styles.input]}
                placeholder="UserName"
                value={username}
                
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
                }, styles.input]}
                secureTextEntry={true}
                placeholder="Password"
                value={password}
              
                underlineColorAndroid="transparent"
              />
            </View>

            <TouchableOpacity
              style={{
                ...BUTTONS.btnRadius,
                ...BUTTONS.shadow,
                backgroundColor: COLORS.white,
              }}
              onPress={() => {
                setOverlay()
                
                props.navigation.navigate('Main')
              }}
            >
              <Text style={{ ...TEXTS.textBtn }}>
                Register
              </Text>
            </TouchableOpacity>

        </View>
        
      </Overlay>
      ):null}
    </View>

)}, styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",

  },
  containerBackground:{
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 75,
    justifyContent: "center",

  },
  textTitle: {
    color: "white",
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Lato-Bold"

  },
  textH2: {
    color: "white",
    lineHeight: 84,
    fontWeight: "normal",
    textAlign: "center",
    fontFamily: "Lato-Light"

  },
  textBtn: {
    fontSize: 25,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Lato-Bold"
  },

  radiusImage: {
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    flex: 12,
    overflow: 'hidden'
  },

});

export default LayoutLogin;