import dayjs, { Dayjs } from 'dayjs'

export const convertDayOfWeekToKorean = (dayOfWeek: number): string => {
  switch (dayOfWeek) {
    case 0: {
      return '일'
    }
    case 1: {
      return '월'
    }
    case 2: {
      return '화'
    }
    case 3: {
      return '수'
    }
    case 4: {
      return '목'
    }
    case 5: {
      return '금'
    }
    case 6: {
      return '토'
    }
    default: {
      return '미확인'
    }
  }
}

export const getToday = (format: string): string => {
  return dayjs().format(format)
}

export const getDateByString = (str: string): Dayjs => {
  return dayjs(str)
}
