import React from 'react';
import moment from 'moment';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { theme } from '@constants/theme';
import { measurement } from '@constants/data';
import { Button, Divider, Typography } from '@design/core';

import { MeasurementValue } from './types';

interface Props {
	object: NonNullable<MeasurementValue>;
}

export default function MeasurementForm({ object }: Props): React.ReactElement {
	const { type, id, value, date } = object;
	const typeObject = measurement.types.find((item) => item.name === type);
	if (!typeObject) {
		return <Typography>Error unknown type {type}</Typography>;
	}

	const now = moment();
	const selectDate = date ?? now;

	return (
		<View style={styles.root}>
			<Typography variant="h1" bold style={{ paddingBottom: 5 }}>
				{typeObject.title}
			</Typography>
			<Typography variant="body1" style={{ paddingBottom: 25 }}>
				Select date and chose a new value
			</Typography>
			<Divider />
			<TouchableOpacity onPress={() => {}}>
				<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10 }}>
					<Typography variant="h6" bold>
						{selectDate.calendar(null, {
							sameDay: '[TODAY]',
							lastDay: '[Yesterday]',
							sameElse: function () {
								return selectDate.year() === now.year() ? 'MMMM DD' : 'MMMM DD, YYYY';
							},
						})}
					</Typography>
				</View>
			</TouchableOpacity>
			<Divider />
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Typography fontFamily="eczar" style={{ fontSize: 90 }}>
					{value}
				</Typography>
			</View>

			<View>
				<View style={styles.fixToText}>
					<Button title={'Delete'} color="danger" onPress={() => {}} />
					<Button title={'Save'} color="success" onPress={() => {}} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: theme.colors.background,
		padding: 20,
		paddingTop: 0,
		height: 400,
	},
	fixToText: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
