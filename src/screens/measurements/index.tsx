import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MeasurementsScreenList } from '@constants/navigation';

import Header from '../components/Header';
import { MeasurementFormContextWrapper } from './editValue';
import Measurements from './screens/measurements';
import History from './screens/history';

const Stack = createStackNavigator<MeasurementsScreenList>();

export default function MeasurementsStack() {
	return (
		<MeasurementFormContextWrapper>
			<Stack.Navigator initialRouteName="Measurements" screenOptions={{ header: Header }}>
				<Stack.Screen name="Measurements" component={Measurements} />
				<Stack.Screen name="History" component={History} options={{ header: (props) => <Header {...props} back={true} /> }} />
			</Stack.Navigator>
		</MeasurementFormContextWrapper>
	);
}
