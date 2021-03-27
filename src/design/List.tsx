import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { theme } from '@constants/theme';

interface Props {
	children: React.ReactNode;

	style?: StyleProp<ViewStyle>;
}

export default function List({ children, style = {} }: Props) {
	const finaleStyle = StyleSheet.compose(styles.list as StyleProp<ViewStyle>, style);

	return <View style={finaleStyle}>{children}</View>;
}

const styles = StyleSheet.create({
	list: {
		backgroundColor: theme.colors.card,

		shadowColor: theme.colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 2,
	},
});
