import React, { Dispatch, SetStateAction, useState } from 'react';
import moment from 'moment';
import { StyleSheet, View } from 'react-native';

import { theme } from '@constants/theme';
import { measurement } from '@constants/data';
import { Calendar, Typography } from '@design/core';

import { MeasurementValue } from '../types';
import Header from './Header';
import Body from './Body';

interface Props {
	object: NonNullable<MeasurementValue>;
	setSnapTo: Dispatch<SetStateAction<number>>;
}

export default function MeasurementForm({ object, setSnapTo }: Props): React.ReactElement {
	const { type, id, value, date } = object;
	const now = moment();
	const selectDate = date ?? now;
	const [formDate, setFormDate] = useState({ date: selectDate, isActive: false });

	const typeObject = measurement.types.find((item) => item.name === type);
	if (!typeObject) {
		return <Typography>Error unknown type {type}</Typography>;
	}

	return (
		<View style={styles.root}>
			<Header title={typeObject.title} />
			{formDate.isActive ? (
				<Calendar
					selected={formDate.date}
					onSelect={(selectedDate) => {
						setSnapTo(0);
						setFormDate({ date: selectedDate, isActive: false });
					}}
				/>
			) : (
				<Body
					id={id}
					value={value}
					date={formDate.date}
					onPressDate={() => {
						setSnapTo(1);
						setFormDate((state) => ({ ...state, isActive: true }));
					}}
					onSave={() => {}}
					onDelete={() => {}}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: theme.colors.background,
		padding: 20,
		paddingTop: 0,
		height: '150%',
	},
});
