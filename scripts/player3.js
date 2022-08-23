// ====AddEventListener With the Player Select Button===//
document.getElementById("btn__player3").addEventListener("click", function () {
  const playerName = getPlayerName("player3");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName,"btn__player3");
});
