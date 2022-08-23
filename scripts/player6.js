// ====AddEventListener With the Player Select Button===//
document.getElementById("btn__player6").addEventListener("click", function () {
  const playerName = getPlayerName("player6");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player6");
});
