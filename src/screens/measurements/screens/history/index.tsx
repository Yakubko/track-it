import React from 'react';
import { ScrollView, View } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Divider, Typography, List, AreaChart } from '@design/core';
import { measurement } from '@constants/data';

import ListItem, { ListItemObject } from './ListItem';
import { useMeasurementFormContext } from '../../editValue';
import { MeasurementsScreenProps } from '@constants/navigation';

export default function History() {
	const route = useRoute<MeasurementsScreenProps<'History'>['route']>();
	const [, setA] = useMeasurementFormContext();
	const type = measurement.types.find((item) => item.name === route.params?.measurementName);
	const data = measurement.data[route.params.measurementName] ?? [];

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
			<AreaChart data={data} height={180} timeline />
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
