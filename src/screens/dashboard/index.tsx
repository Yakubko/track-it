import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DashboardScreenList } from '@constants/navigation';

import Header from '../components/Header';
import Dashboard from './screens/dashboard';

const Stack = createStackNavigator<DashboardScreenList>();

export default function DashboardStack() {
	return (
		<Stack.Navigator initialRouteName="Dashboard" screenOptions={{ header: Header }}>
			<Stack.Screen name="Dashboard" component={Dashboard} />
		</Stack.Navigator>
	);
}
