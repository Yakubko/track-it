import * as React from 'react';
import { ScrollView, Button } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { DrawerScreenList } from '../../../navigation/drawer';

type Props = DrawerScreenProps<DrawerScreenList, 'Challenges'>;

export default function Challenges({ navigation }: Props) {
	return (
		<ScrollView>
			<Button onPress={() => navigation.navigate('Dashboard', { screen: 'Dashboard' })} title="Go to dashboard" />
		</ScrollView>
	);
}
