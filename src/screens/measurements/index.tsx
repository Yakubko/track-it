import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Measurements from './screens/measurements';
import { MeasurementsScreenList } from './types';

const Stack = createStackNavigator<MeasurementsScreenList>();

export default function MeasurementsStack() {
	return (
		<Stack.Navigator initialRouteName="Measurements" screenOptions={{ header: Header }}>
			<Stack.Screen name="Measurements" component={Measurements} />
		</Stack.Navigator>
	);
}
