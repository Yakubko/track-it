import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { theme } from '@constants/theme';
import { useNavigation } from '@react-navigation/core';
import { MeasurementsScreenProps } from '@constants/navigation';

export default function HeaderEdit(): React.ReactElement {
	const navigation = useNavigation<MeasurementsScreenProps<'Measurements'>['navigation']>();

	return (
		<TouchableOpacity onPress={() => navigation.navigate('List')}>
			<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 2, paddingRight: 10 }}>
				<MaterialIcons name="edit" size={25} style={{ color: theme.colors.primary }} />
			</View>
		</TouchableOpacity>
	);
}
