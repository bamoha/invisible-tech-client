const hour = (hour, localHour) => {
    let total = Math.abs(hour + localHour)
    if (total === 12) return [total, 'PM']
    return total > 12 ? [total - 12, 'PM'] : [`0${total}`, 'AM']
}

const getMinutes = (minutes) => {
    return minutes.toString().length > 1 ? minutes : `0${minutes}`
}

 const getSeconds = (seconds) => {
    return seconds.toString().length > 1 ? seconds : `0${seconds}`
}

export const configureTime = timezone => {
    let currentTime = new Date()
    let localHour = (parseInt(timezone) / 60) / 60
    let hourlyArr = hour(currentTime.getUTCHours(), localHour)
    let minutes = getMinutes(currentTime.getMinutes())
    let seconds = getSeconds(currentTime.getSeconds())
    return `${hourlyArr[0]}:${minutes}:${seconds} ${hourlyArr[1]}`
}