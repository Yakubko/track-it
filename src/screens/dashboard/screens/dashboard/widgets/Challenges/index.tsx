import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card, Typography } from '../../../../../../components';

import Chart from './Chart';

export default function Challenges() {
	const data = [85, 85, 86, 87, 85, 88, 88, 90.1, 90.5];

	const handlePress = () => {
		// navigation.navigate('Bodyweight');
	};

	return (
		<Card>
			<TouchableOpacity onPress={handlePress}>
				<View style={{ padding: 10, paddingBottom: 5, flexDirection: 'row' }}>
					<View style={{ width: '50%' }}>
						<Typography bold style={{ paddingTop: 5, paddingBottom: 10 }}>
							Challenges
						</Typography>
					</View>
				</View>
			</TouchableOpacity>
			<Chart />
		</Card>
	);
}
