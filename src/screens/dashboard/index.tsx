import * as React from 'react';
import { ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Typography } from '../../components';

import { Bodyweight, Challenges } from './widgets';

export default function DashboardScreen() {
	return (
		<SafeAreaView style={{ flex: 1, padding: 15 }}>
			<ScrollView>
				<Typography variant="h1" fontFamily="roboto" style={{ paddingBottom: 5 }}>
					Dashboard
				</Typography>

				<Bodyweight />
				{/* <Challenges /> */}
			</ScrollView>
		</SafeAreaView>
	);
}
