import * as React from 'react';
import { ScrollView, Button } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { RootDrawerProp } from '@constants/navigation';

export default function Challenges() {
	const navigation = useNavigation<RootDrawerProp>();

	return (
		<ScrollView>
			<Button onPress={() => navigation.navigate('Dashboard', { screen: 'Dashboard' })} title="Go to dashboard" />
		</ScrollView>
	);
}
