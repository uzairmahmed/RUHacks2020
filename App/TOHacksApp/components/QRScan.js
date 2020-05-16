import React, { useState, useEffect } from 'react';

import { StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { View, Text, Card, Button, Image } from 'react-native-ui-lib';
import API from './api';
import STYLES from './ComponentStyles.js';

export default function QRScan() {
	const [ hasPermission, setHasPermission ] = useState(null);
	const [ scanned, setScanned ] = useState(false);

	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);
		API.post('/QR', { data, name: 'Farhan' });
		alert(`Bar code has been scanned!`); // API CALL HERE, SEND HUMAN NAME AND $(data)
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View
			style={{
				flex: 1,
				flexDirection: 'column',
				justifyContent: 'flex-end'
			}}
		>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
			/>

			{scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
		</View>
	);
}
