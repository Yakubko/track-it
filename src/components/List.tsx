import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
	children: React.ReactNode;
}

export default function List({ children }: Props) {
	return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#373740',

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 2,
	},
});
