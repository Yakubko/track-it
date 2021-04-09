import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import Typography from '@design/Typography';
import { MeasurementData } from '@store/core';

interface Props {
	from?: MeasurementData['date'];
	to?: MeasurementData['date'];
}

export default function Timeline({ from, to }: Props): React.ReactElement {
	let left = null;
	let center = null;
	let right = null;

	if (from && to) {
		const now = moment();

		if (from === to) {
			center = from.format(from.year() === now.year() ? 'MMMM DD' : 'MMMM DD, YYYY');
		} else {
			const dayDiff = to.diff(from, 'days');
			if (dayDiff === 1) {
				left = from.format(from.year() === now.year() ? 'MMMM DD' : 'MMMM DD, YYYY');
				right = to.format(to.year() === now.year() ? 'MMMM DD' : 'MMMM DD, YYYY');
			} else {
				left = from.format(from.year() === now.year() ? 'MMMM DD' : 'MMM DD, YYYY');
				right = to.format(to.year() === now.year() ? 'MMMM DD' : 'MMM DD, YYYY');

				const middleDate = moment(from).add(Math.round(dayDiff / 2), 'days');
				center = middleDate.format(middleDate.year() === now.year() ? 'MMMM DD' : 'MMM DD, YYYY');
			}
		}
	}

	return (
		<View style={{ padding: 5, paddingTop: 10, paddingBottom: 10, flexDirection: 'row' }}>
			<View style={{ width: '30%' }}>
				<Typography>{left}</Typography>
			</View>
			<View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
				<Typography>{center}</Typography>
			</View>
			<View style={{ width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
				<Typography>{right}</Typography>
			</View>
		</View>
	);
}
