import * as React from 'react';
import { ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { Typography } from '../components';
import { DrawerScreenList } from '../navigation/drawer';

type Props = DrawerScreenProps<DrawerScreenList, 'Challenges'>;

export default function ChallengesScreen({ navigation }: Props) {
	return (
		<SafeAreaView style={{ flex: 1, padding: 15 }}>
			<ScrollView>
				<Typography variant="h1" fontFamily="roboto" style={{ paddingBottom: 5 }}>
					Challenges
				</Typography>

				<Button onPress={() => navigation.navigate('Dashboard')} title="Go to dashboard" />
			</ScrollView>
		</SafeAreaView>
	);
}
