// ====AddEventListener With the Player Select Button===//
document.getElementById("btn__player2").addEventListener("click", function () {
  const playerName = getPlayerName("player2");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName,"btn__player2");
});
