const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const isoWeek = require('dayjs/plugin/isoWeek');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isoWeek);
dayjs.tz.setDefault('Asia/Tokyo');

console.log('現在時刻（東京）', dayjs().tz().format());
console.log('1日前', dayjs().tz().subtract(1, 'days').format());
console.log('1週間前', dayjs().tz().subtract(1, 'weeks').format());
console.log('週初め(日曜日始まり)', dayjs().tz().startOf('w').format());
console.log(
    '週初め(月曜日始まり)',
    dayjs().tz().isoWeekday(1).startOf('isoWeek').format(),
);
console.log(
    '1週間前の週初め(月曜日始まり)',
    dayjs().tz().subtract(1, 'weeks').startOf('isoWeek').format(),
);
console.log(
    '1週間前の週初め(日曜始まり)',
    dayjs().tz().subtract(1, 'weeks').startOf('w').format(),
);