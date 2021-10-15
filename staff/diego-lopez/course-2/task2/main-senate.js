import * as data from "./pro-congress-113-senate";




let membersLength = data.results[0].members.length;
let membersArr = data.results[0].members;
let table = document.getElementById("senate-data");
let selectedPartyMembers = [];





//build table header
let tr = document.createElement('tr');
let thead = document.createElement('thead');
  
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
let th4 = document.createElement('th');
let th5 = document.createElement('th');
  
let head1 = document.createTextNode("Senator");
let head2 = document.createTextNode("Party");
let head3 = document.createTextNode("State");
let head4 = document.createTextNode("Seniority");
let head5 = document.createTextNode("% votes with party");
  
thead.appendChild(tr);
table.appendChild(thead);
  
th1.appendChild(head1);
th2.appendChild(head2);
th3.appendChild(head3);
th4.appendChild(head4);
th5.appendChild(head5);
  
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
tr.appendChild(th5);
  

//build table body
let tbody = document.createElement('tbody');
function buildTableBody(membersArr){
  
  for (let i = 0; i < membersArr.length; i++){
  
    let tr = document.createElement('tr');
      
  
  
    let link = document.createElement('a');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
      
    link.setAttribute('href', membersArr[i].url);
  
    let text1 = document.createTextNode(membersArr[i].last_name + " " + membersArr[i].first_name + " " + (membersArr[i].middle_name || ""));
    let text2 = document.createTextNode(membersArr[i].party);
    let text3 = document.createTextNode(membersArr[i].state);
    let text4 = document.createTextNode(membersArr[i].seniority);
    let text5 = document.createTextNode(membersArr[i].votes_with_party_pct + "%");
      
    td1.appendChild(link);
    link.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
      
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
  
    tbody.appendChild(tr);
    table.appendChild(tbody);
  }
};

buildTableBody(membersArr);



//filters
document.getElementById("republican").addEventListener("click", function () {
  if (document.getElementById("republican").checked === true){
    filter_party(membersArr);
    console.log("r")
  }
});

document.getElementById("democrat").addEventListener("click", function () {
  if (document.getElementById("democrat").checked === true){
    filter_party(membersArr);
    console.log("d")
  }
});

document.getElementById("independent").addEventListener("click", function () {
  if (document.getElementById("independent").checked === true){
    filter_party(membersArr);
    console.log("i")
  }
});

function filter_party(){

  for (i = 0; i < membersArr.length; i++){
    if ((document.getElementById("democrat").checked && membersArr[i].party == "D")){
      selectedPartyMembers.push(membersArr[i]);
    }
  }
  console.log(selectedPartyMembers);
  buildTableBody(selectedPartyMembers);
  
};