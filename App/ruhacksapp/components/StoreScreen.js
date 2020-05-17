import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';


export default class LoginPage extends React.Component {
    static navigationOptions = {
        header: null,
    };

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

                <Image
                    style={styles.profileIcon}
                    source={require('../assets/user.jpg')}
                />

                <Text style={styles.title}>
                    Welcome Back!
                </Text>

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
    },
    textInput: {
        borderColor: '#27496d',
        borderWidth: 0.5,
        height: 30,
        margin: 5,
        padding: 5,
        width: 150,

    },
    button: {
        backgroundColor: '#00909e',
        borderRadius: 0,
        height: 25,
        width: 90,
    },
});
