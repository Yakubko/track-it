import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '@constants/theme';

export default function Divider() {
	return <View style={{ borderColor: theme.colors.divider, borderWidth: StyleSheet.hairlineWidth, marginLeft: 10, marginRight: 10 }} />;
}
