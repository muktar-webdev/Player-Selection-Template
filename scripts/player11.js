// ====AddEventListener With the Player Select Button===//
document.getElementById("btn__player11").addEventListener("click", function () {
    const playerName = getPlayerName("player11");
  
    //SET PLAYER LIST ITEM
    setPlayerListItem("selected__five", playerName,"btn__player11");
  });
  