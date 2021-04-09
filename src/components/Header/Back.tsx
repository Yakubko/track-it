import React from 'react';
import { View } from 'react-native';
import { ParamListBase } from '@react-navigation/routers';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { theme } from '@constants/theme';

interface Props {
	navigation: StackNavigationProp<ParamListBase>;
}

export default function Back({ navigation }: Props): React.ReactElement {
	return (
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 2, paddingRight: 10 }}>
				<MaterialIcons name="arrow-back-ios" size={25} style={{ color: theme.colors.primary }} />
			</View>
		</TouchableOpacity>
	);
}
