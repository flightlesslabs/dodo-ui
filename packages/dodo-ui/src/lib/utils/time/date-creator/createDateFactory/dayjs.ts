import dayjsFactory from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc.js';
import timezonePlugin from 'dayjs/plugin/timezone.js';
import customParseFormatPlugin from 'dayjs/plugin/customParseFormat.js';
import isBetweenPlugin from 'dayjs/plugin/isBetween.js';

const dayjs = dayjsFactory as typeof dayjsFactory;

// default plugin setup
dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);
dayjs.extend(customParseFormatPlugin);
dayjs.extend(isBetweenPlugin);

export default dayjs;
