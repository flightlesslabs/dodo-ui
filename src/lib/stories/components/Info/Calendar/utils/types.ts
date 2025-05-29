export const enum DAYS_OF_WEEK {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
}

export const daysOfWeekArray = [
  DAYS_OF_WEEK.SUN,
  DAYS_OF_WEEK.MON,
  DAYS_OF_WEEK.TUE,
  DAYS_OF_WEEK.WED,
  DAYS_OF_WEEK.THU,
  DAYS_OF_WEEK.FRI,
  DAYS_OF_WEEK.SAT,
];

export type DateOfMonth = {
  id: string;
  date: Date;
  isCurrentMonth: boolean;
  isLastMonth?: boolean;
  isNextMonth?: boolean;
  disabled?: boolean;
  today?: boolean;
};
