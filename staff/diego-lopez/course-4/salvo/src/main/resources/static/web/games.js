fetch("http://localhost:8080/api/games")
.then(function (response) {
    return response.json();
    })
    .then(json => {
        console.log(json);
        buildTable(json);
    })
    .catch((error)=>{
        console.log("fetch ERROR", error);
});

function buildTable (games) {
    var gameList = document.getElementById("games");
  
    for (var game in games){
        var listItem = document.createElement("li");
        listItem.innerText=new Date(games[game].creationDate);
        console.log(games[game].creationDate)
        gameList.append(listItem)
    }
}