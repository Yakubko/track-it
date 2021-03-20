import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from '@constants/theme';
import DrawerRoutes from './drawer';

export default function AppNavigation() {
	return (
		<>
			<StatusBar style="light" />
			<SafeAreaProvider>
				<NavigationContainer theme={theme}>
					<DrawerRoutes />
				</NavigationContainer>
			</SafeAreaProvider>
		</>
	);
}
