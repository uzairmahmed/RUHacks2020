import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';


export default class StoreItem extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.storeItem}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/user.jpg')} />

                <Text style={styles.title}>
                    Store Name
                </Text>

                <Text style={styles.title}>
                    Quantity
                </Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    storeItem: {
        backgroundColor: "#dae1e7",
        width: "92%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 4,
        margin: 5,
        borderRadius: 8,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
