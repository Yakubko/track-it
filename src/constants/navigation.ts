import { CompositeNavigationProp } from '@react-navigation/native';
import { NavigatorScreenParams } from '@react-navigation/core';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { MeasurementType } from './data';

export type DashboardScreenList = {
	Dashboard: undefined;
};
export type DashboardStackProp = StackNavigationProp<MeasurementsScreenList>;

export type ChallengesScreenList = {
	Challenges: undefined;
};
export type ChallengesStackProp = StackNavigationProp<MeasurementsScreenList>;

export type MeasurementsScreenList = {
	Measurements: undefined;
	History: { headerTitle: string; measurementName: MeasurementType['name'] };
};
export type MeasurementsStackProp = StackNavigationProp<MeasurementsScreenList>;

export type RootScreenList = {
	Dashboard: NavigatorScreenParams<DashboardScreenList>;
	Measurements: NavigatorScreenParams<MeasurementsScreenList>;
	Challenges: NavigatorScreenParams<ChallengesScreenList>;
};
export type RootDrawerProp = DrawerNavigationProp<RootScreenList>;

// WIP
// type MeasurementsStackProps = StackScreenProps<MeasurementsScreenList>;

// type ProfileScreenNavigationProp = CompositeNavigationProp<
// 	DrawerNavigationProp<RootScreenList, 'Measurements'>,
// 	StackNavigationProp<MeasurementsScreenList>
// >;
