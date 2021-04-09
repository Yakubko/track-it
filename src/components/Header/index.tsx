import React from 'react';
import { Animated, View } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@constants/theme';
import { Typography } from '@design/core';

import Back from './Back';
import Menu from './Menu';

interface Props extends StackHeaderProps {
	back?: boolean;
	menu?: boolean;
	right?: (props: Pick<StackHeaderProps, 'navigation' | 'scene'>) => React.ReactElement;
}

export default function Header({ navigation, scene, back, menu, right }: Props) {
	const progress = Animated.add(scene.progress.current as any, scene.progress.next || 0);

	const opacity = progress.interpolate({
		inputRange: [0, 1, 2],
		outputRange: [0, 1, 0],
	});

	return (
		<Animated.View style={{ opacity }}>
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
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
					{menu ? <Menu navigation={navigation} /> : null}
					{back ? <Back navigation={navigation} /> : null}

					<Typography variant="h1" fontFamily="roboto">
						{scene.route.params?.headerTitle ?? scene.descriptor.options.title ?? scene.route.name}
					</Typography>
				</View>
				{right ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>{right({ navigation, scene })}</View> : null}
			</SafeAreaView>
		</Animated.View>
	);
}
