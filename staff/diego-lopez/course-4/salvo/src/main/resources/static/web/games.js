let gamesJson;

fetch("http://localhost:8080/api/games")
.then(function (response) {
    return response.json();
    })
    .then(json => {
        console.log(json);
        gamesJson = json;
        //mapData(gamesJson)
        buildTable(json)
    })
    .catch((error)=>{
        console.log("fetch ERROR", error);
});

// trying to use map, but would require a nested map because of the arrays inside the objects inside the json. For loop seems 
// function mapData(mappedData){
//     return mappedData
//         .map(mapping => ({
//             creationDate :typeof mapping.creationDate,
//             gameId : mapping.gameId,
//         }))
// }

function buildTable (games) {
    var gameList = document.getElementById("games");
    var emails = document.getElementById("emailList")
    var emailArr = []
  
    for (let game in gamesJson){
        var listItem = document.createElement("li");
        listItem.innerText=new Date(games[game].creationDate);
        console.log(games[game].creationDate)
        var subList = document.createElement("ol")
        // emailArr.push(games[game].gameplayers[0].email); <<this can do the same as the .push in the nested for

        for(var player in games[game].gameplayers){
            var subListItem =document.createElement("li");
            subListItem.innerText=games[game].gameplayers[player].userName;
            emailArr.push(games[game].gameplayers[player].email);
            listItem.append(subList);
            subList.append(subListItem);
            }

        gameList.append(listItem)
    }
    emailArr = emailArr.join(', ');
    emails.append(emailArr);
}