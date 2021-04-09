import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Header, MeasurementValueProvider } from '@components/core';
import { MeasurementsParamList } from '@constants/navigation';

import EditList, { HeaderAdd } from './screens/editList';
import History from './screens/history';
import Measurements, { HeaderEdit } from './screens/measurements';

const Stack = createStackNavigator<MeasurementsParamList>();

export default function MeasurementsStack() {
	return (
		<MeasurementValueProvider>
			<Stack.Navigator initialRouteName="Measurements">
				<Stack.Screen
					name="Measurements"
					component={Measurements}
					options={{ header: (props) => <Header {...props} menu right={() => <HeaderEdit />} /> }}
				/>
				<Stack.Screen name="History" component={History} options={{ header: (props) => <Header {...props} back /> }} />
				<Stack.Screen
					name="EditList"
					component={EditList}
					options={{ title: 'Edit list', header: (props) => <Header {...props} back right={() => <HeaderAdd />} /> }}
				/>
			</Stack.Navigator>
		</MeasurementValueProvider>
	);
}
