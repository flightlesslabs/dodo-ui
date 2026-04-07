import type { SegmentPart } from 'bits-ui';

// ---- Segment Types ----
export type DateSegment = {
  part: SegmentPart;
  value: string;
};

// ---- Supported format tokens ----
export type FormatToken = 'dd' | 'mm' | 'yyyy' | 'hh' | 'min' | 'ss';

// ---- Optional: stricter format typing ----
type Separator = '/' | '-' | '.' | ' ';

export type DatePickerFormat =
  | `${FormatToken}${Separator}${FormatToken}${Separator}${FormatToken}`
  | `${FormatToken}${Separator}${FormatToken}`
  | `${FormatToken}`;

// ---- Formatter ----
export function formatSegments(segments: DateSegment[], format: DatePickerFormat): DateSegment[] {
  const segmentMap: Partial<Record<SegmentPart, DateSegment>> = Object.fromEntries(
    segments.map((s) => [s.part, s]),
  );

  const tokens = format.match(/dd|mm|yyyy|hh|min|ss|./g) ?? [];

  return tokens.map((token): DateSegment => {
    switch (token) {
      case 'dd':
        return segmentMap.day ?? { part: 'day', value: '' };

      case 'mm':
        return segmentMap.month ?? { part: 'month', value: '' };

      case 'yyyy':
        return segmentMap.year ?? { part: 'year', value: '' };

      case 'hh':
        return segmentMap.hour ?? { part: 'hour', value: '' };

      case 'min':
        return segmentMap.minute ?? { part: 'minute', value: '' };

      case 'ss':
        return segmentMap.second ?? { part: 'second', value: '' };

      default:
        return {
          part: 'literal',
          value: token,
        };
    }
  });
}
