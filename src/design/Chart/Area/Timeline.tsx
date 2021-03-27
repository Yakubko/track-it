import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Typography from '@design/Typography';

export default function Timeline(): React.ReactElement {
	return (
		<View style={{ padding: 5, paddingTop: 10, paddingBottom: 10, flexDirection: 'row' }}>
			<TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row' }}>
				<View style={{ width: '30%' }}>
					<Typography>jan 1</Typography>
				</View>
				<View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
					<Typography>Jun 31</Typography>
				</View>
				<View style={{ width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
					<Typography>dec 31</Typography>
				</View>
			</TouchableOpacity>
		</View>
	);
}
