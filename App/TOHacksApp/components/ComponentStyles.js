import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';

const bgColor = '#fff';
const fgColor = '#f0f0f0';
const textColor = '#000';
const accentColor1 = '#e43f5a';
const accentColor2 = '#00ff00';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginTop: 10,
		marginHorizontal: 20,
		marginBottom: 0
	},
	card: {
		flex: 1,
		backgroundColor: bgColor,
		borderColor: accentColor1,
		borderWidth: 3
	},
	login: {
		margin: 30,
		padding: 60
	},
	listCard: {
		flex: 1
	},
	titleText: {
		fontSize: 30,
		padding: 3
	},
	subtitleText: {
		fontSize: 20,
		padding: 3
	},
	blockButton: {
		marginVertical: 10,
		backgroundColor: accentColor1,
		fontSize: 10
	},
	sliderInputArea: {
		alignItems: 'center',
		width: '90%',
		marginHorizontal: 1
	},
	sliderContainer: {
		width: '100%',
		marginHorizontal: 1
	},
	popup: {
		marginHorizontal: 10
	},
	map: {
		justifyContent: 'center',
		flex: 1,
		height: '100%',
		width: '100%',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	store_list: {
		width: '100%'
	},
	store_item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10,
		paddingHorizontal: 40,
		paddingVertical: 15,
		borderRadius: 10
	},
	time_item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20,
		marginVertical: 10,
		padding: 10,
		borderRadius: 10
	}
});

export default styles;
