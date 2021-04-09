import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from '@constants/theme';
import DrawerRoutes from './Routes';

export default function AppDrawer() {
	return (
		<SafeAreaProvider>
			<NavigationContainer theme={theme}>
				<DrawerRoutes />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
