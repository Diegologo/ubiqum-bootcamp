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
    var d1 = new Date(games[0].creationDate);
    console.log(d1,'d1')
  
    for (var game in games){
        var listItem = document.createElement("li");
        listItem.innerText=games[game].creationDate;
        console.log(games[game].creationDate)
        gameList.append(listItem)
    }
}