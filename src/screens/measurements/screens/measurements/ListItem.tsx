import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

import { theme } from '@constants/theme';
import { MeasurementsStackProp } from '@constants/navigation';
import { MeasurementType } from '@constants/data';
import { Typography } from '@components/core';

export interface ListItemObject extends MeasurementType {
	value: number | undefined;
	previousValueDiff: number | undefined;
	time: string | undefined;
}

interface Props {
	object: ListItemObject;
	navigation: MeasurementsStackProp;
	onPress: (object: ListItemObject) => void;
}

export default function ListItem({ object, onPress, navigation }: Props): React.ReactElement {
	const { name, title, time, unite, value, previousValueDiff } = object;

	const renderTime = time ? (
		<Typography style={{ color: theme.colors.warning }}>{time ? moment(time, 'YYYY-MM-DD').fromNow() : '-'}</Typography>
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
			<View style={{ width: '6%', alignItems: 'center', justifyContent: 'center' }}>
				<TouchableOpacity
					disabled={!value}
					onPress={() => {
						navigation.navigate('History', { headerTitle: title, measurementName: name });
					}}
				>
					<Typography style={{ opacity: value ? 1 : 0.2 }}>
						<MaterialIcons name="history" size={25} />
					</Typography>
				</TouchableOpacity>
			</View>
		</View>
	);
}
