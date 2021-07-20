import React, {useRef, useState} from "react";
const imageBackURL={uri: 'https://image-us.24h.com.vn/upload/2-2019/images/2019-05-24/1558632139-277-untitled-26-1558607358-width650height640.jpg'};
const imageMenuURL={uri: 'https://cdn.iconscout.com/icon/free/png-256/menu-2694328-2236324.png'};
const imageMenuAcountURL={uri: 'https://static.thenounproject.com/png/521077-200.png'};
import {windowHeight, windowWidth, window} from "../utils";

export const searchIcon = require("../assets/icons/search.png");
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    TextInput, Platform,
} from "react-native";
import { SearchBar,Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useFonts} from "expo-font";
import Carousel, {ParallaxImage} from "react-native-snap-carousel";
import {Touchable} from "react-native-web";

const DATA = [
    {
        id: "01",
        name: "ABC",
        image: "https://free.vector6.com/wp-content/uploads/2021/03/0000000156-cay-xanh-chau-cay-tai-hinh-cay-canh-png-42.png",
        price: 10000,
    },
    {
        id: "02",
        name: "edgdkufghkdfghkdfghkdfhgkdfhgdkfhgkdfhgdkghdkfghkdfghdkfg",
        image: "https://free.vector6.com/wp-content/uploads/2021/03/0000000125-cay-xanh-chau-cay-tai-hinh-cay-canh-png-11.png",
        price: 10000,
    },
    {
        id: "03",
        name: "ABC",
        image: "https://free.vector6.com/wp-content/uploads/2021/03/0000000121-cay-xanh-chau-cay-tai-hinh-cay-canh-png-7.png",
        price: 10000,
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <SafeAreaView style={[{width:'65%',height:'100%'},styles.shadow]}>
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor,styles.radius,{
            flex: 1,
            lexDirection: 'collum',

            elevation: 15,
        }]}>
            <Image style={[{
                flex:5,
                width:'100%',
                height :'100%',
                resizeMode: "contain",
            }]} source={{uri: item.image}}/>

            <Text style={[styles.title, textColor,{flex:1}]}>{item.name}</Text>
        </TouchableOpacity>
    </SafeAreaView>
);
const ItemImage = ({ item}, parallaxProps) => (
    <SafeAreaView style={[{width:'110%',height:'100%'},styles.item,styles.shadow]}>
        <TouchableOpacity  style={[styles.item,styles.radius]}>
            <Image style={[{
                width:'100%',
                height : '100%',
                resizeMode: "contain",

            }]} source={{uri: item.image}}/>

            {/*<ParallaxImage*/}
            {/*    source={{uri: item.image}}*/}
            {/*    itemHeight={300}*/}
            {/*    containerStyle={styles.imageContainer}*/}
            {/*    style={[styles.image,{height: 300,width: 300}]}*/}
            {/*    parallaxFactor={0.4}*/}
            {/*    {...parallaxProps}*/}
            {/*/>*/}
        </TouchableOpacity>
    </SafeAreaView>
);

const ListViewLayout = (props) => {


    const [selectedId, setSelectedId] = useState(null);
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);
    const[item, setItem]=useState(DATA)

    const [] = useFonts({
        "Lato-Black" : require('../assets/fonts/Lato-Black.ttf'),
        "Lato-Bold" : require('../assets/fonts/Lato-Bold.ttf'),

    })
    const renderItem = ({item}) => {
        return (
            <Item
                item={item}
                onPress={() => props.navigation.navigate("LayoutBuy",item)}
            />
        );
    };

    const renderItemImage = ({item}) => {
        return (
            <ItemImage
                item={item}
            />
        );
    };

    return (

        <SafeAreaView style={styles.container}>
            {/*Action bar------------------*/}
            <View style={{
                flex: 0.8, flexDirection: "row", justifyContent: "space-between",marginTop: 5,}}>
                <TouchableOpacity style={{elevation:15}}>
                    <Image style={[styles.radiusCircle,
                        {
                            width: 40,
                            height: 40,
                        }]}
                           source={imageBackURL}/>

                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: "flex-end", elevation: 15}}>
                    <Image style={[styles.radiusCircle, {
                        width: 30,
                        height: 30,
                    }]}
                           source={imageMenuAcountURL}/>
                </TouchableOpacity>
            </View>

            {/*Search----------------*/}
            <View style={[styles.searchSection, styles.radiusCircle,styles.shadow, {
                flex: 0.6,
                justifyContent: "flex-start",
                elevation: 30,
            }]}>
                {/*<Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>*/}
                <Image source={searchIcon} style={{
                    marginLeft: 30,
                    width: 25,
                    height: 25,

                }}/>
                <TextInput
                    style={[styles.input,{marginLeft: 20}]}
                    placeholder="Search"
                    underlineColorAndroid="transparent"
                />
            </View>

            {/*List View-------------------*/}
            <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{flex:1, flexDirection: "row", justifyContent: "flex-start"}}>
                    <View style={{width : "15%",
                        borderBottomRightRadius: 10,
                        backgroundColor: 'transparent'
                    }}>
                        <View style={{
                            borderBottomRightRadius: 10,
                            backgroundColor: 'transparent'
                            }}>
                            <TouchableOpacity>
                                <Text style={[styles.textVertical,{color: "#4b5f43"}]}>Outdoor</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[styles.textVertical,]}>Indoor</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[styles.textVertical,]}>Top</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                    {/*<FlatList*/}
                    {/*    horizontal*/}
                    {/*    data={DATA}*/}
                    {/*    renderItem={renderItem}*/}
                    {/*    showsHorizontalScrollIndicator={false}*/}
                    {/*    keyExtractor={(item) => item.id}*/}
                    {/*    extraData={selectedId}*/}
                    {/*    style={{width: "85%"}}*/}
                    {/*/>*/}

                    <Carousel
                        data={DATA}
                        layout={"stack"}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        sliderWidth={300}
                        itemWidth={500}

                    />
                </View>

            </View>


            {/*Popular------------------------*/}
            <View style={[{flex: 2.5, flexDirection: "column"}]}>
                {/*Text--------------------*/}
                <View style={[{flex: 1, flexDirection: "row", justifyContent: "space-between", backgroundColor: "transparent"}]}>
                    <Text style={[styles.textBold]}>Popular</Text>
                    <TouchableOpacity style={{alignItems: "flex-end"}}>
                        <Image style={[styles.radiusCircle, {
                            width: 30,
                            height: 30,
                        }]}
                               source={imageMenuURL}/>
                    </TouchableOpacity>
                </View>
                <View style={[{flex:4, alignContent: "flex-start"}, styles.itemImage]}>
                    <Carousel
                        ref={carouselRef}
                        sliderWidth={windowWidth}
                        // sliderHeight={300}
                        itemWidth={windowWidth/1.9}
                        data={DATA}
                        renderItem={renderItemImage}
                        hasParallaxImages={true}
                        firstItem={1}
                        slideStyle={{alignContent: "flex-start"}}

                    />

                </View>


            </View>

        </SafeAreaView>
    );
}, styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f3f3",
        // marginTop: StatusBar.currentHeight || 0,

    },
    item: {
        // padding: 20,
        // marginVertical: 10,
        marginBottom: '5%',
        marginHorizontal: 16,
        shadowColor: "black",
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        color: "#98ab90",
        fontFamily: "Lato-Bold"
    },
    radius: {
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: "#ffff"
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    image: {
        flex: 1,
        borderRadius: 75,
        justifyContent: "center",

    },
    textVertical: {
        transform: [{ rotate: '90deg' }], width:120,
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 100,
        marginLeft: -30,
        color: "#827873",
    },
    textBold: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 20,
        color: "#827873",
    },
    radiusCircle: {
        borderRadius: 100,
        backgroundColor: "#ffff",
        // marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    itemImage: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    imageParallax: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
});


export default ListViewLayout;