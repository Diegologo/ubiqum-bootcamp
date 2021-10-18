
let membersArr = []

async function fetchJson(){
  const response = await fetch('https://api.propublica.org/congress/v1/113/senate/members.json',{
    headers: {'X-API-Key':'zVc5hB9SJPb7D3LskxNmV0TEicAghQQ4KOETtdFB'}
  })
  response.ok;
  response.status;
  let membersArr = await response.json();
  return membersArr = await membersArr.results[0].members;
}
fetchJson().then(membersArr => {
  membersArr;
  console.log(membersArr)
})
console.log(membersArr)



//Declare variables
let democratsArr = [];
let republicansArr = [];
let independentsArr = [];
let democratLoyalty = 0;
let republicanLoyalty = 0;
let independentLoyalty = 0;

//Iterate the array and get data for the number of party members and loyalty to the party
for (i=0; i<membersArr.length; i++){
    if (membersArr[i].party === "D"){
        democratsArr.push(membersArr[i]);
        democratLoyalty += membersArr[i].votes_with_party_pct;
    }else if (membersArr[i].party === "R"){
        republicansArr.push(membersArr[i]);
        republicanLoyalty += membersArr[i].votes_with_party_pct;

    }else if (membersArr[i].party === "ID"){
        independentsArr.push(membersArr[i]);
        independentLoyalty += membersArr[i].votes_with_party_pct;
    }
};

//calculate number of party members
document.getElementById("numberDemocrats").textContent = democratsArr.length;
document.getElementById("numberRepublicans").textContent = republicansArr.length;
document.getElementById("numberIndependents").textContent = independentsArr.length;


//calculate the loyalty to party
democratLoyalty = democratLoyalty/democratsArr.length;
republicanLoyalty = republicanLoyalty/republicansArr.length;
independentLoyalty = independentLoyalty/independentsArr.length;

document.getElementById("democratLoyalty").textContent = democratLoyalty.toFixed(2);
document.getElementById("republicanLoyalty").textContent = republicanLoyalty.toFixed(2);
document.getElementById("independentLoyalty").textContent = independentLoyalty.toFixed(2);


//sort members by their loyalty
let bottomTenLoyals = membersArr;
let topTenLoyals = membersArr;

function compareLoyalty (a, b) {
  if (a.votes_with_party_pct < b.votes_with_party_pct){
    return -1;
  }
  if (a.votes_with_party_pct > b.votes_with_party_pct){
    return 1;
  }
  return 0;
};

//vote less with party
bottomTenLoyals.sort(compareLoyalty);
bottomTenLoyals = bottomTenLoyals.slice(0,10);
//vote more with party
topTenLoyals.sort(compareLoyalty);
topTenLoyals = topTenLoyals.slice(95,105).reverse();


//build tables
//build table of vote less with party
function buildTableBottomLoyal(){
    for (let i = 0; i < bottomTenLoyals.length; i++){
        let row = document.createElement("tr");
        let cell = document.createElement("td");

        cell.textContent = bottomTenLoyals[i].first_name + " " + (bottomTenLoyals[i].middle_name || "") + " " + bottomTenLoyals[i].last_name;
        row.insertCell().append(cell);
        row.insertCell().innerHTML = Math.round(bottomTenLoyals[i].total_votes/100*bottomTenLoyals[i].votes_with_party_pct);
        row.insertCell().innerHTML = bottomTenLoyals[i].votes_with_party_pct;
        document.getElementById("senateBottomLoyal").append(row);
    }
};
buildTableBottomLoyal(bottomTenLoyals);

//build table of vote more with party
function buildTableTopLoyal(){
    for (let i = 0; i < topTenLoyals.length; i++){
        let row = document.createElement("tr");
        let cell = document.createElement("td");

        cell.textContent = topTenLoyals[i].first_name + " " + (topTenLoyals[i].middle_name || "") + " " + topTenLoyals[i].last_name;
        row.insertCell().append(cell);
        row.insertCell().innerHTML = Math.round(topTenLoyals[i].total_votes/100*topTenLoyals[i].votes_with_party_pct);
        row.insertCell().innerHTML = topTenLoyals[i].votes_with_party_pct;
        document.getElementById("senateTopLoyal").append(row);
    }
};
buildTableTopLoyal(topTenLoyals);