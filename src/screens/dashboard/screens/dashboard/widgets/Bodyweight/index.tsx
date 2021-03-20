import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { Card, Typography, Divider } from '@components/core';
import { DrawerScreenList } from '../../../../../../navigation/drawer';

import Chart from './Chart';

export default function Bodyweight() {
	const navigation = useNavigation<DrawerNavigationProp<DrawerScreenList>>();
	const data = [85, 85, 86, 87, 85, 88, 88, 90.1, 90.5];

	const [lastWeight, previousWeight] = [data[data.length - 1], data[data.length - 2]];
	let differenceWeight = lastWeight - previousWeight;
	const direction = differenceWeight > 0 ? 'UP' : 'DOWN';
	differenceWeight = Math.abs(differenceWeight);

	const handlePress = () => {
		navigation.navigate('Measurements', { screen: 'Measurements' });
	};

	return (
		<Card>
			<Chart data={data} />
			<TouchableOpacity onPress={handlePress}>
				<View style={{ padding: 10, paddingBottom: 5, flexDirection: 'row' }}>
					<View style={{ width: '50%' }}>
						<Typography bold style={{ paddingTop: 5, paddingBottom: 10 }}>
							Bodyweight
						</Typography>
						<Typography>4 months ago</Typography>
					</View>
					<View style={{ width: '50%' }}>
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -10 }}>
							<Typography fontFamily="eczar" bold style={{ fontSize: 30 }}>
								{lastWeight}
							</Typography>
							<Typography style={{ paddingLeft: 5 }}>kgs</Typography>
						</View>
						<View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: -15 }}>
							<Typography fontFamily="eczar">{(direction === 'UP' ? '+' : '-') + differenceWeight.toFixed(1)}</Typography>
						</View>
					</View>
				</View>
			</TouchableOpacity>
			<Divider />
			<TouchableOpacity onPress={handlePress}>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Typography variant="button" bold>
						Show more
					</Typography>
				</View>
			</TouchableOpacity>
		</Card>
	);
}
