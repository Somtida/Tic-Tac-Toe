$(document).ready(init);

function init(){
  $('.col').click(clickBox);
  $('.addPlayer').click(player);
  $('.over').hide();

}
var player1="";
var player2="";
function player(){
  $('h1').fadeIn();
  player1 = $('#player1').val();
  player2 = $('#player2').val();
  console.log($('#player1').val());
  console.log($('#player2').val());
  if(player1 !== "" && player2 !== ""){
    $('#playerName').text(player1+'  VS  '+player2);
  }
  $('.area').show();
  $('.name').hide();
}


var count = 0;
var pathWinner = [["1","2","3"],
["4","5","6"],["7","8","9"],["1","4","7"],
["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]];
var path1 = [];
var path2 = [];
function clickBox(){
  ++count;
  // console.log("clicked");
  // console.log("event", event.target);
  
  if(count%2==1){
    //$(event.target).css('background-color', 'red');
    $('.result').text("Continue");
    $(this).append('<img class="chess" src="http://i.imgur.com/c2OngTi.jpg" />');
    //$('.chess').fadeIn();
    //$(this).animate({left});
    $(event.target.id)
    path1.push(event.target.id);
    // console.log("event", event.target.id);
    if(path1.length>=3){
      var arrPath1 = checkPath(path1);
      console.log("arrPath1",arrPath1);
      if(arrPath1){
        // $('.result').text("Player1 Win");
        if(player1!==""){
          $('#playerName').text(player1+' is the Winner!!!');
        }else{
          $('#playerName').text('Player1 is the Winner!!!');
        }
        //$('.over').show().delay(10000).fadeOut();

        $('.over').show().fadeIn();
        //$('.over').animate({left:'250px'});
        $('.over').delay(5000).hide();
        // $('.over').show().delay(15000).fadeOut();
        // $('.over').animate({height: '300px', opacity: '0.4'}, "slow");
        // $('.over').animate({width: '300px', opacity: '0.8'}, "slow");
        // $('.over').animate({height: '100px', opacity: '0.4'}, "slow");
        // $('.over').animate({width: '100px', opacity: '0.8'}, "slow");
        // $('.over').animate({left: '100px'}, "slow");
        // $('.over').animate({fontSize: '3em'}, "slow");
        //$('#playerName').text("Ready => Go");
        $('#playerName').delay(5000).text("");
        $('.col').empty();
        //$('.over').empty();

  
      }else{
        $('.result').text("Continue");
        //$('#playerName').text(player1+'  VS  '+player2);
   
      }
    }
  }else{
    //$(event.target).css('background-color', 'blue');
    $(this).append('<img src="http://i.imgur.com/51J7XWP.jpg" />')
    
    path2.push(event.target.id);
    // console.log("event", event.target.id);
    if(path2.length>=3){
      var arrPath2 = checkPath(path2);
      console.log("arrPath2", arrPath2);
      if(arrPath2){
        $('.result').text("Player2 Win");
        if(player2 !== ""){
          $('#playerName').text(player2+' is the Winner!!!');
        }else{
          $('#playerName').text('Player2 is the Winner!!!');
        }
        // $('.over').show();
        // $('.over').animate({left:'250px'});

        $('.over').show().fadeIn();
        $('.over').delay(5000).hide();
        // $('.over').animate({height: '300px', opacity: '0.4'}, "slow");
        // $('.over').animate({width: '300px', opacity: '0.8'}, "slow");
        // $('.over').animate({height: '100px', opacity: '0.4'}, "slow");
        // $('.over').animate({width: '100px', opacity: '0.8'}, "slow");
        // $('.over').animate({left: '100px'}, "slow");
        // $('.over').animate({fontSize: '3em'}, "slow");
        $('.col').empty();
        //$('#playerName').emthy().delay(5000);
        //$('#playerName').text('Ready => Go');
        $('#playerName').delay(5000).text("");
        //$('.over').empty();
  


      }else{
        $('.result').text("Continue");
      }
    }

  }

  if(count==9){
    $('#playerName').text('Game Over!!!');
    //$('.over').show().delay(5000).hide();
    alert('Game Over!! Please Click to Restart');
    $('.col').empty();
    $('#playerName').empty();
    count==0;
  }
  

}

function equal(array1, array2){
  var isSame = (array1.length == array2.length) && array1.every(function(element, index) {
      return element === array2[index]; 
  });

  return isSame;
}



function checkPath(arr){
  console.log("Checking");
  console.log("arr: ", arr);
  var allPath = [];
  
  for(var i=0;i<arr.length-2;i+=1){
    
    for(var j=i+1;j<arr.length-1;j++){
    
      for(var k=j+1;k<arr.length;k++){
        var set = []
        set.push(arr[i]);
        set.push(arr[j]);
        set.push(arr[k]);
        //console.log(set);
        allPath.push(set.sort());
      }
    }
  }

  //return allPath;
  // console.log("allPath: ",allPath);

  for(var i=0 ; i< allPath.length; i++){
    for(var j=0; j<pathWinner.length;j++){
      var isEqual = equal(allPath[i],pathWinner[j]);
        //console.log("allPath[i]", allPath[i]);
        //console.log("pathWinner[j]",pathWinner[j]);
        if(isEqual){
          console.log("Win");
          return true;
          
        }
    }
  }
  console.log("please continue");
  return false;





}