var canvas= new fabric.Canvas("canvas")
var blockwidth=30
var blockheight=30
var playerx=180
var playery=180
var player=""
function playerupdate(){
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png",function(IMG){
      player=IMG;
      player.scaleToWidth(100);
      player.scaleToHeight(100);
      player.set({
          top:playery,left:playerx
      });
      canvas.add(player)
    })
}
function blockupdate(Images){
    fabric.Image.fromURL(Images,function(IMG){
      blocks=IMG;
      blocks.scaleToWidth(blockwidth);
      blocks.scaleToHeight(blockheights);
      blocks.set({
          top:playery,left:playerx
      });
      canvas.add(player)
    })
}