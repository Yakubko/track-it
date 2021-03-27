import React from 'react';
import { View } from 'react-native';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import { MeasurementData } from '@constants/data';

import Gradient from './Gradient';
import Timeline from './Timeline';
import { fixTimelineGaps, getGridMinMax } from './helpers';

export interface Props {
	data: MeasurementData[];
	height?: number;
	timeline?: boolean;
}

export default function Area({ data, height = 100, timeline = false }: Props) {
	const gridMinMax = getGridMinMax(data);
	const chartData = fixTimelineGaps(data);

	const from: MeasurementData['date'] | undefined = chartData[0]?.date;
	const to: MeasurementData['date'] | undefined = chartData.length > 0 ? chartData[chartData.length - 1].date : undefined;

	return (
		<View style={{ height }}>
			<AreaChart
				style={{ flex: 1 }}
				data={chartData.map((item) => item.value)}
				gridMin={gridMinMax.min}
				gridMax={gridMinMax.max}
				curve={shape.curveCardinal}
				svg={{ fill: 'url(#gradient)' }}
			>
				<Gradient min={gridMinMax.min} max={gridMinMax.max} />
			</AreaChart>

			{timeline ? <Timeline from={from} to={to} /> : null}
		</View>
	);
}
