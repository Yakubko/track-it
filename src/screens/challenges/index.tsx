import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '@components/Header';
import { ChallengesParamList } from '@constants/navigation';

import Challenges from './screens/Challenges';

const Stack = createStackNavigator<ChallengesParamList>();

export default function ChallengesStack() {
	return (
		<Stack.Navigator initialRouteName="Challenges" screenOptions={{ header: Header }}>
			<Stack.Screen name="Challenges" component={Challenges} />
		</Stack.Navigator>
	);
}
