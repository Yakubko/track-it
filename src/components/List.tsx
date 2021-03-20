import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '@constants/theme';

interface Props {
	children: React.ReactNode;
}

export default function List({ children }: Props) {
	return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
	card: {
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
