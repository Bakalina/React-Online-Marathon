const http = require('http');
require('dotenv').config();
const getCurrentDate = require('./date');



http
    .createServer(function (res, req) {
        if (res.url !== '/') {
            return false;
        }

        const clrId = setInterval(() => {
            console.log(getCurrentDate());
        }, process.env.INTERVAL_TIME);

        setTimeout(() => {
            clearInterval(clrId);
            req.end(getCurrentDate());
        }, process.env.STOP_TIMER_TIME);
    })
    .listen(process.env.SERVER_PORT);

console.log(`HTTP server running on port ${process.env.SERVER_PORT}`);