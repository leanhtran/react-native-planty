import React, { useState } from "react";
import {Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView} from "react-native";
import {BUTTONS} from "../constants";
const imageURL={uri: 'https://ecogarden.net.vn/wp-content/uploads/2019/06/dba25ce8c08ceb84c8a471ab7fd0df46.jpg'};
const imageBackURL={uri: 'https://png.pngtree.com/png-vector/20190501/ourlarge/pngtree-vector-back-icon-png-image_1009850.jpg'};
const imageMenuURL={uri: 'https://cdn.iconscout.com/icon/free/png-256/menu-2694328-2236324.png'};
const LayoutBuy = ({ route, navigation })=>{
    const[item,setItem]=useState(null);
    React.useEffect(() => {
        const items = route.params;
        setItem(items)

    })
    return(
    <SafeAreaView style={styles.container}>
        {/*Action bar------------------*/}
        <View style={{flex: 0.4, flexDirection: "row", justifyContent: "space-between"}}>
            <TouchableOpacity onPress={()=> navigation.goBack()}
            style={{}}>
                <Image style={[styles.radiusCircle,
                    {
                        width:30,
                        height : 30,
                    }]}
                       source={imageBackURL}/>

            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: "flex-end"}}>
                <Image style={[styles.radiusCircle,{
                    width:30,
                    height : 30,
                }]}
                       source={imageMenuURL}/>
            </TouchableOpacity>
        </View>
        {/*View Image-------------------*/}

        <View style={[{
            flex: 2.5,flexDirection: 'row'}]}>
            <Image style={{
                flex: 3,
                marginRight:10,
                // resizeMode: "contain",
                justifyContent: "flex-start",
            }}
                   source={{uri: item?.image}}>
            </Image>
            {/*Text--------------*/}
            <View style={{flex: 1}}>
                <Text style={[styles.textTree,{marginRight: 10}]}>Height</Text>
                <View style={[styles.radiusBorder]}>
                    <Text style={[styles.textTree]}>22"</Text>
                </View>

                <Text style={[styles.textTree,{marginRight: 10}]}>Plant</Text>
                <View style={[styles.radiusBorder]}>
                    <Text style={[styles.textTree]}>Italian</Text>
                </View>

                <Text style={[styles.textTree,{marginRight: 10}]}>Rating</Text>
                <View style={[styles.radiusBorder]}>
                    <Text style={[styles.textTree]}>4.9</Text>
                </View>

                <Text style={[styles.textTree,{marginRight: 10}]}>Warmth</Text>
                <View style={[styles.radiusBorder]}>
                    <Text style={[styles.textTree]}>15 cc</Text>
                </View>

            </View>
        </View>

        <View style={[styles.radius,{flex: 1.5,marginBottom: '2%'}]}>
            {/*Text--------------------*/}
            <View style={[{flex: 5}]}>
                <Text style={[styles.textGreen]}>
                    Outdoor Plant-XS
                </Text>
                <Text style={styles.textDescription}>
                    Secundum and Volum: Three lamps that are constructed
                    by the same principles and yet every lamp stands out
                </Text>
            </View>
            {/*Button---------------------*/}
            <View style={[{flex: 2, marginBottom: '3%'}]}>
                <TouchableOpacity style={[{
                    ...BUTTONS.btnRadius,
                    backgroundColor: "#152824",
                }]}>
                    <Text style={[styles.textBtn,{color: "#fff"}]}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>

    </SafeAreaView>

)};
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff"
    },
    image: {
        flex: 1,
        borderRadius: 75,
        justifyContent: "center",

    },
    textBold:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 3,
        marginBottom: 3
    },
    textGreen:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: '5%',
        marginBottom: '2%',
        marginLeft: 10,
        marginRight: 10,
        color: "#48663b"
    },
    textDescription :{
        fontSize: 18,
        textAlign: "center",
        marginTop: '1%',
        marginBottom: '3%',
        marginLeft: 10,
        marginRight: 10
    },
    textTree:{
        fontSize: 16,
        textAlign: "center",
        marginTop: '11%',
        marginBottom: '11%',
    },
    textBtn: {
        fontSize: 25,
        lineHeight: 60,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Lato-Bold"
    },
    radiusBtn: {
        borderRadius: 60,
        backgroundColor: "#152824",
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30
    },
    radius:{
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: "#eaeaea"
    },
    radiusBorder:{
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#d4d3d2',
        marginRight: 10,
    },
    radiusCircle:{
        borderRadius: 100,
        backgroundColor: "#ffff",
        marginTop: 35,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    }
});
export default LayoutBuy;
