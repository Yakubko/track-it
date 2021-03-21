import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { List, Divider } from '@components/core';

import { useMeasurementFormContext } from '../../editValue';
import ListItem, { ListItemProps } from './ListItem';

export default function Measurements() {
	const [, setA] = useMeasurementFormContext();

	const handlePress = (name: string) => {
		setA((state) => ({ ...state, name }));
	};

	const measurementsTypes: ListItemProps[] = [
		{ name: 'Bodyweight', unite: 'kgs', value: 90, previousValueDiff: 0.4, time: '4 months ago', handlePress },
		{ name: 'Shoulders', unite: 'cm', value: 124, previousValueDiff: 3.0, time: '4 months ago', handlePress },
		{ name: 'Chest', unite: 'cm', value: 112, previousValueDiff: -2.0, time: '4 months ago', handlePress },
		{ name: 'Waist', unite: 'cm', value: 100.5, previousValueDiff: -3.5, time: '4 months ago', handlePress },
		{ name: 'Hips', unite: 'cm', value: 110.5, previousValueDiff: -1.5, time: '4 months ago', handlePress },
		{ name: 'Neck', unite: 'cm', value: 90, previousValueDiff: 0.4, time: '4 months ago', handlePress },
		{ name: 'Upper Arm (Right)', unite: 'cm', value: 90, previousValueDiff: 0.4, time: '4 months ago', handlePress },
		{ name: 'Upper Arm (Left)', unite: 'cm', value: 90, previousValueDiff: 0.4, time: '4 months ago', handlePress },
		{ name: 'Forearm (Right)', unite: 'cm', value: 90, previousValueDiff: 0.4, time: '4 months ago', handlePress },
		{ name: 'Forearm (Left)', unite: 'cm', value: 90, previousValueDiff: 0.4, time: '4 months ago', handlePress },
		{ name: 'Thigh (Right)', unite: 'cm', value: 90, previousValueDiff: 0.4, time: '4 months ago', handlePress },
		{ name: 'Thigh (Left)', unite: 'cm', value: 90, previousValueDiff: 0.4, time: '4 months ago', handlePress },
		{ name: 'Calf (Right)', unite: 'cm', value: 90, previousValueDiff: 0.4, time: '4 months ago', handlePress },
		{ name: 'Calf (Left)', unite: 'cm', value: 90, previousValueDiff: 0.4, time: '4 months ago', handlePress },
	];

	return (
		<ScrollView>
			<SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
				<List>
					{measurementsTypes.map((item, index) => {
						return (
							<View key={index}>
								<ListItem object={item} />
								{index !== measurementsTypes.length ? <Divider /> : null}
							</View>
						);
					})}
				</List>
			</SafeAreaView>
		</ScrollView>
	);
}