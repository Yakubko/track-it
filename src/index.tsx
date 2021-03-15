import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Eczar_400Regular, Eczar_600SemiBold, RobotoCondensed_400Regular, RobotoCondensed_700Bold } from '@expo-google-fonts/dev';

import AppNavigation from './navigation';

export default function App() {
	let [fontsLoaded] = useFonts({
		Eczar_400Regular,
		Eczar_600SemiBold,
		RobotoCondensed_700Bold,
		RobotoCondensed_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return <AppNavigation />;
}
