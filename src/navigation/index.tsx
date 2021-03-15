import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DrawerRoutes from './drawer';

const MyTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: '#ffffff',
		background: '#33333d',
		card: '#373740',
	},
};

export default function AppNavigation() {
	return (
		<>
			<StatusBar style="light" />
			<SafeAreaProvider>
				<NavigationContainer theme={MyTheme}>
					<DrawerRoutes />
				</NavigationContainer>
			</SafeAreaProvider>
		</>
	);
}
