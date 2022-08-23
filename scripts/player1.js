// ====AddEventListener With the Player Select Button===//
document.getElementById("btn__player1").addEventListener("click", function () {
  const playerName = getPlayerName("player1");
  //DISABLED BTN AFTER SELECT

  //   //OrderList
  //   const ol = document.getElementById("selected__five");
  //   //ListItem
  //   const li = document.createElement("li");
  //   li.setAttribute("class", "player__item");
  //   li.textContent = playerName;
  //   //Conditionally Adding Players
  //   const selectedPlayerElement = document.querySelectorAll(".player__item");
  //   if (selectedPlayerElement.length >= 5) {
  //     window.alert("You cann't add more then 5 player.");
  //     return;
  //   } else {
  //     ol.appendChild(li);
  //   }
  setPlayerListItem("selected__five", playerName,"btn__player1");
});
