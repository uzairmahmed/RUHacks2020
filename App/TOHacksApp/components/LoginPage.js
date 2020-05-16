import React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text, Card, TextField, Button } from 'react-native-ui-lib';

import { NativeRouter, Route, Link, useHistory } from "react-router-native";

import STYLES from "./ComponentStyles.js"

export default function LoginPage() {
    const history = useHistory();

    function goToDashBoard () {
        history.push('/dash');
    }

    return (
        <NativeRouter>
            <View style={STYLES.container}>
                <Card center style={STYLES.login, STYLES.card}>
                    <Text style={STYLES.titleText} > Login.</Text>
                    <TextField
                        centered
                        placeholder="Username."></TextField>
                    <TextField
                        centered
                        placeholder="Password."></TextField>

                    <Button label="Login" onPress={goToDashBoard.bind()} style={STYLES.blockButton} ></Button>

                </Card>
            </View>
        </NativeRouter> 
    );
}

