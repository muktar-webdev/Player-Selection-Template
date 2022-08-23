// ====AddEventListener With the Player Select Button===//
document.getElementById("btn__player9").addEventListener("click", function () {
    const playerName = getPlayerName("player9");
  
    //SET PLAYER LIST ITEM
    setPlayerListItem("selected__five", playerName,"btn__player9");
  });
  