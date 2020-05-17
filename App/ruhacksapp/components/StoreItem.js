import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, Button } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';


export default class StoreItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
        var name = this.props.name
        var address = this.props.address
        var products = this.props.items
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Store', {
                    storeName: name,
                    storeAddress: address,
                    storeProducts: products
                })}
                style={styles.storeItem}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/user.jpg')} />

                <Text style={styles.title}>
                    {name}
                </Text>

                <Text style={styles.title}>
                    {address}
                </Text>
            </TouchableOpacity >
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
