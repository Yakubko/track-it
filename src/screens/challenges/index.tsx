import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Challenges from './screens/Challenges';
import { ChallengesScreenList } from './types';

const Stack = createStackNavigator<ChallengesScreenList>();

export default function ChallengesStack() {
	return (
		<Stack.Navigator initialRouteName="Challenges" screenOptions={{ header: Header }}>
			<Stack.Screen name="Challenges" component={Challenges} />
		</Stack.Navigator>
	);
}
