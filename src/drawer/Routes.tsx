import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { RootParamList } from '@constants/navigation';
import { theme } from '@constants/theme';

import DashboardStack from '../screens/dashboard';
import MeasurementsStack from '../screens/measurements';
import ChallengesStack from '../screens/challenges';

const Drawer = createDrawerNavigator<RootParamList>();

export default function DrawerRoutes() {
	return (
		<Drawer.Navigator initialRouteName="Dashboard" drawerStyle={{ width: 230 }}>
			<Drawer.Screen
				name="Dashboard"
				component={DashboardStack}
				options={{
					drawerIcon: () => {
						return <MaterialIcons name="dashboard" size={25} style={{ color: theme.colors.primary }} />;
					},
				}}
			/>
			<Drawer.Screen
				name="Measurements"
				component={MeasurementsStack}
				options={{
					drawerIcon: () => {
						return <MaterialIcons name="square-foot" size={25} style={{ color: theme.colors.primary }} />;
					},
				}}
			/>
			<Drawer.Screen
				name="Challenges"
				component={ChallengesStack}
				options={{
					drawerIcon: () => {
						return <MaterialIcons name="insights" size={25} style={{ color: theme.colors.primary }} />;
					},
				}}
			/>
		</Drawer.Navigator>
	);
}
