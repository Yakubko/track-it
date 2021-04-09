import React from 'react';
import { ScrollView, View } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Divider, Typography, List, AreaChart } from '@design/core';
import { useMeasurementValue } from '@components/core';
import { MeasurementsScreenProps } from '@constants/navigation';
import { useSelector } from '@store/core';

import ListItem, { ListItemObject } from './ListItem';

export default function History() {
	const measurement = useSelector((state) => state);

	const route = useRoute<MeasurementsScreenProps<'History'>['route']>();
	const { showMeasurement } = useMeasurementValue();
	const type = measurement.types.find((item) => item.name === route.params?.measurementName);
	const data = measurement.data[route.params.measurementName] ?? [];

	if (!type) {
		return <Typography>Error unknown type {route.params.measurementName}</Typography>;
	}

	const handlePress = (item: ListItemObject) => {
		showMeasurement({ ...item, type: type.name });
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
			<AreaChart data={data} height={180} timeline grid />
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
