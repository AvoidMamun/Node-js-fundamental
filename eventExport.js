//From this module we will export to event module..
const EventEmitter = require('events');

class play extends EventEmitter{
startPlay(){
 console.log('Starting play..');
 
setTimeout(()=>{
    this.emit('game',{
        football:'it is a football match',
        cricket: 'it is a cricket match',
    });
},1000);


}
}
module.exports=play;