import React, { useEffect, useState } from 'react';
import { Platform, StyleProp, View, ViewStyle, VirtualizedList, VirtualizedListProps } from 'react-native';
import * as Haptics from 'expo-haptics';

import Typography from './Typography';

export type RenderItem<Type> = (data: { item: Type; isSelected: boolean; height: number }) => React.ReactElement;

export interface Props<Type> {
	dataSource: Type[];
	height: number;
	selected?: Type;
	onChange: (item: Type, index: number) => void;
	extractKey?: VirtualizedListProps<Type>['keyExtractor'];
	renderItem?: RenderItem<Type>;
}

export default function WheelSelect<Type>({
	height,
	selected: initialValue,
	extractKey,
	dataSource,
	onChange,
	renderItem: customRenderItem,
}: Props<Type>): React.ReactElement {
	const itemHeight = height / 3;
	const wrapperStyle: StyleProp<ViewStyle> = { height };
	const initialIndex = dataSource.findIndex((item) => item === initialValue);

	let timer = 0;
	let isScrollTo = false;
	let dragStarted = false;
	let momentumStarted = false;
	let valuePicker: VirtualizedList<Type> | null;
	let lastHapticIndex = initialIndex < 0 ? 0 : initialIndex;

	const [selected, setSelected] = useState<number>(initialIndex < 0 ? 0 : initialIndex);
	useEffect(() => {
		timer = window.setTimeout(() => valuePicker?.scrollToIndex({ index: selected, animated: false }), 0);

		return () => {
			timer && clearTimeout(timer);
		};
	}, [timer]);

	const renderItem: VirtualizedListProps<Type>['renderItem'] = ({ item, index }) => {
		if (index === 0 || index === dataSource.length + 1) return <View style={{ height: itemHeight }} />;

		const isSelected = index - 1 === selected;
		return (
			<View style={{ height: itemHeight }} key={index}>
				{customRenderItem ? customRenderItem({ item, isSelected, height }) : <Typography bold={isSelected}>Item {item}</Typography>}
			</View>
		);
	};

	const getItem: VirtualizedListProps<Type>['getItem'] = (data, index) => {
		if (index === 0 || index === data.length + 1) return;

		return data[index - 1];
	};

	const getItemLayout: VirtualizedListProps<Type>['getItemLayout'] = (_, index) => ({ length: itemHeight, offset: itemHeight * index, index });

	const keyExtractor: VirtualizedListProps<Type>['keyExtractor'] = (item, index) => {
		if (index === 0 || index === dataSource.length + 1) return `__placeholder_${index}`;

		return extractKey ? extractKey(item, index - 1) : String(index);
	};

	const scrollTo = (contentOffsetY: number) => {
		let selectedIndex = Math.round(contentOffsetY / itemHeight);
		let _y = selectedIndex * itemHeight;
		if (_y !== contentOffsetY) {
			if (Platform.OS === 'ios') isScrollTo = true;
			valuePicker?.scrollToIndex({ index: selectedIndex });
		}

		if (selected === selectedIndex) return;

		setSelected(selectedIndex);

		onChange(dataSource[selectedIndex], selectedIndex);
	};

	const onMomentumScrollBegin: VirtualizedListProps<Type>['onMomentumScrollBegin'] = () => {
		momentumStarted = true;
		timer && window.clearTimeout(timer);
	};
	const onMomentumScrollEnd: VirtualizedListProps<Type>['onMomentumScrollBegin'] = (event) => {
		momentumStarted = false;

		if (!isScrollTo && !momentumStarted && !dragStarted) scrollTo(event?.nativeEvent?.contentOffset?.y ?? 0);
	};

	const onScroll: VirtualizedListProps<Type>['onScroll'] = (event) => {
		const contentOffsetY = event?.nativeEvent?.contentOffset?.y ?? 0;
		let selectedIndex = Math.round(contentOffsetY / itemHeight);

		if (lastHapticIndex === selectedIndex) return;
		lastHapticIndex = selectedIndex;

		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
	};

	const onScrollBeginDrag: VirtualizedListProps<Type>['onScrollBeginDrag'] = () => {
		dragStarted = true;
		if (Platform.OS === 'ios') isScrollTo = false;

		timer && window.clearTimeout(timer);
	};
	const onScrollEndDrag: VirtualizedListProps<Type>['onScrollEndDrag'] = (event) => {
		dragStarted = false;
		const contentOffsetY = event?.nativeEvent?.contentOffset?.y ?? 0;

		timer && window.clearTimeout(timer);
		timer = window.setTimeout(() => {
			if (!momentumStarted && !dragStarted) scrollTo(contentOffsetY);
		}, 10);
	};

	return (
		<View style={wrapperStyle}>
			<VirtualizedList<Type>
				style={{ paddingRight: 5, paddingLeft: 5 }}
				ref={(ref) => (valuePicker = ref)}
				data={dataSource}
				getItem={getItem}
				keyExtractor={keyExtractor}
				getItemCount={() => dataSource.length + 2}
				getItemLayout={getItemLayout}
				renderItem={renderItem}
				bounces={false}
				showsVerticalScrollIndicator={false}
				onMomentumScrollBegin={onMomentumScrollBegin}
				onMomentumScrollEnd={onMomentumScrollEnd}
				onScroll={onScroll}
				scrollEventThrottle={5}
				onScrollBeginDrag={onScrollBeginDrag}
				onScrollEndDrag={onScrollEndDrag}
			/>
		</View>
	);
}
