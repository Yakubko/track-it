import React from 'react';
import moment, { Moment } from 'moment';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Button, Divider, Typography } from '@design/core';

interface Props {
	id?: number;
	date: Moment;
	value?: number;
	onPressDate: () => void;
	onSave: () => void;
	onDelete: () => void;
}

export default function Body({ id, date, value, onPressDate, onSave, onDelete }: Props): React.ReactElement {
	const now = moment();

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
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Typography fontFamily="eczar" style={{ fontSize: 90 }}>
					{value}
				</Typography>
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
