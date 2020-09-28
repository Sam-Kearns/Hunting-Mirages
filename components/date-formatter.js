import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  const formattedDate = (date != 'Invalid Date') ? format(date, 'yyyy LLL dd') : '';
  return <time dateTime={dateString}>{formattedDate}</time>
}
