import React from 'react';
import { StackHeaderProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Typography } from '@components/index';

interface Props extends StackHeaderProps {}

export default function Header(props: Props) {
	return (
		<SafeAreaView edges={['top']} style={{ padding: 10, paddingLeft: 15 }}>
			<Typography variant="h1" fontFamily="roboto">
				{props.scene.descriptor.options.title ?? props.scene.route.name}
			</Typography>
		</SafeAreaView>
	);
}
