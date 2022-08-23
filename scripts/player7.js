// ====AddEventListener With the Player Select Button===//
document.getElementById("btn__player7").addEventListener("click", function () {
    const playerName = getPlayerName("player7");
  
    //SET PLAYER LIST ITEM
    setPlayerListItem("selected__five", playerName,"btn__player7");
  });
  