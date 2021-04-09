import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { useFonts, Eczar_400Regular, Eczar_600SemiBold, RobotoCondensed_400Regular, RobotoCondensed_700Bold } from '@expo-google-fonts/dev';

import store from './store/store';
import AppDrawer from './drawer';

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

	return (
		<Provider store={store}>
			<StatusBar style="light" />
			<AppDrawer />
		</Provider>
	);
}
