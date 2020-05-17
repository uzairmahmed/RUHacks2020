import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
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
                <Text style={styles.title}>
                    {name}
                </Text>

                <Text style={styles.title}>
                    Supply {supply}
                </Text>

                <Text style={styles.title}>
                    Demand {demand}
                </Text>


                <Button
                    title="+"
                />
            </View >
        )
    }
}


const styles = StyleSheet.create({
    storeItem: {
        backgroundColor: "#fff",
        width: "92%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 4,
        margin: 5,
        borderRadius: 8,
    },
    button: {

        borderRadius:100
    },
    
});
