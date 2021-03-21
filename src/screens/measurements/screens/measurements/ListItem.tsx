import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import { theme } from '@constants/theme';
import { Typography } from '@components/core';

import { MeasurementsScreenList } from '../../types';

export interface ListItemProps {
	time: string;
	name: string;
	unite: 'kgs' | 'cm';
	value: number;
	previousValueDiff: number;
	handlePress: (name: string) => void;
}

interface Props {
	object: ListItemProps;
}

export default function ListItem({ object: { time, name, unite, value, previousValueDiff, handlePress } }: Props): React.ReactElement {
	const navigation = useNavigation<StackNavigationProp<MeasurementsScreenList>>();

	return (
		<View style={{ padding: 10, paddingBottom: 5, flexDirection: 'row' }}>
			<TouchableOpacity onPress={() => handlePress(name)} style={{ flexDirection: 'row' }}>
				<View style={{ width: '50%' }}>
					<Typography bold style={{ paddingBottom: 8 }} variant="h6">
						{name}
					</Typography>
					<Typography style={{ color: theme.colors.warning }}>{time}</Typography>
				</View>
				<View style={{ width: '40%' }}>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -10 }}>
						<Typography fontFamily="eczar" bold style={{ fontSize: 30 }}>
							{value}
						</Typography>
						<Typography style={{ paddingLeft: 5 }}>{unite}</Typography>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -15 }}>
						<Typography fontFamily="eczar" style={{ color: theme.colors.success2 }}>
							{previousValueDiff > 0 && '+'}
							{previousValueDiff}
						</Typography>
						<Typography style={{ paddingLeft: 5 }}>{unite}</Typography>
					</View>
				</View>
			</TouchableOpacity>
			<View style={{ width: '6%', alignItems: 'center', justifyContent: 'center' }}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('History', { name });
					}}
				>
					<Typography>
						<MaterialIcons name="history" size={25} />
					</Typography>
				</TouchableOpacity>
			</View>
		</View>
	);
}
