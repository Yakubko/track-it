import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { RootParamList } from '@constants/navigation';

import DashboardStack from '../screens/dashboard';
import MeasurementsStack from '../screens/measurements';
import ChallengesStack from '../screens/challenges';

const Drawer = createDrawerNavigator<RootParamList>();

export default function DrawerRoutes() {
	return (
		<Drawer.Navigator initialRouteName="Dashboard">
			<Drawer.Screen name="Dashboard" component={DashboardStack} />
			<Drawer.Screen name="Measurements" component={MeasurementsStack} />
			<Drawer.Screen name="Challenges" component={ChallengesStack} />
		</Drawer.Navigator>
	);
}
