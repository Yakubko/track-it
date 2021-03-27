import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { theme } from '@constants/theme';
import { RootScreenProps } from '@constants/navigation';
import { Card, Typography, Divider, AreaChart } from '@design/core';
import { measurement } from '@constants/data';

export default function Bodyweight() {
	const navigation = useNavigation<RootScreenProps['navigation']>();
	const data = measurement.data.bodyweight.map((item) => item.value);

	const [lastWeight, previousWeight] = [data[0], data[1]];
	let differenceWeight = lastWeight - previousWeight;
	const direction = differenceWeight > 0 ? 'UP' : 'DOWN';
	differenceWeight = Math.abs(differenceWeight);

	const handlePress = () => {
		navigation.navigate('Measurements', { screen: 'Measurements' });
	};

	return (
		<Card>
			<AreaChart data={measurement.data.bodyweight} />
			<TouchableOpacity onPress={handlePress}>
				<View style={{ padding: 10, paddingBottom: 5, flexDirection: 'row' }}>
					<View style={{ width: '50%' }}>
						<Typography bold style={{ paddingTop: 5, paddingBottom: 10 }}>
							Bodyweight
						</Typography>
						<Typography style={{ color: theme.colors.warning }}>4 months ago</Typography>
					</View>
					<View style={{ width: '50%' }}>
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -10 }}>
							<Typography fontFamily="eczar" bold style={{ fontSize: 30 }}>
								{lastWeight}
							</Typography>
							<Typography style={{ paddingLeft: 5 }}>kgs</Typography>
						</View>
						<View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: -15 }}>
							<Typography fontFamily="eczar" style={{ color: theme.colors.success2 }}>
								{(direction === 'UP' ? '+' : '-') + differenceWeight.toFixed(1)}
							</Typography>
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
