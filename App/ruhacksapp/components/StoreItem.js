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

                <Icon
                    name="ios-card"
                    size={35}
                    style={styles.icon}
                />

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
        backgroundColor: "#FFF",
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 20,

    },
    tinyLogo: {
        borderRadius: 100,
        margin: 50,
    },
});
