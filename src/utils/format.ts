import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'
dayjs.extend(utc)

export function formatTimeByUtc(
  utcTime: string,
  format: string = 'YYYY-MM-DD HH:mm:ss'
) {
  const time = dayjs(utcTime).utc().format(format)
  return time
}
