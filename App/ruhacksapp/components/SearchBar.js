import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';


export default class Searchbar extends React.Component {
    render() {
        return (
            <View style={styles.searchBar}>
                <TextInput
                    placeholder="Search."
                    style={styles.textInput}
                />
                <TouchableOpacity >
                    <Icon
                        name="ios-search"
                        size={20}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "#eee",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    icon: {
        width: 50,
        height: 50,
    },
});
