// ====AddEventListener With the Player Select Button===//
document.getElementById("btn__player10").addEventListener("click", function () {
    const playerName = getPlayerName("player10");
  
    //SET PLAYER LIST ITEM
    setPlayerListItem("selected__five", playerName,"btn__player10");
  });
  