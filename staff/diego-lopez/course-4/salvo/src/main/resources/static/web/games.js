fetch("/api/games")
.then(function (response) {
    return response.json();
  })
  .then(function (games) {
var gameList = document.getElementById("games");

for (var game in games){
var listItem = document.createElement("li");
listItem.innerText=games[game].creationDate;

gameList.append(listItem);
}
  })