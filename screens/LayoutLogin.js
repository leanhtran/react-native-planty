import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button, Alert,TouchableOpacity,Image } from "react-native";
import {BlurView} from '@react-native-community/blur';
import {windowHeight, windowWidth, window} from "../utils";
import {BUTTONS, COLORS} from "../constants";


const imageURL = { uri: "https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-la-cay-mau-xanh-dam.jpg" };

const LayoutLogin = (props) => (
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
                onPress={() => {
                  // console.log('tesst',props)
                  props.navigation.navigate('Register')
                }}
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

    </View>

);

const styles = StyleSheet.create({
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