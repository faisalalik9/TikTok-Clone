const vid = $('.reel-video');

var i =0;
$('.reel-div').on("click", function(){

  if(i%2 == 0){
    vid.trigger('play');
 
    i++;
  }else{
    vid.trigger('pause');
    i++;
  }
});
