import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';


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
        return (
            <View style={styles.container}>

                <View style={styles.v1}>
                    <Image
                        style={styles.profileIcon}
                        source={require('../assets/user.jpg')}
                    />

                    <Text style={styles.title}>
                        Welcome Back!
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
                        placeholder="Password"
                        style={styles.textInput}
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                    />

                    <Button
                        title="Login"
                        onPress={() => navigation.navigate('Home')}
                        style={styles.button}
                    />

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
        borderRadius: 100

    },
    textInput: {
        borderColor: '#27496d',
        borderWidth: 0.5,
        height: 40,
        margin: 10,
        padding: 5,
        width: 200,

    },
    button: {
        backgroundColor: '#00909e',
        borderRadius: 0,
        height: 25,
        width: 90,
    },
});
