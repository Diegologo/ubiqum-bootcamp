//Declare variables
let membersArr = [];
let filteredMembersArr = [];
let democratsArr = [];
let republicansArr = [];
let independentsArr = [];
let bottomTenAttendancy = [];
let topTenAttendancy = [];
let democratLoyalty = 0;
let republicanLoyalty = 0;
let independentLoyalty = 0;


// fetch
function fetchFun(){
  fetch('https://api.propublica.org/congress/v1/113/house/members.json',{
  headers:{
    'X-API-Key':'zVc5hB9SJPb7D3LskxNmV0TEicAghQQ4KOETtdFB'
    }
  })
  .then((response)=>{
    console.log("API feedback OK", response);
    return response.json();
  }).then(json =>{
    membersArr = json.results[0].members;
    calculateFirstTable();
    sortMembersByAttendance();
    buildTableBottomAttendancy()
    buildTableTopAttendancy();
  }).catch((error)=>{
    console.log("NO API feedback", error);
  })
}
fetchFun()


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


//sort members by their attendance
function sortMembersByAttendance(){
  bottomTenAttendancy = [...filteredMembersArr];
  topTenAttendancy = [...filteredMembersArr];
  
  function compareAttendancy (a, b) {
  if (a.missed_votes_pct < b.missed_votes_pct){
      return -1;
    }
    if (a.missed_votes_pct > b.missed_votes_pct){
      return 1;
    }
    return 0;
  };
  //low attendancy
  bottomTenAttendancy.sort(compareAttendancy);
  bottomTenAttendancy = bottomTenAttendancy.slice(95,105).reverse();
  //high attendancy
  topTenAttendancy.sort(compareAttendancy);
  topTenAttendancy = topTenAttendancy.slice(0,10);
}


//build tables
//build table of low attendancy
function buildTableBottomAttendancy(){
  for (let i = 0; i < bottomTenAttendancy.length; i++){
      let row = document.createElement("tr");
      let cell = document.createElement("td");

      cell.textContent = bottomTenAttendancy[i].first_name + " " + (bottomTenAttendancy[i].middle_name || "") + " " + bottomTenAttendancy[i].last_name;
      row.insertCell().append(cell);
      row.insertCell().innerHTML = bottomTenAttendancy[i].missed_votes;
      row.insertCell().innerHTML = bottomTenAttendancy[i].missed_votes_pct;
      document.getElementById("houseBottomAttendance").append(row);
  }
};

//build table of high attendancy
function buildTableTopAttendancy(){
  for (let i = 0; i < topTenAttendancy.length; i++){
      let row = document.createElement("tr");
      let cell = document.createElement("td");

      cell.textContent = topTenAttendancy[i].first_name + " " + (topTenAttendancy[i].middle_name || "") + " " + topTenAttendancy[i].last_name;
      row.insertCell().append(cell);
      row.insertCell().innerHTML = topTenAttendancy[i].missed_votes;
      row.insertCell().innerHTML = (topTenAttendancy[i].missed_votes_pct);
      document.getElementById("houseTopAttendance").append(row);
  }
};