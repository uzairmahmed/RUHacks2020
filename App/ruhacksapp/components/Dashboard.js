import * as React from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Image, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';


export default class Dashboard extends React.Component {
    static navigationOptions = {
        header: null,
    };
    
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle} />

                <TouchableOpacity style={styles.storeContainer}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../assets/user.jpg')}
                    />
                    <Text style={styles.title}>
                        Store Name
                    </Text>
                    <Text style={styles.title}>
                        Quantity
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    storeContainer: {
        backgroundColor: "#eee",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-evenly"
    },
    mapStyle: {
        width: (Dimensions.get('window').width) * 0.95,
        height: 250,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
