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

                <Image
                    style={styles.profileIcon}
                    source={require('../assets/user.jpg')}
                />

                <Text
                    style={styles.title}>
                    
                    Welcome Back!
                    </Text>

                <TextInput
                    placeholder="Username."
                    style={styles.textInput}
                    onChangeText={text => this.setState({ username: text })}
                    value={this.state.username}
                />

                <TextInput
                    placeholder="Password."
                    style={styles.textInput}
                    onChangeText={text => this.setState({ password: text })}
                    value={this.state.password}
                />

                <Button
                    title="Login."
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    title: {
        fontSize:25
    },
    profileIcon: {
        width: 50,
        height: 50,
    },
    textInput: {
        borderWidth:1
    }
});