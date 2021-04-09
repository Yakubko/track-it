import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Typography from '@design/Typography';

export { default as HeaderAdd } from './HeaderAdd';

export default function EditList(): React.ReactElement {
	return (
		<ScrollView>
			<SafeAreaView edges={['bottom']} style={{ padding: 10 }}>
				<Typography variant="body1">You can change here position of items in list, create new item or update it.</Typography>
			</SafeAreaView>
		</ScrollView>
	);
}
