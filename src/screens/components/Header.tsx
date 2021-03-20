import React from 'react';
import { View } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@constants/theme';
import { Typography } from '@components/core';

interface Props extends StackHeaderProps {}

export default function Header(props: Props) {
	return (
		<SafeAreaView
			edges={['top']}
			style={{
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
			<Typography variant="h1" fontFamily="roboto">
				{props.scene.descriptor.options.title ?? props.scene.route.name}
			</Typography>
		</SafeAreaView>
	);
}
