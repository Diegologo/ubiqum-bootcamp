//Declare variables
let membersArr =[];
let filteredMembersArr = [];
let democratsArr = [];
let republicansArr = [];
let independentsArr = [];
let bottomTenLoyals = [];
let topTenLoyals = [];
let democratLoyalty = 0;
let republicanLoyalty = 0;
let independentLoyalty = 0;
const spinner = document.getElementById("spinner");


// fetch
function fetchFun(){
  spinner.removeAttribute('hidden');
  fetch('https://api.propublica.org/congress/v1/113/house/members.json',{
  headers:{
    'X-API-Key':'zVc5hB9SJPb7D3LskxNmV0TEicAghQQ4KOETtdFB'
    }
  })
  .then((response)=>{
    console.log("fetch OK", response);
    return response.json();
  }).then(json =>{
    membersArr = json.results[0].members;
    calculateFirstTable();
    sortMembersByLoyalty();
    buildTableBottomLoyal();
    buildTableTopLoyal();
    spinner.setAttribute('hidden', '');
  }).catch((error)=>{
    console.log("fetch ERROR", error);
  })
}
fetchFun()



//Iterate the array and get data for the number of party members and loyalty to the party
function calculateFirstTable(){
  filteredMembersArr = membersArr.filter(membersArr => membersArr.total_votes !== 0 && membersArr.missed_votes !==0);
  
  for (i=0; i<filteredMembersArr.length; i++){
      if (filteredMembersArr[i].party === "D"){
          democratsArr.push(filteredMembersArr[i]);
          democratLoyalty += filteredMembersArr[i].votes_with_party_pct;
      }else if (filteredMembersArr[i].party === "R"){
          republicansArr.push(filteredMembersArr[i]);
          republicanLoyalty += filteredMembersArr[i].votes_with_party_pct;
  
      }else if (filteredMembersArr[i].party === "ID"){
          independentsArr.push(filteredMembersArr[i]);
          independentLoyalty += filteredMembersArr[i].votes_with_party_pct;
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
  independentLoyalty === independentLoyalty ? document.getElementById("independentLoyalty").textContent = independentLoyalty.toFixed(2) : document.getElementById("independentLoyalty").textContent = 0;
}


//sort members by their loyalty
function sortMembersByLoyalty(){
  bottomTenLoyals = [...filteredMembersArr];
  topTenLoyals = [...filteredMembersArr];
  
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
}


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
        document.getElementById("houseBottomLoyal").append(row);
    }
};

//build table of vote more with party
function buildTableTopLoyal(){
    for (let i = 0; i < topTenLoyals.length; i++){
        let row = document.createElement("tr");
        let cell = document.createElement("td");

        cell.textContent = topTenLoyals[i].first_name + " " + (topTenLoyals[i].middle_name || "") + " " + topTenLoyals[i].last_name;
        row.insertCell().append(cell);
        row.insertCell().innerHTML = Math.round(topTenLoyals[i].total_votes/100*topTenLoyals[i].votes_with_party_pct);
        row.insertCell().innerHTML = topTenLoyals[i].votes_with_party_pct;
        document.getElementById("houseTopLoyal").append(row);
    }
};