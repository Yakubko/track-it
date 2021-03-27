import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { theme } from '@constants/theme';
import { MeasurementsScreenProps } from '@constants/navigation';
import { MeasurementData, MeasurementType } from '@constants/data';
import { Typography } from '@design/core';

export interface ListItemObject extends MeasurementType {
	value?: number;
	previousValueDiff?: number;
	time?: MeasurementData['date'];
}

interface Props {
	object: ListItemObject;
	navigation: MeasurementsScreenProps<'Measurements'>['navigation'];
	onPress: (object: ListItemObject) => void;
}

export default function ListItem({ object, onPress, navigation }: Props): React.ReactElement {
	const { name, title, time, unite, value, previousValueDiff } = object;

	const renderTime = time ? (
		<Typography style={{ color: theme.colors.warning }}>{time ? time.fromNow() : '-'}</Typography>
	) : (
		<Typography>None data</Typography>
	);

	const renderValue = value ? (
		<Typography fontFamily="eczar" bold style={{ fontSize: 30 }}>
			{value}
		</Typography>
	) : (
		<Typography fontFamily="eczar" bold style={{ fontSize: 30 }}>
			-
		</Typography>
	);

	const renderUnite = <Typography style={{ paddingLeft: 5 }}>{unite}</Typography>;

	const renderValueDiff = previousValueDiff ? (
		<Typography fontFamily="eczar" style={{ color: theme.colors.success2 }}>
			{previousValueDiff > 0 && '+'}
			{previousValueDiff ?? '-'}
		</Typography>
	) : (
		<Typography>-</Typography>
	);

	return (
		<View style={{ padding: 10, paddingBottom: 5, flexDirection: 'row' }}>
			<TouchableOpacity onPress={() => onPress(object)} style={{ flexDirection: 'row' }}>
				<View style={{ width: '50%' }}>
					<Typography bold style={{ paddingBottom: 8 }} variant="h6">
						{title}
					</Typography>
					{renderTime}
				</View>
				<View style={{ width: '40%' }}>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -10 }}>
						{renderValue}
						{renderUnite}
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -15 }}>
						{renderValueDiff}
						{renderUnite}
					</View>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				disabled={!value}
				onPress={() => {
					navigation.navigate('History', { headerTitle: title, measurementName: name });
				}}
			>
				<View style={{ opacity: value ? 1 : 0.2, height: 48, width: 45, alignItems: 'flex-start', justifyContent: 'center' }}>
					<MaterialIcons color={theme.colors.primary} name="history" size={25} />
				</View>
			</TouchableOpacity>
		</View>
	);
}
