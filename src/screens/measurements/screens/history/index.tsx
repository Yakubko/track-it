import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { Button } from '@components/core';
import { MeasurementsStackProp } from '@constants/navigation';

export default function History() {
	const navigation = useNavigation<MeasurementsStackProp>();

	return (
		<>
			<Button
				title="spat"
				color="success"
				onPress={() => {
					navigation.goBack();
				}}
			/>
		</>
	);
}
