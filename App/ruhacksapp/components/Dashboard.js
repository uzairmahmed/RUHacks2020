import * as React from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

import Searchbar from "./SearchBar"
import StoreItem from "./StoreItem"


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 43.518444,
            longitude: -79.824612,
            coordinates: [],
            markers: [
                {
                    latitude: 43.518444,
                    longitude: -79.824612,
                    title: "Marker"
                }
            ],
        }
    }
    static navigationOptions = {
        header: null,
    };


    componentDidMount() {
        Geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    coordinates: this.state.coordinates.concat({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })
                });
            },
            error => {
                Alert.alert(error.message.toString());
            },
            {
                showLocationDialog: true,
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0
            }
        );
    }


    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <Searchbar />
                    <MapView
                        style={styles.mapStyle}
                        region={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: 43.518444,
                                longitude: -79.824612
                            }}
                            title={"title"}
                            description={"description"}
                        />
                    </MapView>
                </View>
                <View style={styles.storeContainer}>
                    <StoreItem />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    mapContainer: {
        backgroundColor: "#eee",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    storeContainer: {
        backgroundColor: "#eee",
        width: "100%",
        alignItems: "center",
    },
    mapStyle: {
        width: (Dimensions.get('window').width) * 0.95,
        height: 250,
    },
});
