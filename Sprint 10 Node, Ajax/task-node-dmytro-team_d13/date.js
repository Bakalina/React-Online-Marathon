const moment = require('moment');

function getCurrentDate () {
    return moment().format('DD.MM.YYYY, HH:mm:ss');
}

console.log(getCurrentDate());

module.exports = getCurrentDate;