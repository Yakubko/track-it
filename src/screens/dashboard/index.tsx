import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Dashboard from './screens/dashboard';
import { DashboardScreenList } from './types';

const Stack = createStackNavigator<DashboardScreenList>();

export default function DashboardStack() {
	return (
		<Stack.Navigator initialRouteName="Dashboard" screenOptions={{ header: Header }}>
			<Stack.Screen name="Dashboard" component={Dashboard} />
		</Stack.Navigator>
	);
}
