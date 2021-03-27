import * as React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Bodyweight } from './widgets';

export default function DashboardScreen() {
	return (
		<SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
			<ScrollView>
				<Bodyweight />
			</ScrollView>
		</SafeAreaView>
	);
}
