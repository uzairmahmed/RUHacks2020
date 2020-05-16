import React, { Component } from 'react';

import { Text, View, FlatList } from 'react-native';

import { Colors, Card, Button, Slider, DateTimePicker } from 'react-native-ui-lib';

import STYLES from './ComponentStyles.js';
import TimeSlot from './TimeSlot.js';
import API from './api.js';

export default class StoreBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			times: [],
			date: [2020, 5, 3],
			length: 10,
			chosenTimeSlot: []
		};
	}

	updateTimeSlot = (newValue) => {
		this.setState({ chosenTimeSlot: newValue });
	};

	getAvailableTimes = () => {
		API.get('/availabletimes').then(({ data }) => {
			var i;
			var tempArr = [];
			for (i = 0; i < data.length; i++) {
				tempArr.push({ key: Math.random().toString(), value: data[i].toString() });
			}
			this.setState({ times: tempArr });
		});
	};

	onSliderValueChange = (value) => {
		this.setState({ length: value });
	};

	onDateValueChange = (value) => {
		this.setState({ date: [value.getFullYear(), value.getMonth(), value.getDate()] });
	};

	requestBooking = () => {
		console.log('data to be sent');
		// console.log(this.props.storename);
		// // console.log(this.props.username);
		// console.log(this.state.date[0]);
		// console.log(this.state.date[1]);
		// console.log(this.state.date[2]);
		// console.log(this.state.length);
		const { storename, username } = this.props;

		API.post('/requestBooking', {
			storename,
			username,
			year: this.state.date[0],
			month: this.state.date[1],
			day: this.state.date[2],
			length: this.state.length
		});
		// ALL OF THESE ARE PUSHED TO THE BACKEND
	};

	render() {
		return (
			<View style={STYLES.container}>
				<Card center style={{ ...STYLES.popup, ...STYLES.card, borderWidth: 0 }}>
					<Text style={{ ...STYLES.titleText, padding: 0 }}> Book a Time</Text>
					<Text>{this.props.storename || 'Missing Address'}</Text>

					<Text style={{ ...STYLES.subtitleText, marginTop: 10 }}>Choose a Date</Text>

					<DateTimePicker
						value={new Date(2020, 4, 3, 0, 0, 0, 0)}
						mode={'date'}
						display="default"
						onChange={this.onDateValueChange}
					/>
					<View row centerV style={STYLES.sliderInputArea}>
						<Text style={{ ...STYLES.subtitleText, marginTop: -20 }}>Enter a Booking Length</Text>
						<Slider
							onValueChange={this.onSliderValueChange}
							value={10}
							minimumTrackTintColor={Colors.dark10}
							maximumTrackTintColor={Colors.dark60}
							thumbTintColor={Colors.dark10}
							minimumValue={0}
							maximumValue={60}
							step={10}
							containerStyle={STYLES.sliderContainer}
						/>
						<Text>{this.state.length} minutes</Text>
						<Button
							label="Choose an Available Time Slot"
							onPress={this.getAvailableTimes}
							style={STYLES.blockButton}
						/>
					</View>

					<View center style={{ ...STYLES.listCard, ...{ width: '100%', backgroundColor: '#eee' } }}>
						<FlatList
							style={STYLES.store_list}
							data={this.state.times}
							renderItem={(itemData) => (
								<TimeSlot
									name={this.state.date[1] + '/' + this.state.date[2] + '/' + this.state.date[0]}
									hour1={itemData.item.value}
									updater={this.updateTimeSlot}
								/>
							)}
						/>
					</View>

					<View>
						<Button label="Book!" onPress={this.requestBooking} style={STYLES.blockButton} />
					</View>
				</Card>
			</View>
		);
	}
}
