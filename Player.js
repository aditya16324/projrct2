class Player{
    
  updatePlayerCount(bowl1){
    database.ref('/').update({
   playerCount: bowl1
    });
    
  }





  getPlayerCount(){
    var goDataBase  = database.ref("playerCount");
    goDataBase.on("value",function(data){
      playercountfreezer= data.val();
    })
   
  } 
  

}