import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, FlatList } from 'react-native';
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
            searchParameter: "EMPTY",
            markers: [],
            stores: [],
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
                this.parseData(response.data.stores)
            }, (error) => {
                console.log(error);
            });
    }

    parseData(data) {
        var i;
        markerArray = []
        valuesArray = []
        for (i = 0; i < data.length; i++) {
            markerArray.push({
                key: data[i].place_id,
                value: {
                    longitude: data[i].longitude,
                    latitude: data[i].latitude,
                    title: data[i].name,
                }
            });
            valuesArray.push({
                key: data[i].place_id,
                value: {
                    title: data[i].name,
                    address: data[i].vicinity,
                    products: data[i].items
                }
            });
        }
        this.setState({ markers: markerArray });
        this.setState({ stores: valuesArray });
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
                            initialRegion={this.state.mapRegion}
                            onRegionChange={this.handleMapRegionChange}
                            showsUserLocation
                        >
                            {this.state.markers.map((marker, index) => (
                                <MapView.Marker
                                    key={index}
                                    coordinate={{
                                        latitude: marker.value.latitude,
                                        longitude: marker.value.longitude
                                    }}
                                    title={marker.value.title}
                                    description={marker.key}
                                />
                            ))
                            }
                        </MapView>
                    </View>
                    <View style={styles.storeContainer}>
                        <FlatList
                            style={styles.storeList}
                            data={this.state.stores}
                            renderItem={(itemData) =>
                                <StoreItem
                                    navigation={navigation}
                                    name={itemData.item.value.title}
                                    address={itemData.item.value.address}
                                    items={itemData.item.value.products}
                                />}
                        />
                    </View>
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: "#dae1e7",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    mapContainer: {
        backgroundColor: "#27496d",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    storeContainer: {
        backgroundColor: "#27496d",
        width: "100%",
        alignItems: "center",
    },
    storeList: {
        width: '100%'
    },
    mapStyle: {
        width: (Dimensions.get('window').width) * 0.95,
        height: 250,
    },
});
