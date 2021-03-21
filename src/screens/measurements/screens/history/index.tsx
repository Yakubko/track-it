import React from 'react';
import { ScrollView, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Divider, Typography, List } from '@components/core';
import { measurement, MeasurementType } from '@constants/data';

import Chart from './Chart';
import ListItem, { ListItemObject } from './ListItem';
import { useMeasurementFormContext } from '../../editValue';
import { MeasurementsScreenList } from '@constants/navigation';

export default function History() {
	const route = useRoute<RouteProp<MeasurementsScreenList, 'History'>>();
	const [, setA] = useMeasurementFormContext();
	const type = measurement.types.find((item) => item.name === route.params?.measurementName);
	const data = measurement.data[route.params.measurementName as MeasurementType['name']] ?? [];

	if (!type) {
		return <Typography>Error unknown type {route.params.measurementName}</Typography>;
	}

	const handlePress = ({ id }: ListItemObject) => {
		setA((state) => ({ ...state, name: id }));
	};

	const items: ListItemObject[] = data.map((item, index) => {
		let previousValueDiff: ListItemObject['previousValueDiff'];

		const previousValue = data[index + 1];
		if (previousValue) {
			previousValueDiff = Math.round((item.value - previousValue.value) * 10) / 10;
		}

		return { ...item, previousValueDiff, unite: type.unite };
	});

	return (
		<>
			<View style={{ height: 180 }}>
				<Chart data={data} />
			</View>
			<ScrollView>
				<SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
					<List>
						{items.map((item, index) => {
							return (
								<View key={item.id}>
									<ListItem object={item} onPress={handlePress} />
									{index !== data.length ? <Divider /> : null}
								</View>
							);
						})}
					</List>
				</SafeAreaView>
			</ScrollView>
		</>
	);
}
