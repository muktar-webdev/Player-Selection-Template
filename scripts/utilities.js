// ========Player Select Function or GET the innerText of the Player Name=====//
function getPlayerName(playerId) {
  const playerNameElement = document.getElementById(playerId);
  const playerName = playerNameElement.innerText;
  return playerName;
}

// ========Set playerItem and Control PlayerSelect limitation===//
function setPlayerListItem(olderList, playerName, selectedBtn) {
  //OrderList
  const ol = document.getElementById(olderList);
  //ListItem
  const li = document.createElement("li");
  li.setAttribute("class", "player__item");
  li.textContent = playerName;
  //Conditionally Adding Players
  const selectedPlayerElement = document.querySelectorAll(".player__item");
  if (selectedPlayerElement.length >= 5) {
    window.alert("You cann't add more then 5 player.");
    return;
  } else {
    // ADD A CHILDNODE(LI) IN OL
    ol.appendChild(li);
    //DISABLED BTN AFTER SELECT
    const btn = document.getElementById(selectedBtn);
    btn.disabled = true;
    btn.style.background = "#A2A9AF";
    btn.style.color = "#FFFFFF";
    btn.innerText = "SELECTED";
  }
}
