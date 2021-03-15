import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import BottomSheetOriginal from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

interface Props {
	children: React.ReactNode;
	visible: boolean;
	onClose: () => void;
}

export default function BottomSheet({ visible, children, onClose }: Props): React.ReactElement {
	const [overlay, setOverlay] = useState(visible);
	const sheetRef = React.useRef<BottomSheetOriginal>(null);

	useFocusEffect(
		React.useCallback(() => {
			return () => {
				sheetRef.current?.snapTo(1);
			};
		}, [])
	);

	useEffect(() => {
		sheetRef.current?.snapTo(visible ? 0 : 1);
	}, [visible]);

	const fall = new Animated.Value(1);

	const renderHeader = () => (
		<View style={styles.header}>
			<View style={styles.panelHeader}>
				<View style={styles.panelHandle} />
			</View>
		</View>
	);

	return (
		<>
			<BottomSheetOriginal
				enabledInnerScrolling={false}
				ref={sheetRef}
				initialSnap={0}
				callbackNode={fall}
				onOpenStart={() => setOverlay(true)}
				onCloseEnd={() => {
					setOverlay(false);
					onClose();
				}}
				snapPoints={[400, 0]}
				renderHeader={renderHeader}
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
		backgroundColor: '#33333d',
		shadowColor: '#000000',
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
		backgroundColor: '#00000040',
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
