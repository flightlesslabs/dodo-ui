export const enum DAYS_OF_WEEK {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
}

export const enum MONTHS {
  JAN,
  FEB,
  MAR,
  APR,
  MAY,
  JUN,
  JUL,
  AUG,
  SEP,
  OCT,
  NOV,
  DEC,
}

export type DateOfMonth = {
  id: string;
  date: Date;
  isCurrentMonth: boolean;
  isLastMonth?: boolean;
  isNextMonth?: boolean;
  disabled?: boolean;
  today?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  inRange?: boolean;
};

export type DateRangeType = 'start' | 'end';
