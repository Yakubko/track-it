import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Button, Divider, Typography, WheelSelect } from '@design/core';
import { theme } from '@constants/theme';

interface Props {
	id?: number;
	date: Moment;
	value?: number;
	onPressDate: () => void;
	onSave: () => void;
	onDelete: () => void;
}

export default function Body({ id, date, value, onPressDate, onSave, onDelete }: Props): React.ReactElement {
	value = value ?? 0;
	const [measureValue, setMeasureValue] = useState(value > 0 ? Math.floor(value) : Math.ceil(value));
	const [measureDecimalValue, setMeasureDecimalValue] = useState(Math.floor((value % 1) * 10));

	const now = moment();
	const dataSource = Array.from({ length: 200 }, (_, i) => i + 1);

	return (
		<>
			<TouchableOpacity onPress={onPressDate}>
				<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10 }}>
					<Typography variant="h6" bold>
						{date.calendar(null, {
							sameDay: '[TODAY]',
							lastDay: '[YESTERDAY]',
							lastWeek: function () {
								return date.year() === now.year() ? 'MMMM DD' : 'MMMM DD, YYYY';
							},
							sameElse: function () {
								return date.year() === now.year() ? 'MMMM DD' : 'MMMM DD, YYYY';
							},
						})}
					</Typography>
				</View>
			</TouchableOpacity>
			<Divider />
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 165, paddingBottom: 20, paddingTop: 5 }}>
				<WheelSelect
					dataSource={dataSource}
					selected={measureValue}
					height={150}
					onChange={(value) => setMeasureValue(value)}
					renderItem={({ item, isSelected }): React.ReactElement => {
						return (
							<Typography
								fontFamily="eczar"
								bold={isSelected}
								style={{ fontSize: 40, color: isSelected ? theme.colors.primary : theme.colors.grey, textAlign: 'right', width: 65 }}
							>
								{item}
							</Typography>
						);
					}}
				/>
				<Typography fontFamily="eczar" style={{ fontSize: 40, paddingTop: 23 }}>
					,
				</Typography>
				<WheelSelect
					dataSource={Array.from({ length: 10 }, (_, i) => i)}
					height={150}
					selected={measureDecimalValue}
					onChange={(value) => {
						setMeasureDecimalValue(value);
					}}
					renderItem={({ item, isSelected }): React.ReactElement => {
						return (
							<Typography
								fontFamily="eczar"
								bold={isSelected}
								style={{ fontSize: 40, color: isSelected ? theme.colors.primary : theme.colors.grey }}
							>
								{item}
							</Typography>
						);
					}}
				/>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<View style={{ width: '50%', paddingLeft: 15, paddingRight: 15 }}>
					{id ? <Button title={'Delete'} color="danger" onPress={onDelete} /> : null}
				</View>
				<View style={{ width: '50%', paddingLeft: 15, paddingRight: 15 }}>
					<Button title={'Save'} color="success" onPress={onSave} />
				</View>
			</View>
		</>
	);
}
