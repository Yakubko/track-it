import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import BottomSheetOriginal from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import { theme } from '@constants/theme';

interface Props {
	children: React.ReactElement;
	header?: () => React.ReactElement;
	snapTo: number;
	heights: number[];
	onClose: () => void;
}

export default function BottomSheet({ snapTo, children, heights, header, onClose }: Props): React.ReactElement {
	const [overlay, setOverlay] = useState(snapTo !== heights.length);
	const sheetRef = React.useRef<BottomSheetOriginal>(null);

	useFocusEffect(
		React.useCallback(() => {
			return () => {
				sheetRef.current?.snapTo(heights.length);
			};
		}, [])
	);

	useEffect(() => {
		sheetRef.current?.snapTo(snapTo);
	}, [snapTo]);

	const fall = new Animated.Value(0.4);

	const RenderHeader = function RenderHeader(): React.ReactElement {
		return (
			<>
				<View style={styles.header}>
					<View style={styles.panelHeader}>
						<View style={styles.panelHandle} />
					</View>
					{header ? header() : null}
				</View>
			</>
		);
	};

	return (
		<>
			<BottomSheetOriginal
				enabledBottomInitialAnimation
				enabledManualSnapping={false}
				enabledContentTapInteraction={false}
				enabledContentGestureInteraction={false}
				ref={sheetRef}
				initialSnap={overlay ? 0 : heights.length}
				callbackNode={fall}
				onOpenStart={() => setOverlay(true)}
				onCloseEnd={() => {
					setOverlay(false);
					onClose();
				}}
				snapPoints={[...heights, 0]}
				renderHeader={RenderHeader}
				renderContent={() => children}
			/>
			{overlay ? (
				<Animated.View
					style={[
						styles.overlay,
						{
							opacity: Animated.sub(0.4, Animated.multiply(fall, 0.4)),
						},
					]}
				/>
			) : null}
		</>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: theme.colors.background,
		shadowColor: theme.colors.shadowColor,
		paddingTop: 10,
		paddingBottom: 15,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	panelHeader: {
		alignItems: 'center',
	},
	panelHandle: {
		width: 40,
		height: 8,
		borderRadius: 4,
		backgroundColor: `${theme.colors.shadowColor}40`,
	},
	overlay: {
		flex: 1,
		position: 'absolute',
		left: 0,
		top: 0,
		backgroundColor: 'black',
		width: '100%',
		height: '100%',
	},
});
