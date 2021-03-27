import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import moment from 'moment';

import { theme } from '@constants/theme';
import { MeasurementData, MeasurementType } from '@constants/data';
import { Typography } from '@design/core';

export interface ListItemObject extends MeasurementData {
	previousValueDiff: number | undefined;
	unite: MeasurementType['unite'];
}

interface Props {
	object: ListItemObject;
	onPress: (object: ListItemObject) => void;
}

export default function ListItem({ object, onPress }: Props): React.ReactElement {
	const { date, unite, value, previousValueDiff } = object;

	let renderValueDiff: React.ReactNode = null;
	if (previousValueDiff) {
		const isPlus = previousValueDiff > 0;

		renderValueDiff = (
			<Typography fontFamily="eczar" style={{ color: isPlus ? theme.colors.warning : theme.colors.success2, paddingRight: 10 }}>
				{isPlus && '+'}
				{previousValueDiff ?? '-'}
			</Typography>
		);
	}

	const now = moment();
	const momentDate = moment(date, 'YYYY-MM-DD');

	return (
		<View style={{ padding: 8, paddingBottom: 0, paddingLeft: 15, paddingRight: 15, flexDirection: 'row' }}>
			<TouchableOpacity onPress={() => onPress(object)} style={{ flexDirection: 'row' }}>
				<View style={{ width: '50%', paddingTop: 10 }}>
					<Typography bold variant="h6">
						{momentDate.format(momentDate.year() === now.year() ? 'MMMM DD' : 'MMM DD, YYYY')}
					</Typography>
				</View>
				<View style={{ width: '50%' }}>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -5 }}>
						{renderValueDiff}
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
