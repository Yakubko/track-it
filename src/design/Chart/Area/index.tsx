import React from 'react';
import { View } from 'react-native';
import { AreaChart, Grid, YAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
import * as shape from 'd3-shape';

import { MeasurementData } from '@store/core';

import Gradient from './Gradient';
import Timeline from './Timeline';
import { getGridMinMax } from './helpers';
import { theme } from '@constants/theme';

export interface Props {
	data: MeasurementData[];
	height?: number;
	timeline?: boolean;
	grid?: boolean;
}

export default function Area({ data, height = 100, timeline = false, grid = false }: Props) {
	const gridMinMax = getGridMinMax(data);
	const chartData = [...data].reverse();

	const from: MeasurementData['date'] | undefined = chartData[0]?.date;
	const to: MeasurementData['date'] | undefined = chartData.length > 0 ? chartData[chartData.length - 1].date : undefined;

	return (
		<>
			<View style={{ height }}>
				<View style={{ flexDirection: 'row', height: timeline ? height - 37 : height }}>
					<AreaChart
						style={{ flex: 1 }}
						data={chartData}
						yAccessor={({ item }) => item.value}
						xAccessor={({ item }) => item.date.unix()}
						xScale={scale.scaleTime}
						contentInset={{ top: 20, bottom: 10 }}
						curve={shape.curveBasis}
						svg={{ fill: 'url(#gradient)' }}
					>
						{grid ? <Grid svg={{ stroke: theme.colors.divider }} /> : null}
						<Gradient min={gridMinMax.min} max={gridMinMax.max} />
					</AreaChart>
					{grid ? (
						<YAxis
							style={{ position: 'absolute', top: 0, bottom: 0, marginLeft: 8 }}
							data={[gridMinMax.min, gridMinMax.max]}
							contentInset={{ top: 20, bottom: 10 }}
							numberOfTicks={4}
							svg={{
								fontSize: 11,
								fill: 'white',
								stroke: 'black',
								strokeWidth: 0.1,
								alignmentBaseline: 'baseline',
								baselineShift: '3',
							}}
						/>
					) : null}
				</View>
				{timeline ? <Timeline from={from} to={to} /> : null}
			</View>
		</>
	);
}
