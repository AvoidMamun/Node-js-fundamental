const EventEmitter = require('events'); //EventEmitter is a class so starts with caps..

const event = new EventEmitter(); //instance of EventEmitter..
//registering a listener for game event..
event.on('games',(function(){
    console.log(`The game will be started.......`);
    console.log(22+22);
}));
//game event is created..
event.emit('games');

//same thing with parameter and setTimeout,,
event.on('games',function(football){
    console.log(`The game will be started ${football}..`);
});


setTimeout(function(){
    event.emit('games',' and It is a football match');
},2000);

//same thing with multiple parameters and setTimeout,,
event.on('games',function({football,cricket,num}){
    console.log(`The game will be started ${football}.. and after that ${cricket}..${num} % alright..`);
});

setTimeout(function(){
    event.emit('games',{
       football: ' and It is a football match',
       cricket:  'Cricket will be played',
       num:100
    });
},2000);

//Exporting emit from eventExport module..
const emitExprt = require('./eventExport');

const plays = new emitExprt();

plays.on('game',({football,cricket})=>{
    console.log(`The introduction of the games: ${football} and ${cricket}`);
});

plays.startPlay();






