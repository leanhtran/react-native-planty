import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button, Alert,TouchableOpacity,Image } from "react-native";
import {BlurView} from '@react-native-community/blur';
import {windowHeight, windowWidth, window} from "../utils";
import Test from "./Test"


const imageURL = { uri: "https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-la-cay-mau-xanh-dam.jpg" };

const LayoutLogin = (props) => (
    <View style={styles.containerBackground }>
      {/* ---------------------------- */}

      <ImageBackground
          source={imageURL}
          resizeMode="cover"
          style={ [styles.radiusImage] }>
        <View style={[styles.containerBackground]}>
          <View style={[{flex: 2}]}>

            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <Text style={[styles.text,{fontSize: 65}]}>Planty</Text>
              <Text style={[styles.text,{fontSize: 20,marginTop: -30}]}>Increase your natural beaty</Text>
            </View>
          </View>

          <View style={[{flex: 1}]}>

            <TouchableOpacity
                style={[styles.radius,styles.tranparent]}
                onPress={() => {
                  // console.log('tesst',props)
                  props.navigation.navigate('Test')
                }}
                underlayColor='#fff'>
              <Text style={[styles.textBtn,{color:"#fff"}]}
              >Sign in</Text>
            </TouchableOpacity>



            <TouchableOpacity
                style={[styles.radius,styles.btnLogin]}
                onPress={() => this.props.navigation.navigate("Test")}
                underlayColor='#fff'>

              <Text style={styles.textBtn}
                    color="black">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* ------------------------------------------ */}
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <Text style={{textAlign: "center",color: "black",fontSize: 25, marginTop: 12}}>Terms of Service</Text>
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
  text: {
    color: "white",
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "lato-italic"

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
  btnLogin: {
    backgroundColor: "#fff",
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
  radiusImage: {
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    flex: 12,
    overflow: 'hidden'
  },
  tranparent: {
    backgroundColor: "#000000a0"
  }
});

export default LayoutLogin;