import React, { Dispatch, SetStateAction, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';

import { theme } from '@constants/theme';
import { MeasurementType } from '@constants/data';
import { Button, Calendar, Divider, Typography } from '@design/core';

import { MeasurementFormObject } from '../types';
import Value from './Value';

interface Props {
	type: MeasurementType;
	object: MeasurementFormObject;
	setSnapTo: Dispatch<SetStateAction<number>>;
	onSave: (newValue: MeasurementFormObject) => void;
	onDelete: (value: MeasurementFormObject) => void;
}

export default function MeasurementForm({ object, type, setSnapTo, onSave, onDelete }: Props): React.ReactElement {
	const [formData, setFormData] = useState(object);
	const [isDatePickerActive, setIsDatePickerActive] = useState(false);

	const now = moment();

	if (isDatePickerActive) {
		return (
			<View style={styles.root}>
				<Calendar
					selected={formData.date}
					onSelect={(selectedDate) => {
						setSnapTo(0);
						setFormData((state) => ({ ...state, date: selectedDate }));
						setIsDatePickerActive(false);
					}}
				/>
			</View>
		);
	}

	return (
		<View style={styles.root}>
			<TouchableOpacity
				onPress={() => {
					setSnapTo(1);
					setIsDatePickerActive(true);
				}}
			>
				<View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 15 }}>
					<Typography variant="h6" bold>
						{formData.date.calendar(null, {
							sameDay: '[TODAY]',
							lastDay: '[YESTERDAY]',
							lastWeek: function () {
								return formData.date.year() === now.year() ? 'MMMM DD' : 'MMMM DD, YYYY';
							},
							sameElse: function () {
								return formData.date.year() === now.year() ? 'MMMM DD' : 'MMMM DD, YYYY';
							},
						})}
					</Typography>
				</View>
			</TouchableOpacity>

			<Divider />

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<View style={{ flex: 1 }} />
				<Value
					value={formData.value ?? 0}
					onSelect={(selectedValue) => {
						setFormData((state) => ({ ...state, value: selectedValue }));
					}}
				/>
				<Typography
					style={{
						textAlign: 'center',
						flex: 1,
						fontSize: 25,
						paddingTop: 72,
					}}
				>
					{type.unite}
				</Typography>
			</View>

			<View style={{ flexDirection: 'row', paddingTop: 5 }}>
				<View style={{ width: '50%', paddingLeft: 15, paddingRight: 15 }}>
					{formData.id ? <Button title={'Delete'} color="danger" onPress={() => onDelete(formData)} /> : null}
				</View>
				<View style={{ width: '50%', paddingLeft: 15, paddingRight: 15 }}>
					<Button title={'Save'} color="success" onPress={() => onSave(formData)} />
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
		height: '150%',
	},
});
