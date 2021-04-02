import React from 'react';
import moment, { Moment } from 'moment';
import { Calendar as CalendarOriginal, CalendarTheme } from 'react-native-calendars';

import { theme } from '@constants/theme';

interface Props {
	selected: Moment;
	onSelect: (selectedDate: Moment) => void;
}

export default function Calendar({ selected, onSelect }: Props): React.ReactElement {
	const current = selected.format('YYYY-MM-DD');

	return (
		<CalendarOriginal
			hideExtraDays
			maxDate={moment().format('YYYY-MM-DD')}
			current={current}
			theme={calendarTheme}
			enableSwipeMonths={true}
			style={{ height: 350 }}
			markedDates={{
				[current]: { selected: true },
			}}
			onDayPress={(date) => {
				onSelect(moment(date.dateString, 'YYYY-MM-DD'));
			}}
		/>
	);
}

const calendarTheme: CalendarTheme = {
	calendarBackground: theme.colors.background,
	textSectionTitleColor: theme.colors.primary,
	selectedDayBackgroundColor: theme.colors.success,
	selectedDayTextColor: theme.colors.primary,
	todayTextColor: theme.colors.primary,
	dayTextColor: theme.colors.primary,
	textDisabledColor: theme.colors.grey,
	dotColor: theme.colors.success,
	selectedDotColor: theme.colors.primary,
	arrowColor: theme.colors.primary,
	monthTextColor: theme.colors.primary,
	textMonthFontWeight: 'bold',
};
