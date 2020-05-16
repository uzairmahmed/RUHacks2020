import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Dashboard extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>MainPage!</Text>
                <Button
                    title="title"
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  