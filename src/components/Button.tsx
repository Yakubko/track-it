import React from 'react';
import { Button as ButtonOriginal, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { theme } from '@constants/theme';

import Typography from './Typography';

const colors = {
	success: theme.colors.success,
	danger: theme.colors.danger,
};

interface Props {
	color: keyof typeof colors;
	title: ButtonOriginal['props']['title'];
	onPress: ButtonOriginal['props']['onPress'];
}

export default function Button({ title, color, onPress }: Props) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View
				style={{
					paddingLeft: 20,
					paddingRight: 20,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: colors[color],
					borderRadius: 10,
				}}
			>
				<Typography variant="button">{title}</Typography>
			</View>
		</TouchableOpacity>
	);

	// return <ButtonOriginal title={title} onPress={onPress} color="" />;
}
