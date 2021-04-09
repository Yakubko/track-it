import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import DraggableFlatList from 'react-native-draggable-flatlist';

import { Divider } from '@design/core';
import { MeasurementsScreenProps } from '@constants/navigation';
import { useSelector, useDispatch, setTypes } from '@store/core';

import ListItem from './ListItem';

export { default as HeaderAdd } from './HeaderAdd';

export default function List(): React.ReactElement {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.types);
	const insets = useSafeAreaInsets();
	const navigation = useNavigation<MeasurementsScreenProps<'List'>['navigation']>();

	return (
		<SafeAreaView edges={['left', 'right']} style={{ flex: 1 }}>
			<DraggableFlatList
				data={data}
				renderItem={({ drag, item, index }) => {
					const lastItem = index === data.length - 1;
					return (
						<View key={item.name} style={{ paddingBottom: lastItem ? insets.bottom : 0 }}>
							<ListItem object={item} navigation={navigation} drag={drag} />
							{!lastItem ? <Divider /> : null}
						</View>
					);
				}}
				keyExtractor={(item) => item.name}
				onDragEnd={({ data }) => dispatch(setTypes(data))}
			/>
		</SafeAreaView>
	);
}
