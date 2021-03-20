import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Typography } from '@components/core';

export interface ListItemProps {
	time: string;
	name: string;
	unite: 'kgs' | 'cm';
	value: number;
	previousValueDiff: number;
	handlePress: (name: string) => void;
}

export default function ListItem({ time, name, unite, value, previousValueDiff, handlePress }: ListItemProps): React.ReactElement {
	return (
		<View style={{ padding: 10, paddingBottom: 5, flexDirection: 'row' }}>
			<TouchableOpacity onPress={() => handlePress(name)} style={{ flexDirection: 'row' }}>
				<View style={{ width: '50%' }}>
					<Typography bold style={{ paddingBottom: 8 }} variant="h6">
						{name}
					</Typography>
					<Typography style={{ color: '#ffcf44' }}>{time}</Typography>
				</View>
				<View style={{ width: '40%' }}>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -10 }}>
						<Typography fontFamily="eczar" bold style={{ fontSize: 30 }}>
							{value}
						</Typography>
						<Typography style={{ paddingLeft: 5 }}>{unite}</Typography>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -15 }}>
						<Typography fontFamily="eczar" style={{ color: '#04b97f' }}>
							{previousValueDiff > 0 && '+'}
							{previousValueDiff}
						</Typography>
						<Typography style={{ paddingLeft: 5 }}>{unite}</Typography>
					</View>
				</View>
			</TouchableOpacity>
			<View style={{ width: '6%', alignItems: 'center', justifyContent: 'center' }}>
				<Typography>
					<MaterialIcons name="history" size={25} />
				</Typography>
			</View>
		</View>
	);
}
