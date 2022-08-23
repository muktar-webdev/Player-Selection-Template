// ====AddEventListener With the Player Select Button===//
document.getElementById("btn__player12").addEventListener("click", function () {
  const playerName = getPlayerName("player12");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player12");
});
