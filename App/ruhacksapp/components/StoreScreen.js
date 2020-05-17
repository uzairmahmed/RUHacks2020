import * as React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, TextInput } from 'react-native';

import Item from "./Item"

export default class StorePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeData: props.route.params,
            productsArrayParsed:[]
        }
    }

    componentDidMount() {
        console.log("Getting Items")
        this.parseData(this.state.storeData.storeProducts)
    }

    parseData(items) {
        var i
        var products = []
        console.log(items)
        for (i = 0; i < items.length; i++){
            products.push({
                key: Math.random().toString(),
                value: {
                    name: items[i].name,
                    supply: items[i].supply,
                    demand: items[i].demand,
                }
            });
        }
        this.setState({ productsArrayParsed: products });
    }


    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View styles={styles.profilecontainer}>
                    <Image
                        style={styles.profileIcon}
                        source={require('../assets/user.jpg')}
                    />
                    <Text
                        style={styles.title}>
                        {this.state.storeData.storeName}
                    </Text>

                    <Text style={styles.title}>
                        {this.state.storeData.storeAddress}
                    </Text>
                </View>
                <View style={styles.storeContainer}>
                    <FlatList
                        style={styles.storeList}
                        data={this.state.productsArrayParsed}
                        renderItem={(itemData) =>
                            <Item
                                name={itemData.item.value.name}
                                supply={itemData.item.value.supply}
                                demand={itemData.item.value.demand}
                            />}
                        />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: "center",
        backgroundColor: "#dae1e7",
        justifyContent: 'flex-start',
    },
    title: {
        textAlign:"center",
        fontSize: 25,
        padding: 10,
        color: '#27496d',
    },
    profilecontainer: {
        padding: 50,
        flexDirection:"column",
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    profileIcon: {
        alignSelf:"center",
        backgroundColor: '#dae1e7',
        width: 150,
        height: 150,
        margin: 10,
        borderRadius:100
    },
    storeContainer: {
        backgroundColor: "#27496d",
        width: "100%",
        alignItems: "center",
    },
});
