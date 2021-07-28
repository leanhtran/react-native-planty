

// 1. Import Animated and Easing
import React from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
} from 'react-native';

// 1. Import LottieView
import LottieView from 'lottie-react-native';

// 2. Change the require path, to the path of the animation downloaded
// from LottieFiles. Mine is in ./assets/bouncing-fruits.json.
const fruitsAnimation = require('../assets/bouncing-fruits.json');

const fruits = [
    'Apple',
    'Orange',
    'Watermelon',
    'Avocado',
    'Blueberry',
    'Coconut',
    'Durian',
    'Mango',
];

const styles = StyleSheet.create({
    flatlist: {

    },
    row: {
        height: 100,
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 3,
        borderBottomColor: 'black',
        backgroundColor: 'white',
    },
    rowTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    // 3. Create a new style
    lottieView: {
        height: 100,
        alignSelf: 'center',
    },
});

function FruitList() {
    function renderItem({ item }) {
        return (
            <View key={item} style={styles.row}>
                <Text style={styles.rowTitle}>{item}</Text>
            </View>
        );
    }

    return (
        // 4. Create a View to include both LottieView and FlatList
        <View>
            {/* 5. Add LottieView */}
            <LottieView
                autoPlay
                style={styles.lottieView}
                source={fruitsAnimation}
            />
            <FlatList
                data={fruits}
                renderItem={renderItem}
                style={[
                    styles.flatlist,
                    {
                        paddingTop: 20,
                    },
                ]}
            />
        </View>
    );
}

export default FruitList;