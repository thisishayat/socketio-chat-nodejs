/**
 * Created by HAYAT on 10-Sep-16.
 */
var eventEmiter = require('events').EventEmitter;
var logger = new eventEmiter();

logger.on('error',function (message) {
    console.log('ERR: '+message);
});

logger.emit('error','Spilled Milk'); 