import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';


export default class StoreItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var name = this.props.name
        var supply = this.props.supply
        var demand = this.props.demand
        return (
            <View style={styles.storeItem}>
                <Icon
                    name="ios-basket"
                    size={25}
                    style={styles.icon}
                />

                <Text style={styles.title}>
                    {name}
                </Text>

                <Text style={styles.title}>
                    Supply {supply}
                </Text>

                <Text style={styles.title}>
                    Demand {demand}
                </Text>

                <TouchableOpacity>
                    <Icon
                        name="ios-add-circle-outline"
                        size={25}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View >
        )
    }
}


const styles = StyleSheet.create({
    storeItem: {
        backgroundColor: "#fff",
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 10,
        margin: 5,
        borderRadius: 8,
    },
    button: {
        borderRadius: 100
    },

});
