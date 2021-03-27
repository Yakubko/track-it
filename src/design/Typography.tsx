import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';

import { theme } from '@constants/theme';

interface Props {
	variant?: 'h1' | 'h6' | 'body1' | 'button';
	fontFamily?: keyof typeof fontFamilyAliases;
	bold?: boolean;

	style?: StyleProp<TextStyle>;
	children: React.ReactNode;
}

const fontFamilyAliases = {
	roboto: { regular: 'RobotoCondensed_400Regular', bold: 'RobotoCondensed_700Bold' },
	eczar: { regular: 'Eczar_400Regular', bold: 'Eczar_600SemiBold' },
};

export default function Typography({ children, fontFamily = 'roboto', bold = false, style = {}, variant }: Props) {
	const textStyle: StyleProp<TextStyle> = {
		color: theme.colors.primary,
		fontFamily: fontFamilyAliases[fontFamily][bold ? 'bold' : 'regular'],
	};

	switch (variant) {
		case 'h1':
			textStyle.fontSize = 25;
			break;

		case 'h6':
			textStyle.fontSize = 20;
			break;

		case 'body1':
			break;

		case 'button':
			textStyle.padding = 10;
			textStyle.fontSize = 18;
			break;
	}

	const finaleStyle = StyleSheet.compose(textStyle, style);

	return <Text style={finaleStyle}>{children}</Text>;
}
