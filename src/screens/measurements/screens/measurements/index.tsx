import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';

import { List, Divider } from '@design/core';
import { useSelector } from '@store/core';
import { useMeasurementValue } from '@components/core';
import { MeasurementsScreenProps } from '@constants/navigation';

import ListItem, { ListItemObject } from './ListItem';

export { default as HeaderEdit } from './HeaderEdit';

export default function Measurements() {
	const measurement = useSelector((state) => state);
	const navigation = useNavigation<MeasurementsScreenProps<'Measurements'>['navigation']>();
	const { showMeasurement } = useMeasurementValue();

	const handlePress = (item: ListItemObject) => {
		showMeasurement({ type: item.name, value: item.value });
	};

	const items: ListItemObject[] = measurement.types.map((item) => {
		let value: ListItemObject['value'];
		let previousValueDiff: ListItemObject['previousValueDiff'];
		let time: ListItemObject['time'];
		const lastValue = measurement.data[item.name][0];
		if (lastValue) {
			[value, time] = [lastValue.value, lastValue.date];

			const previousValue = measurement.data[item.name][1];
			if (previousValue) {
				previousValueDiff = Math.round((lastValue.value - previousValue.value) * 10) / 10;
			}
		}
		return { ...item, value, previousValueDiff, time };
	});

	return (
		<ScrollView>
			<SafeAreaView edges={['bottom']}>
				<List>
					{items.map((item, index) => {
						return (
							<View key={item.name}>
								<ListItem object={item} onPress={() => handlePress(item)} navigation={navigation} />
								{index !== items.length ? <Divider /> : null}
							</View>
						);
					})}
				</List>
			</SafeAreaView>
		</ScrollView>
	);
}
