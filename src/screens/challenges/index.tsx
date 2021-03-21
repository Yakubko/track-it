import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ChallengesScreenList } from '@constants/navigation';

import Header from '../components/Header';
import Challenges from './screens/Challenges';

const Stack = createStackNavigator<ChallengesScreenList>();

export default function ChallengesStack() {
	return (
		<Stack.Navigator initialRouteName="Challenges" screenOptions={{ header: Header }}>
			<Stack.Screen name="Challenges" component={Challenges} />
		</Stack.Navigator>
	);
}
