import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Button as ButtonOriginal, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Typography } from './core';

const colors = {
	success: '#007d51',
	danger: '#b50000',
};

interface Props {
	color: keyof typeof colors;
	title: ButtonOriginal['props']['title'];
	onPress: ButtonOriginal['props']['onPress'];
}

export default function Button({ title, color, onPress }: Props) {
	// const { colors } = useTheme();

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
