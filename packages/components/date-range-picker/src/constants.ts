import { RelativeDateRange } from './date.types';

export const SECONDS = 'SECONDS' as const;
export const MINUTES = 'MINUTES' as const;
export const HOURS = 'HOURS' as const;
export const DAYS = 'DAYS' as const;
export const WEEKS = 'WEEKS' as const;
export const MONTHS = 'MONTHS' as const;
export const YEARS = 'YEARS' as const;
export const ABSOLUTE = 'ABSOLUTE' as const;
export const RELATIVE = 'RELATIVE' as const;
export const RELATIVE_OFFSET_MAX = 999999;
export const RELATIVE_DURATION_MAX = 999999;
export const RELATIVE_UNITS = [SECONDS, MINUTES, HOURS, DAYS, WEEKS, MONTHS, YEARS] as const;

export const range = (start: number, end: number): number[] => {
  if (end <= start) {
    return [];
  }
  const size = end - start;
  return [...Array(size).keys()].map(i => i + start);
};
export const CUSTOM_RANGE_KEY = 'custom';
export const DURATION_MODIFIERS = {
  LAST: 'timestampLast',
  NEXT: 'timestampNext',
};

export const RELATIVE_PRESETS: RelativeDateRange[] = [
  {
    key: 'TODAY',
    translationKey: 'today',
    type: RELATIVE,
    from: null,
    to: null,
    future: false,
    offset: { type: DAYS, value: 0 },
    duration: { type: DAYS, value: 1 },
  },
  {
    key: 'YESTERDAY',
    translationKey: 'yesterday',
    type: RELATIVE,
    from: null,
    to: null,
    future: false,
    offset: { type: DAYS, value: 1 },
    duration: { type: DAYS, value: 1 },
  },
  {
    key: 'TOMORROW',
    translationKey: 'tomorrow',
    type: RELATIVE,
    from: null,
    to: null,
    future: true,
    offset: { type: DAYS, value: 1 },
    duration: { type: DAYS, value: 1 },
  },
  {
    key: 'LAST_WEEK',
    translationKey: 'lastWeek',
    type: RELATIVE,
    from: null,
    to: null,
    future: false,
    offset: { type: WEEKS, value: 1 },
    duration: { type: WEEKS, value: 1 },
  },
  {
    key: 'THIS_WEEK',
    translationKey: 'thisWeek',
    type: RELATIVE,
    from: null,
    to: null,
    future: false,
    offset: { type: WEEKS, value: 0 },
    duration: { type: WEEKS, value: 1 },
  },
  {
    key: 'NEXT_WEEK',
    translationKey: 'nextWeek',
    type: RELATIVE,
    from: null,
    to: null,
    future: true,
    offset: { type: WEEKS, value: 1 },
    duration: { type: WEEKS, value: 1 },
  },
  {
    key: 'LAST_7_DAYS',
    translationKey: 'last7Days',
    type: RELATIVE,
    from: null,
    to: null,
    future: false,
    offset: { type: DAYS, value: 0 },
    duration: { type: DAYS, value: 7 },
  },
  {
    key: 'NEXT_7_DAYS',
    translationKey: 'next7Days',
    type: RELATIVE,
    from: null,
    to: null,
    future: true,
    offset: { type: DAYS, value: 1 },
    duration: { type: DAYS, value: 7 },
  },
  {
    key: 'LAST_MONTH',
    translationKey: 'lastMonth',
    type: RELATIVE,
    from: null,
    to: null,
    future: false,
    offset: { type: MONTHS, value: 1 },
    duration: { type: MONTHS, value: 1 },
  },
  {
    key: 'THIS_MONTH',
    translationKey: 'thisMonth',
    type: RELATIVE,
    from: null,
    to: null,
    future: false,
    offset: { type: MONTHS, value: 0 },
    duration: { type: MONTHS, value: 1 },
  },
  {
    key: 'NEXT_MONTH',
    translationKey: 'nextMonth',
    type: RELATIVE,
    from: null,
    to: null,
    future: true,
    offset: { type: MONTHS, value: 1 },
    duration: { type: MONTHS, value: 1 },
  },
  {
    key: 'LAST_3_MONTHS',
    translationKey: 'last3Months',
    type: RELATIVE,
    from: null,
    to: null,
    future: false,
    offset: { type: MONTHS, value: 1 },
    duration: { type: MONTHS, value: 3 },
  },
  {
    key: 'NEXT_3_MONTHS',
    translationKey: 'next3Months',
    type: RELATIVE,
    from: null,
    to: null,
    future: true,
    offset: { type: MONTHS, value: 1 },
    duration: { type: MONTHS, value: 3 },
  },
  {
    key: 'LAST_6_MONTHS',
    translationKey: 'last6Months',
    type: RELATIVE,
    from: null,
    to: null,
    future: false,
    offset: { type: MONTHS, value: 1 },
    duration: { type: MONTHS, value: 6 },
  },
  {
    key: 'NEXT_6_MONTHS',
    translationKey: 'next6Months',
    type: RELATIVE,
    from: null,
    to: null,
    future: true,
    offset: { type: MONTHS, value: 1 },
    duration: { type: MONTHS, value: 6 },
  },
  {
    key: 'LAST_YEAR',
    translationKey: 'lastYear',
    type: RELATIVE,
    from: null,
    to: null,
    future: false,
    offset: { type: YEARS, value: 1 },
    duration: { type: YEARS, value: 1 },
  },
  {
    key: 'NEXT_YEAR',
    translationKey: 'nextYear',
    type: RELATIVE,
    from: null,
    to: null,
    future: true,
    offset: { type: YEARS, value: 1 },
    duration: { type: YEARS, value: 1 },
  },
  {
    key: 'ALL_TIME',
    translationKey: 'allTime',
    type: RELATIVE,
    offset: { type: SECONDS, value: 1 },
    duration: { type: YEARS, value: 100 },
  },
];

export const TIME_OPTIONS = {
  HOURS: range(0, 24),
  MINUTES: range(0, 60),
  SECONDS: range(0, 60),
};

export const MODES = {
  DATE: 'date',
  TIME: 'time',
  FILTER: 'filter',
};
export const COLUMNS = {
  LEFT: 'left',
  RIGHT: 'right',
};
