import React, { useState } from "react";
const imageBackURL={uri: 'https://png.pngtree.com/png-vector/20190501/ourlarge/pngtree-vector-back-icon-png-image_1009850.jpg'};
const imageMenuURL={uri: 'https://cdn.iconscout.com/icon/free/png-256/menu-2694328-2236324.png'};
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    TextInput
} from "react-native";

const DATA = [
    {
        name: "ABC",
        image: "https://khbvptr.vn/wp-content/uploads/2020/10/ngu-gia-bi-1.jpg",
        price: 10000,
    },
    {
        name: "ABC",
        image: "https://khbvptr.vn/wp-content/uploads/2020/10/ngu-gia-bi-1.jpg",
        price: 10000,
    },
    {
        name: "ABC",
        image: "https://khbvptr.vn/wp-content/uploads/2020/10/ngu-gia-bi-1.jpg",
        price: 10000,
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <SafeAreaView style={{maxWidth: 250,maxHeight:500}}>
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor,styles.radius,{
            flex: 1,
            lexDirection: 'collum',
        }]}>

            <Image style={[{
                width:250,
                height : 400,
            }]} source={{uri: item.image}}/>

            <Text style={[styles.title, textColor]}>{item.name}</Text>
        </TouchableOpacity>
    </SafeAreaView>
);

const App = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <View style={styles.container}>
            {/*Action bar------------------*/}
            <View style={{flex: 2, flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity style={{}}>
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

            {/*Search----------------*/}
            <View style={{flex: 1}}>
                <TextInput
                    placeholder="Search"
                />
            </View>

            {/*List View-------------------*/}
            <SafeAreaView style={[styles.container,{flex: 5}]}>
                <FlatList
                    horizontal
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </SafeAreaView>


            {/*Popular------------------------*/}
            <View style={[styles.radius,{flex: 1.5}]}>
                {/*Text--------------------*/}

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    radius:{
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: "#eaeaea"
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
        marginTop: 30,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        color: "#48663b"
    },
    textDescription :{
        fontSize: 18,
        textAlign: "center",
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 10,
        marginRight: 10
    },
    textTree:{
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    textBtn:{
        fontSize: 18,
        textAlign: "center",
        fontWeight:"bold",
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

export default App;