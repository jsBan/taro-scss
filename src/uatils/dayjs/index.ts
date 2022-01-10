import * as dayjs from 'dayjs'

const unix = (date) => {
    /**
     * 字符串时间转时间戳
     * @param {String | Date } date 日期
     * @returns
     */
    return dayjs(date).unix();
}

const formatDate = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
    /**
     * 格式化日期
     * @param {String | Date } date 日期
     * @param {String} format 格式   如：YYYY-MM-DD
     * @returns  YYYY-MM-DD HH:mm:ss
     **/
    return dayjs(date).format(format) 
}

export {
    unix,
    formatDate
}