import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button, Dimensions, Image, TouchableOpacity, TextInput, addons } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import axios from 'axios';

import Searchbar from "./SearchBar"
import StoreItem from "./StoreItem"


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapRegion: null,
            loading: false,
            data: [],
            latitude: 0,
            longitude: 0,
            searchParameter:"EMPTY",
            markers: [
                {
                    latitude: 43.518444,
                    longitude: -79.824612,
                    title: "Marker"
                }
            ],
        }
    }

    async componentDidMount() {
        console.log("Getting location")
        await this.getCurrentLocation();
    }

    async getCurrentLocation() {
        this.state.loading = true
        status = await (await Location.requestPermissionsAsync()).status;
        console.log("Location " + status)
        if (status !== 'granted') {
            alert('Permission to access location was denied');
        }
        else {
            const location = await Location.getCurrentPositionAsync({});
            this.setState({
                mapRegion: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                },
                loading: false,
            });

        }
    }

    instance = axios.create({
        baseURL: 'http://192.168.0.23:5000/',
    });

    handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };

    handleSearch = (val) => {
        if (val == "") {
            this.state.searchParameter = "EMPTY"
        } else {
            this.state.searchParameter = val
        }

        this.fetchData()
    }


    async fetchData() {
        const payload = {
            longitude: this.state.mapRegion.longitude,
            latitude: this.state.mapRegion.latitude,
            query: this.state.searchParameter
        }
        await this.instance.post('/mobile/get-nearby/', payload)
          .then((response) => {
            console.log(response.request.response);
          }, (error) => {
            console.log(error);
          });
    }



    render() {
        const { navigation } = this.props;
        const loading = this.state.loading;

        if (this.state.loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator style={{ paddingTop: Dimensions.get('window').height / 3 }} size="large" color="#000" />
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <View style={styles.mapContainer}>
                        <Searchbar
                            search={this.handleSearch}
                        />
                        <MapView
                            style={styles.mapStyle}
                            region={this.state.mapRegion}
                            onRegionChange={this.handleMapRegionChange}
                        >
                        </MapView>
                    </View>
                    <View style={styles.storeContainer}>
                        <StoreItem />
                        <StoreItem />
                        <StoreItem />
                        <StoreItem />
                    </View>
                </View>
            )
        }
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
