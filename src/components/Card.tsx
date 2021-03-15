import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
	children: React.ReactNode;
}

export default function Card({ children }: Props) {
	return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
	card: {
		marginLeft: 4,
		marginRight: 4,
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: '#373740',
		borderRadius: 8,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 2,
	},
});
