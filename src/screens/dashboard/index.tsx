import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DashboardParamList } from '@constants/navigation';

import Header from '@components/Header';
import Dashboard from './screens/dashboard';

const Stack = createStackNavigator<DashboardParamList>();

export default function DashboardStack() {
	return (
		<Stack.Navigator initialRouteName="Dashboard">
			<Stack.Screen name="Dashboard" component={Dashboard} options={{ header: (props) => <Header {...props} menu /> }} />
		</Stack.Navigator>
	);
}
