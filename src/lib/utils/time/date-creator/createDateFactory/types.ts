import type { ConfigType } from 'dayjs';

export type CreateDateInput = ConfigType;
export type CreateDateFormat = string | undefined;

export interface CreateDateOptions {
  timezone?: string;
  utc?: boolean;
  strict?: boolean;
  throwOnInvalid?: boolean;
}
