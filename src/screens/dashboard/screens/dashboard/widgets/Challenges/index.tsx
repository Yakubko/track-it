import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Card, Typography } from '@components/core';

import Chart from './Chart';

export default function Challenges() {
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
