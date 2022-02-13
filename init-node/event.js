const emitEvent =  require('events')
const event = new emitEvent();

event.on('checkPage',(code=100,msg='hi')=>{
    console.log(`this code is ${code} and message is ${msg}`)
});
event.emit('checkPage',200,'ok');
event.emit('checkPage',200,'ok');
event.emit('checkPage');