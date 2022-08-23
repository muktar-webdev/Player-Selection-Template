// ====AddEventListener With the Player Select Button===//
document.getElementById("btn__player5").addEventListener("click", function () {
  const playerName = getPlayerName("player5");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName,"btn__player5");
});
