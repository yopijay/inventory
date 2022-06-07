export const months = () => ([
    { id: '1', name: 'JAN', label: 'january' },
    { id: '2', name: 'FEB', label: 'february' },
    { id: '3', name: 'MAR', label: 'march' },
    { id: '4', name: 'APR', label: 'april' },
    { id: '5', name: 'MAY', label: 'may' },
    { id: '6', name: 'JUN', label: 'june' },
    { id: '7', name: 'JUL', label: 'july' },
    { id: '8', name: 'AUG', label: 'august' },
    { id: '9', name: 'SEP', label: 'september' },
    { id: '10', name: 'OCT', label: 'october' },
    { id: '11', name: 'NOV', label: 'november' },
    { id: '12', name: 'DEC', label: 'december' },
]);

export const days = (month = 1, year = new Date().getFullYear()) => {
    let _days = [];
    let _dayMonth = month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ? 
                                31 : month === 4 || month === 6 || month === 9 || month === 11 ? 
                                        30 : ((0 === year % 4) && (0 !== year % 100)) || (0 === year % 400) ? 29 : 28;

    for(let _day = 1; _day <= _dayMonth; _day++) {
        _days.push({ id: _day.toString(), name: _day });
    }
    return _days;
}

export const years = () => {
    let _year = [];
    let _curYear = new Date().getFullYear();

    for(let year = _curYear - 122; year <=  _curYear; year++) {
        _year.push({ id: year.toString(), name: year });
    }

    _year.sort()
    return _year.reverse();
}