import { createDateFactory } from '../createDateFactory/createDateFactory.js';
import defaultDayjs from '../createDateFactory/dayjs.js';

const { createDate } = createDateFactory(defaultDayjs);

export { createDate };
