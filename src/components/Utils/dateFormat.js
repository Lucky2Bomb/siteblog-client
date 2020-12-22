export const formatYYYY_MM_DD = (year, mouth, day, spaceSymbol = "-") => {
    let YYYY = year;
    let MM = (mouth + 1 < 10) ? `0${mouth + 1}` : mouth + 1;
    let DD = (day < 10) ? `0${day}` : day;
    return `${YYYY}${spaceSymbol}${MM}${spaceSymbol}${DD}`;
}

export const formatDD_MM_YYYY = (year, mouth, day, spaceSymbol = "-") => {
    let YYYY = year;
    let MM = (mouth + 1 < 10) ? `0${mouth + 1}` : mouth + 1;
    let DD = (day < 10) ? `0${day}` : day;
    return `${DD}${spaceSymbol}${MM}${spaceSymbol}${YYYY}`;
}

export const formatHH_MM = (hours, minutes, spaceSymbol = ":") => {
    let MM = minutes < 10 ? `0${minutes}` : minutes;
    let HH = hours < 10 ? `0${hours}` : hours;
    return `${HH}${spaceSymbol}${MM}`;
} 