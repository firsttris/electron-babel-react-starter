export function resetCurrentUser() {
    return {type: 'currentUser/resetCurrentUser'}
}

export function resetCurrentUserChipId() {
    return {type: 'currentUser/resetCurrentUserChipId'}
}

export function saveCurrentUser(user) {
    return {type: 'currentUser/saveCurrentUser', data: user}
}


/// API Calls ///

export function startGetChipId() {
    return {type: 'server/startGetChipId'}
}

export function stopGetChipId() {
    return {type: 'server/stopGetChipId'};
}

export function startScan() {
    return {type: 'server/startScan'}
}

export function stopScan() {
    return {type: 'server/stopScan'}
}

export function insertUser(user) {
    return {type: 'server/insertUser', data: user}
}

export function updateUser(user) {
    return {type: 'server/updateUser', data: user}
}

export function deleteUser(user) {
    return {type: 'server/deleteUser', data: user}
}

export function getUsers() {
    return {type: 'server/getUsers'}
}

export function updateTimestamps(user, date, timestamps) {
    return {type: 'server/updateTimestamps', data: {user: user, date: date, timestamps: timestamps}}
}

export function getStatisticsForDate(id, date) {
    return {type: 'server/getStatisticsForDate', data: {id: id, date: date}}
}

export function getStatisticsForWeek(id, date) {
    return {type: 'server/getStatisticsForWeek', data: {id: id, date: date}}
}

export function getStatisticsForMonth(id, date) {
    return {type: 'server/getStatisticsForMonth', data: {id: id, date: date}}
}