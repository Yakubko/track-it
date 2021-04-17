import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RenderItemParams } from 'react-native-draggable-flatlist';
import * as Haptics from 'expo-haptics';

import { theme } from '@constants/theme';
import { MeasurementsScreenProps } from '@constants/navigation';
import { MeasurementType, toggleMeasurementVisibility, useDispatch } from '@store/core';
import { Typography } from '@design/core';

interface Props {
	drag: RenderItemParams<MeasurementType>['drag'];
	object: MeasurementType;
	navigation: MeasurementsScreenProps<'List'>['navigation'];
}

export default function ListItem({ object, drag }: Props): React.ReactElement {
	const dispatch = useDispatch();
	const { name, title, visible } = object;

	return (
		<View style={{ padding: 15, flexDirection: 'row', backgroundColor: theme.colors.card, opacity: visible ? 1 : 0.2 }}>
			<View style={{ flex: 1 }}>
				<Typography bold variant="h6">
					{title}
				</Typography>
			</View>

			<TouchableOpacity
				onPress={() => {
					dispatch(toggleMeasurementVisibility(name));
				}}
			>
				<View style={{ paddingRight: 20 }}>
					<MaterialIcons color={theme.colors.primary} name={visible ? 'visibility' : 'visibility-off'} size={25} />
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPressIn={() => {
					Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
					return drag();
				}}
			>
				<View style={{ paddingRight: 16 }}>
					<MaterialIcons color={theme.colors.primary} name="drag-indicator" size={25} />
				</View>
			</TouchableOpacity>
		</View>
	);
}
