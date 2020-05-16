import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { View, Text, Card, TouchableOpacity } from 'react-native-ui-lib';

import STYLES from './ComponentStyles.js';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			hour1: this.props.hour1,
		};
	}

	sendChosenTimeSlot = () => {
		console.log(this.state.hour1);
	}
	
	render() {
		return (
			<View>
				<TouchableOpacity onPress={this.sendChosenTimeSlot}>
					<Card style={STYLES.time_item}>
						<Text>{this.props.name || 'Missing Name'}</Text>
						<View style={styles.inlineText}>
							<Text>{this.props.hour1}</Text>
						</View>
					</Card>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	inlineText: {
		display: 'flex',
		flexDirection: 'row',
		textAlign: 'center'
	}
});
