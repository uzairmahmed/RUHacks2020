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
                        size={25}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "#FFF",
        width: "75%",
        height:50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 15,
        opacity: 1,
        marginTop: 50,
        position:"relative",

    },
    textInput: {
        margin: 10,
        width: 150,
        alignSelf:"center"
    },
    icon: {
        width: 25,
        height: 25,
        marginHorizontal:25,
        alignSelf: "center",
        justifyContent: "space-between",
    },
});
