// ====AddEventListener With the Player Select Button===//
document.getElementById("btn__player8").addEventListener("click", function () {
    const playerName = getPlayerName("player8");
  
    //SET PLAYER LIST ITEM
    setPlayerListItem("selected__five", playerName,"btn__player8");
  });
  