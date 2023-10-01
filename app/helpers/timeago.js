import { helper } from '@ember/component/helper';
import { isValid, parseISO, formatDistanceToNow } from 'date-fns';

export default helper(function timeago(positional) {
  const timestamp = positional[0];
  const date = parseISO(timestamp);
  let value = '-';

  if (timestamp && isValid(date)) {
    const timePeriod = formatDistanceToNow(date);
    value = `${timePeriod} ago`;
  }

  return value;
});
