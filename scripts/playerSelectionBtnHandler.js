// ====ADD EVENT LISTENER WITH THE PLAYER SELECT BUTTON===//

//---PLAYER NUMBER: 01---//
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
  setPlayerListItem("selected__five", playerName, "btn__player1");
});

//---PLAYER NUMBER: 02---//
document.getElementById("btn__player2").addEventListener("click", function () {
  const playerName = getPlayerName("player2");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player2");
});

//---PLAYER NUMBER: 03---//
document.getElementById("btn__player3").addEventListener("click", function () {
  const playerName = getPlayerName("player3");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player3");
});

//---PLAYER NUMBER : 04---//
document.getElementById("btn__player4").addEventListener("click", function () {
  const playerName = getPlayerName("player4");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player4");
});

//---PLAYER NUMBER : 05---//
document.getElementById("btn__player5").addEventListener("click", function () {
  const playerName = getPlayerName("player5");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player5");
});

//---PLAYER NUMBER : 06---//
document.getElementById("btn__player6").addEventListener("click", function () {
  const playerName = getPlayerName("player6");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player6");
});

//---PLAYER NUMBER : 07 ---//
document.getElementById("btn__player7").addEventListener("click", function () {
  const playerName = getPlayerName("player7");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player7");
});

//---PLAYER NUMBER : 08---//
document.getElementById("btn__player8").addEventListener("click", function () {
  const playerName = getPlayerName("player8");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player8");
});

//---PLAYER NUMBER : 09---//
document.getElementById("btn__player9").addEventListener("click", function () {
  const playerName = getPlayerName("player9");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player9");
});

//---PLAYER NUMBER : 10---//
document.getElementById("btn__player10").addEventListener("click", function () {
  const playerName = getPlayerName("player10");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player10");
});

//---PLAYER NUMBER : 11---//
document.getElementById("btn__player11").addEventListener("click", function () {
  const playerName = getPlayerName("player11");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player11");
});

//---PLAYER NUMBER : 12---//
document.getElementById("btn__player12").addEventListener("click", function () {
  const playerName = getPlayerName("player12");

  //SET PLAYER LIST ITEM
  setPlayerListItem("selected__five", playerName, "btn__player12");
});
