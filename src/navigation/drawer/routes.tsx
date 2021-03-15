import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DashboardScreen from '../../screens/dashboard';
import MeasurementsScreen from '../../screens/measurements';
import ChallengesScreen from '../../screens/Challenges';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
	return (
		<Drawer.Navigator initialRouteName="Dashboard">
			<Drawer.Screen name="Dashboard" component={DashboardScreen} />
			<Drawer.Screen name="Measurements" component={MeasurementsScreen} />
			<Drawer.Screen name="Challenges" component={ChallengesScreen} />
		</Drawer.Navigator>
	);
}
