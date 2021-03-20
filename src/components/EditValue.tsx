import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider, Typography } from './core';
import Button from './Button';

interface Props {
	name: string | null;
}

export default function EditValue({ name }: Props): React.ReactElement {
	const handlePress = () => {};

	return (
		<View style={styles.root}>
			<Typography variant="h1" bold style={{ paddingBottom: 5 }}>
				{name}
			</Typography>
			<Typography variant="body1" style={{ paddingBottom: 25 }}>
				Select date and chose a new value
			</Typography>
			<Divider />
			<TouchableOpacity onPress={() => {}}>
				<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10 }}>
					<Typography variant="h6" bold>
						TODAY
					</Typography>
				</View>
			</TouchableOpacity>
			<Divider />
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Typography fontFamily="eczar" style={{ fontSize: 90 }}>
					90.6
				</Typography>
			</View>

			<View>
				<View style={styles.fixToText}>
					<Button title={'Delete'} color="danger" onPress={() => {}} />
					<Button title={'Save'} color="success" onPress={() => {}} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#33333d',
		padding: 20,
		paddingTop: 0,
		height: 400,
	},
	fixToText: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
