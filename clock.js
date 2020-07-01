function showTime() { 

    var todaysDate = new Date();

    var today = todaysDate.getDate();
     var month = todaysDate.getMonth()+1;
     var year = todaysDate.getFullYear();

     var tt = (today<10)? '0'+today : today;
     var mm = (month<10)?'0'+month:month;

     var currentDay = tt + ':'+mm+':'+year

     document.getElementById('days').innerHTML = currentDay
    
    var hour = todaysDate.getHours();      // 0-23
    var min = todaysDate.getMinutes();      //0-59
    var sec = todaysDate.getSeconds();      //0-59
    var session = 'AM'

    if(hour==0){
        hour = 12  
    }

    if(hour>12){
        hour = hour-12;
        session = 'PM'
    }

    var h = (hour<10)? '0'+hour :hour;
    var m = (min<10)? '0'+min : min;
    var s = (sec<10)? '0'+sec : sec;

    var time = h + ' : '+m + ' : '+s+'  '+session

    document.getElementById('datesId').innerHTML = time;

    setTimeout(showTime,1000)
 }
 showTime();



 function change(){

    color = ['red','blue','yellow','black','grey','gold','violet','brown','green','orange','pink']

    random = Math.floor(Math.random()*color.length)

    document.getElementById('back').style.backgroundColor = color[random];

}

function colorChange() { 

    color = ['red','blue','yellow','black','grey','gold','violet','brown','green','orange','pink']

    random = Math.floor(Math.random()*color.length)

    document.getElementById('days').style.color = color[random];
    
    document.getElementById('datesId').style.color = color[random];

 }


