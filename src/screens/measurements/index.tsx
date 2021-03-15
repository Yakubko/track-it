import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/core';
// import { DrawerScreenProps } from '@react-navigation/drawer';

import { Typography, List, Divider, BottomSheet } from '../../components';
// import { DrawerScreenList } from '../../navigation/drawer';
import ListItem, { ListItemProps } from './ListItem';
import EditValue from '../../components/EditValue';

// type Props = DrawerScreenProps<DrawerScreenList, 'Measurements'>;

export default function MeasurementsScreen() {
	const [addValue, setAddValue] = useState<string | null>(null);

	const handlePress = (name: string) => {
		setAddValue(name);
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
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView>
					<Typography variant="h1" fontFamily="roboto" style={{ padding: 15 }}>
						Measurements
					</Typography>

					<List>
						{measurementsTypes.map((item, index) => {
							return (
								<View key={index}>
									<ListItem {...item} />
									{index !== measurementsTypes.length ? <Divider /> : null}
								</View>
							);
						})}
					</List>
					{/* <Button onPress={() => navigation.navigate('Dashboard')} title="Go to dashboard" /> */}
				</ScrollView>
			</SafeAreaView>
			<Text>{addValue}</Text>
			<BottomSheet visible={!!addValue} onClose={() => setAddValue(null)}>
				<EditValue name={addValue} />
			</BottomSheet>
		</>
	);
}
