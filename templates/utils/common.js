export const getFormatTime = function (date) {
    if (!date) {
        date = new Date()
    }

    const year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        weekDay = date.getDay(),

        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();

    function formatNumber(n) {
        n = n.toString();
        return n[1] ? n : '0' + n
    }

    return {
        date: [year, month, day].map(formatNumber).join('/'),
        time: [hour, minute, second].map(formatNumber).join(':'),
        year,
        month,
        day,
        weekDay,
        hour,
        minute,
        second
    }
}