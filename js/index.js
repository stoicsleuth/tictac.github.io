$(document).ready(function() {
  //Player turn defaults to X
  var turn = "X";
  var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
  var compuTurn = "0";
  //Whoseturnsit
  var gameTurn = false;
  //change Computer's Turn to X and PLayer's turn to 0
  var count=0//track of total no of turns
  $('#turnX').click(function() {
    turn = "0";
    compuTurn = "X";
    $('#turnX').removeClass("choice");
    $('#turn0').addClass("choice");
    reset();
    
  });
  //change Computer's Turn to 0 and PLayer's turn to X
  $('#turn0').click(function() {
    turn = "X";
    compuTurn = "0";
    $('#turn0').removeClass("choice");
    $('#turnX').addClass("choice");
    reset();
  });
    
    $('.tur').click(function() {
    
    $('.tic').removeClass("choice");
        $('.tic').removeClass("red");
        $('.tic').removeClass("ame");
    $('.tic').addClass("tictic");
      $('.tic').addClass("white");  
    
  });
    $('.cherry').click(function() {
    
    $('.tic').removeClass("choice");
        $('.tic').removeClass("ame");
        $('.tic').removeClass("tictic");
    $('.tic').addClass("red");
    
  });
    
  $('.am').click(function() {
    
    $('.tic').removeClass("choice");
      $('.tic').removeClass("red");
      $('.tic').removeClass("tictic");
    $('.tic').addClass("ame");
    
  });

  function compTurn(){
    var taken=false;
    while(taken==false && count !==5){
      var move1=(Math.random()*10).toFixed();
      var move= $("#"+move1).text();
      $("#"+move1).addClass("lala");
      $("#"+move1).removeClass("tic1");
      if(move=="#"){
        $("#"+move1).text(compuTurn);
        taken=true;
        turns[move1]=compuTurn;
      }
      
    }
  }
  
  
  function playerTurn(turn, slot) {
    var spotTaken = $("#"+slot).text();
    if (spotTaken==="#"){
      count++;
      turns[slot] = turn;
      $("#"+slot).text(turn);
      $("#"+slot).addClass("lala");
      $("#"+slot).removeClass("tic1");
      winCondition(turns, turn);
      if(gameTurn==false){
         //alert("fo");
         compTurn();
         winCondition(turns,compuTurn);
         }
        if(count>4 && gameTurn==false){
            alert("It's a tie, baby!")
            reset();
        }
    }
  }
  
  function winCondition (turns, turn){
    if(turns[0]==turn && turns[1]==turn && turns[2]==turn){
      gameTurn=true;
      
      setTimeout(function(){ alert("You sick bastard, you win.");reset(); }, 500);
    }
    else if(turns[3]==turn && turns[4]==turn && turns[5]==turn){
      gameTurn=true;
      rsetTimeout(function(){ alert("You sick bastard, you win.");reset(); }, 500);
    }
    else if(turns[6]==turn && turns[7]==turn && turns[8]==turn){
      gameTurn=true;
      setTimeout(function(){ alert("You sick bastard, you win.");reset(); }, 500);
    }
    else if(turns[0]==turn && turns[3]==turn && turns[6]==turn){
      gameTurn=true;
      setTimeout(function(){ alert("You sick bastard, you win.");reset(); }, 500);
    }
    else if(turns[1]==turn && turns[4]==turn && turns[7]==turn){
      gameTurn=true;
      setTimeout(function(){ alert("You sick bastard, you win.");reset(); }, 500);
    }
    else if(turns[2]==turn && turns[5]==turn && turns[8]==turn){
      gameTurn=true;
      setTimeout(function(){ alert("You sick bastard, you win.");reset(); }, 500);
    }
    else
      gameTurn=false;
      
    
    
  }
  
  $('.tic').click(function() {
    var slot = $(this).attr('id');
    playerTurn(turn, slot);
  });
  function reset(){
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count=0;
    $(".tic").text("#");
    gameTurn=true;
    $('.tic').removeClass("lala");
    $('.tic').addClass("tic1");
    
  }
  
});