import { NavigatorScreenParams } from '@react-navigation/core';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigationProp } from '@react-navigation/stack';

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
	History: { name: string };
};
export type MeasurementsStackProp = StackNavigationProp<MeasurementsScreenList>;

export type RootScreenList = {
	Dashboard: NavigatorScreenParams<DashboardScreenList>;
	Measurements: NavigatorScreenParams<MeasurementsScreenList>;
	Challenges: NavigatorScreenParams<ChallengesScreenList>;
};
export type RootDrawerProp = DrawerNavigationProp<RootScreenList>;
