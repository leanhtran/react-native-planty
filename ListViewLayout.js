import React, { useState } from "react";
const imageBackURL={uri: 'https://image-us.24h.com.vn/upload/2-2019/images/2019-05-24/1558632139-277-untitled-26-1558607358-width650height640.jpg'};
const imageMenuURL={uri: 'https://cdn.iconscout.com/icon/free/png-256/menu-2694328-2236324.png'};
const imageMenuAcountURL={uri: 'https://static.thenounproject.com/png/521077-200.png'};
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
    TextInput,
} from "react-native";
import { SearchBar,Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useFonts} from "expo-font";

const DATA = [
    {
        name: "ABC",
        image: "https://free.vector6.com/wp-content/uploads/2021/03/0000000156-cay-xanh-chau-cay-tai-hinh-cay-canh-png-42.png",
        price: 10000,
    },
    {
        name: "ABC",
        image: "https://free.vector6.com/wp-content/uploads/2021/03/0000000125-cay-xanh-chau-cay-tai-hinh-cay-canh-png-11.png",
        price: 10000,
    },
    {
        name: "ABC",
        image: "https://free.vector6.com/wp-content/uploads/2021/03/0000000121-cay-xanh-chau-cay-tai-hinh-cay-canh-png-7.png",
        price: 10000,
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <SafeAreaView style={{width: 250,height:'100%'}}>
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
const ItemImage = ({ item}) => (
    <SafeAreaView style={[{width: 200,height:'100%'},styles.item]}>
        <TouchableOpacity  style={[styles.item,styles.radius,{}]}>
            <Image style={[{
                width:'100%',
                height : '100%',
                // resizeMode: "contain",

            }]} source={{uri: item.image}}/>

        </TouchableOpacity>
    </SafeAreaView>
);

function HomeScreen() {
    const [selectedId, setSelectedId] = useState(null);
    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? '#5e7f51' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{backgroundColor}}
                textColor={{color}}
            />
        );
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                horizontal
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator(
    // {
    //     // tabBarOptions: {
    //     //     style: styles.tabBar,
    //     //     labelStyle: styles.labelStyle,
    //     //     tabStyle: styles.tabStyle
    //     // },
    //     tabStyle: {
    //         justifyContent: 'center'
    //     },
    //     showIcon: false
    // }
);

const App = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [] = useFonts({
        "Lato-Black" : require('./assets/fonts/Lato-Black.ttf'),
        "Lato-Bold" : require('./assets/fonts/Lato-Bold.ttf'),

    })

    const renderItemImage = ({item}) => {
        return (
            <ItemImage
                item={item}
            />
        );
    };

    return (

        <View style={styles.container}>
            {/*Action bar------------------*/}
            <View style={{
                flex: 0.8, flexDirection: "row", justifyContent: "space-between",marginTop: 30,}}>
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
            <View style={[styles.searchSection, styles.radiusCircle, {
                flex: 0.6,
                justifyContent: "flex-start",
                elevation: 30,
            }]}>
                {/*<Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>*/}
                <Image source={searchIcon} style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? COLORS.primary : COLORS.secondary
                }}/>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={(searchString) => {
                        this.setState({searchString})
                    }}
                    underlineColorAndroid="transparent"
                />
            </View>

            {/*List View-------------------*/}
            <View style={[, {flex: 5}]}>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Settings" component={SettingsScreen} />
                    </Tab.Navigator>
                </NavigationContainer>

            </View>


            {/*Popular------------------------*/}
            <View style={[{flex: 3}]}>
                {/*Text--------------------*/}
                <View style={[{flex: 1, flexDirection: "row", justifyContent: "space-between"}]}>
                    <Text style={[styles.textBold]}>Popular</Text>
                    <TouchableOpacity style={{alignItems: "flex-end"}}>
                        <Image style={[styles.radiusCircle, {
                            width: 30,
                            height: 30,
                        }]}
                               source={imageMenuURL}/>
                    </TouchableOpacity>
                </View>
                <View style={[{flex:4}, , styles.itemImage]}>
                    <FlatList
                        horizontal
                        data={DATA}
                        renderItem={renderItemImage}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />

                </View>


            </View>

        </View>
    );
}, styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f3f3",
        // marginTop: StatusBar.currentHeight || 0,

    },
    item: {
        padding: 20,
        marginVertical: 8,
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
    textBold: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 20,
        color: "#827873",
    },
    textTree: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    textBtn: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
    },
    radiusBtn: {
        borderRadius: 60,
        backgroundColor: "#152824",
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30
    },
    radiusBorder: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#d4d3d2',
        marginRight: 10,
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
        // justifyContent: "center",
        // alignItems: "center",
        height: "100%",
        textAlign: "center",
    },
});


export default App;