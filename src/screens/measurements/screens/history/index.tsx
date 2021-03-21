import React from 'react';
import { TouchableOpacity, ScrollView, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@constants/theme';
import { Divider, Typography, List } from '@components/core';

import Chart from './Chart';
import { useMeasurementFormContext } from '../../editValue';

export default function History() {
	const data = [85, 85, 86, 87, 85, 88, 88, 90.1, 90.5];

	const object = {
		name: 'jakub',
		time: '3 January ',
		unite: 'kg',
		value: 10,
		previousValueDiff: 3,
	};

	return (
		<>
			<View style={{ height: 180 }}>
				<Chart data={data} />
				<View style={{ padding: 5, paddingTop: 10, paddingBottom: 10, flexDirection: 'row' }}>
					<TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row' }}>
						<View style={{ width: '30%' }}>
							<Typography>jan 1</Typography>
						</View>
						<View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
							<Typography>Jun 31</Typography>
						</View>
						<View style={{ width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
							<Typography>dec 31</Typography>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView>
				<SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
					<List>
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
						<Divider />
						<ListItem object={object} />
					</List>
				</SafeAreaView>
			</ScrollView>
		</>
	);
}

function ListItem({ object: { name, time, unite, value, previousValueDiff } }: any) {
	const [, setA] = useMeasurementFormContext();

	const handlePress = (name: string) => {
		setA((state) => ({ ...state, name }));
	};

	return (
		<View style={{ padding: 8, paddingBottom: 0, paddingLeft: 15, paddingRight: 15, flexDirection: 'row' }}>
			<TouchableOpacity onPress={() => handlePress(name)} style={{ flexDirection: 'row' }}>
				<View style={{ width: '50%', paddingTop: 10 }}>
					<Typography bold variant="h6">
						{time}
					</Typography>
				</View>
				<View style={{ width: '50%' }}>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -5 }}>
						<Typography fontFamily="eczar" style={{ color: theme.colors.success2, paddingRight: 10 }}>
							{previousValueDiff > 0 && '+'}
							{previousValueDiff}
						</Typography>
						<Typography fontFamily="eczar" bold style={{ fontSize: 30 }}>
							{value}
						</Typography>
						<Typography style={{ paddingLeft: 5 }}>{unite}</Typography>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
}
