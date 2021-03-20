import React from 'react';
import { View } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

export default function BodyweightChart() {
	return (
		<ProgressCircle
			style={{ height: 50 }}
			startAngle={-Math.PI * 0.8}
			endAngle={Math.PI * 0.8}
			cornerRadius={10}
			progress={0.8}
			progressColor={'rgb(134, 65, 244)'}
		/>
	);
}
