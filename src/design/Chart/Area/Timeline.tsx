import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import Typography from '@design/Typography';
import { MeasurementData } from '@constants/data';

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
			const momentDate = moment(from, 'YYYY-MM-DD');
			center = momentDate.format(momentDate.year() === now.year() ? 'MMMM DD' : 'MMMM DD, YYYY');
		} else {
			const momentFrom = moment(from, 'YYYY-MM-DD');
			const momentTo = moment(to, 'YYYY-MM-DD');

			const dayDiff = momentTo.diff(momentFrom, 'days');
			if (dayDiff === 1) {
				left = momentFrom.format(momentFrom.year() === now.year() ? 'MMMM DD' : 'MMMM DD, YYYY');
				right = momentTo.format(momentTo.year() === now.year() ? 'MMMM DD' : 'MMMM DD, YYYY');
			} else {
				left = momentFrom.format(momentFrom.year() === now.year() ? 'MMMM DD' : 'MMM DD, YYYY');
				right = momentTo.format(momentTo.year() === now.year() ? 'MMMM DD' : 'MMM DD, YYYY');

				center = momentFrom.add(Math.round(dayDiff / 2), 'days').format(momentFrom.year() === now.year() ? 'MMMM DD' : 'MMM DD, YYYY');
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
