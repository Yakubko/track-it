import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

import { MeasurementData } from '@constants/data';
import { Typography } from '@components/core';

interface BodyweightChartProps {
	data: MeasurementData[];
}
interface MinMax {
	min: number | null;
	max: number | null;
}

export default function BodyweightChart({ data }: BodyweightChartProps) {
	const minMax: MinMax = { min: null, max: null };
	for (const weight of data) {
		const formattedWeight = Math.max(Math.min(Math.round(weight.value), 150), 0);
		if (minMax.min === null) minMax.min = formattedWeight;
		if (minMax.max === null) minMax.max = formattedWeight;

		minMax.min = Math.min(minMax.min, formattedWeight);
		minMax.max = Math.max(minMax.max, formattedWeight);
	}
	minMax.min = Math.max((minMax.min ?? 0) - 4, 0);
	minMax.max = (minMax.max ?? 100) + 3;

	const Gradient = ({ index }: any) => (
		<Defs key={index}>
			<LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
				<Stop offset={'0%'} stopColor={'#1EB980'} stopOpacity={0.8} />
				<Stop offset={'13%'} stopColor={'#045d56'} stopOpacity={0.2} />
			</LinearGradient>
		</Defs>
	);

	const chartData = data.map((item) => item.value);
	if (chartData.length === 1) {
		chartData.push(chartData[0]);
	}

	return (
		<>
			<AreaChart
				style={{ flex: 1, height: 150 }}
				data={chartData}
				gridMin={minMax.min}
				gridMax={minMax.max}
				curve={shape.curveCardinal}
				svg={{ fill: 'url(#gradient)' }}
			>
				<Gradient />
			</AreaChart>

			<View style={{ padding: 5, paddingTop: 10, paddingBottom: 10, flexDirection: 'row' }}>
				<TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row' }}>
					<View style={{ width: '30%' }}>
						<Typography>jan 1</Typography>
					</View>
					<View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
						<Typography>Jun 31</Typography>
					</View>
					<View style={{ width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
						<Typography>dec 31</Typography>
					</View>
				</TouchableOpacity>
			</View>
		</>
	);
}
