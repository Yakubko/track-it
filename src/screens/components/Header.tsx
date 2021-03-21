import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StackHeaderProps, StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ParamListBase } from '@react-navigation/routers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { theme } from '@constants/theme';
import { Typography } from '@components/core';

interface BackProps {
	navigation: StackNavigationProp<ParamListBase>;
}

function Back({ navigation }: BackProps) {
	return (
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 2, paddingRight: 10 }}>
				<MaterialIcons name="arrow-back-ios" size={25} style={{ color: theme.colors.primary }} />
			</View>
		</TouchableOpacity>
	);
}

interface Props extends StackHeaderProps {
	back?: boolean;
}

export default function Header({ navigation, scene, back }: Props) {
	return (
		<SafeAreaView
			edges={['top']}
			style={{
				flexDirection: 'row',
				padding: 10,
				paddingLeft: 15,

				width: '100%',
				backgroundColor: theme.colors.background,
				shadowColor: theme.colors.shadowColor,
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.25,
			}}
		>
			{back ? <Back navigation={navigation} /> : null}
			<Typography variant="h1" fontFamily="roboto">
				{scene.route.params?.name ?? scene.descriptor.options.title ?? scene.route.name}
			</Typography>
		</SafeAreaView>
	);
}
