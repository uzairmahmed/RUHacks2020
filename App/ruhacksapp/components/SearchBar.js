import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';


export default class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    search() {
        this.props.search(this.state.searchValue)
    }

    render() {
        return (
            <View style={styles.searchBar}>
                <TextInput
                    placeholder="Search."
                    value={this.state.searchValue}
                    style={styles.textInput}
                    onChangeText={text => this.setState({ searchValue: text })}
                />
                <TouchableOpacity onPress={() => this.search()}>
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
        width: "97%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 15,
        opacity: 0.25,
    },
    icon: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
});
