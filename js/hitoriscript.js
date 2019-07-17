
//Rules button
$("#rulesbutton" ).mouseover(function() {
    $("#rules").show()
    $("#rulesbutton").hide()
});
$("#rules" ).mouseout(function() {
    $("#rules").hide()
    $("#rulesbutton").show()
 });


//interactivity with the boxes of the board
$("td").click(function(){
    if( $(this).css("background-color") == "rgb(255, 0, 0)" ) {
        $(this).css("background-color", "whitesmoke");
    }
   else{
    $(this).css("background-color", "red");
   }
});

//init first tab
tablenb=1;

//Newgame Button
$("#newgame").click(function(){
    timerstop = false;
    var timervar;
    $("#timer").css('color', '#00008b');
    clearInterval(timervar);
    document.getElementById("timer").innerHTML = String("Time : 0:00");
    time = 0;
    minute = 0;
    var timervar;
    

    $("td").css("background-color", "whitesmoke");//pour reinitialisé les cases
    if (tablenb==1){
        $("#table2").css("display","initial");
        $("#table1").css("display","none");
        tablenb=2;
    }
    else if (tablenb==2){
        $("#table3").css("display","initial");
        $("#table2").css("display","none");
        tablenb=3;
    }
    else{
        
        $("#table1").css("display","initial");
        $("#table3").css("display","none");
        tablenb=1;
    }

    });

//ResetButton
$("#reset").click(function(){

$("td").css("background-color", "whitesmoke");


});


//checkButton
$("#check").click(function(){
  if(tablenb==1){
    if( $(".badchoice1").css("background-color") == "rgb(255, 0, 0)"  ){
        document.getElementById("warningtext").innerHTML = String("FALSE +15sec");
        $("#warningtext").css('color', 'red');
        clearInterval(timervar);
        time += 15;
        var timervar;
        $("#warningtext").fadeIn(1000);
        $("#warningtext").fadeOut(5000);

        }
    else if ( $(".goodchoice1").css("background-color") == "rgb(255, 0, 0)" ) {
        document.getElementById("warningtext").innerHTML = String("You Won GG");
        $("#warningtext").css('color', 'green');
        $("#timer").css('color', 'yellow');
        $("#warningtext").fadeIn(1000);
        $("#warningtext").fadeOut(5000);
        timerstop=true;
        //freeze timer
        
        }
        else{
            document.getElementById("warningtext").innerHTML = String("FALSE +15sec");
            $("#warningtext").css('color', 'red');
            clearInterval(timervar);
            time += 15;
            var timervar;
            $("#warningtext").fadeIn(1000);
            $("#warningtext").fadeOut(5000);
        }
    }

    if(tablenb==2){
        if( $(".badchoice2").css("background-color") == "rgb(255, 0, 0)"  ){
            document.getElementById("warningtext").innerHTML = String("FALSE +15sec");
            $("#warningtext").css('color', 'red');
            clearInterval(timervar);
            time += 15;
            var timervar;
            $("#warningtext").fadeIn(1000);
        $("#warningtext").fadeOut(5000);
            }
        else if ( $(".goodchoice2").css("background-color") == "rgb(255, 0, 0)" ) {
            document.getElementById("warningtext").innerHTML = String("You Won GG");
            $("#warningtext").css('color', 'green');
            clearInterval(timervar);
            $("#timer").css('color', 'yellow');
            $("#warningtext").fadeIn(1000);
            $("#warningtext").fadeOut(5000);
            timerstop=true;
            }
            else{
                document.getElementById("warningtext").innerHTML = String("FALSE +15sec");
                $("#warningtext").css('color', 'red');
                clearInterval(timervar);
                time += 15;
                var timervar;
                $("#warningtext").fadeIn(1000);
                $("#warningtext").fadeOut(5000);
            }
        }
        if(tablenb==3){
            if( $(".badchoice3").css("background-color") == "rgb(255, 0, 0)"  ){
                document.getElementById("warningtext").innerHTML = String("FALSE +15sec");
                $("#warningtext").css('color', 'red');
                clearInterval(timervar);
                time += 15;
                var timervar;
                $("#warningtext").fadeIn(1000);
                $("#warningtext").fadeOut(5000);
                }
            else if ( $(".goodchoice3").css("background-color") == "rgb(255, 0, 0)" ) {
                document.getElementById("warningtext").innerHTML = String("You Won GG");
                $("#warningtext").css('color', 'green');
                clearInterval(timervar);
                $("#timer").css('color', 'yellow');
                $("#warningtext").fadeIn(1000);
                $("#warningtext").fadeOut(5000);
                timerstop=true;
                }
                else{
                    document.getElementById("warningtext").innerHTML = String("FALSE +15sec");
                    $("#warningtext").css('color', 'red');
                    clearInterval(timervar);
                    time += 15;
                    var timervar;
                    $("#warningtext").fadeIn(1000);
                    $("#warningtext").fadeOut(5000);
                }
            }
    });


//Timer
var timerstop = false;
var time = 0;
var minute=0;
var timervar = window.setInterval(function() {
    
    if (timerstop){
        time-=1;
      }
    time += 1;
    

    if (time>60){

        time -= 60;
        minute += 1;
    }
    var timeStr = String(time);
    if (timeStr.length == 1){
        timeStr="0"+ String(time);
    } 
    document.getElementById("timer").innerHTML = String("Time : "+minute + ":" + timeStr);

    
}, 1000);