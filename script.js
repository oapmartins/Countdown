import Countdown from '/countdown.js';

const tempoParaNatal = new Countdown('23 December 2021 23:59:59 GMT-0300');

setInterval(()=>{
    console.log(tempoParaNatal.total);
},1000);