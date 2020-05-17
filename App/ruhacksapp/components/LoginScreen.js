import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput, TouchableOpacity } from 'react-native';


export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        const { navigation } = this.props;
        const onPress = () => navigation.navigate('Home');
        return (
            <View style={styles.container}>

                <View style={styles.v1}>
                    <Image
                        style={styles.profileIcon}
                        source={require('../assets/mylogo.png')}
                    />

                    <Text style={styles.title}>
                        Inventory Investigator
                </Text>

                </View>
                <View style={styles.v2}>
                    <TextInput
                        placeholder="Username"
                        style={styles.textInput}
                        onChangeText={text => this.setState({ username: text })}
                        value={this.state.username}
                    />

                    <TextInput
                        secureTextEntry={true}
                        textContentType="password"
                        placeholder="Password"
                        style={styles.textInput}
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPress}
                    >
                        <Text>Login.</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dae1e7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    v1: {
        flex: 1,
        backgroundColor: '#dae1e7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    v2: {
        flex: 1,
        backgroundColor: '#dae1e7',
    },
    title: {
        fontSize: 25,
        padding: 10,
        color: '#27496d',
    },
    profileIcon: {
        backgroundColor: '#dae1e7',
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 20

    },
    textInput: {
        borderColor: '#27496d',
        borderBottomWidth: 0.5,
        fontSize: 20,
        height: 40,
        margin: 10,
        padding: 5,
        width: 200,

    },
    button: {

        alignItems: "center",
        backgroundColor: "#FFF",
        marginVertical:50,
        padding: 20,
        borderRadius:20
    },
});
