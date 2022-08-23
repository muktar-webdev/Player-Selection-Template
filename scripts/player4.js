// ====AddEventListener With the Player Select Button===//
document.getElementById("btn__player4").addEventListener("click", function () {
  const playerName = getPlayerName("player4");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName,"btn__player4");
});
