

var app = new Vue(
  {  
  el: '#app',  
  data: {    
    membersArr: [],
  },

//fetch
  methods :{
    plus: function fetchData(){
    fetch('https://api.propublica.org/congress/v1/113/senate/members.json',{
    headers:{
      'X-API-Key':'zVc5hB9SJPb7D3LskxNmV0TEicAghQQ4KOETtdFB'
    }
  })
  .then((response)=>{
    console.log("funciona", response);
    return response.json();
  }).then(json =>{
    console.log(json);
    app.membersArr = json.results[0].members;
    console.log(app.membersArr,'ciao')
    return app.membersArr
  }).catch((error)=>{
    console.log("no funciona", error);
  })
  }
  },
}
);
app.plus()



/*
//build table

function buildTableWhole(membersArr){

  let table = document.getElementById("senate-data");
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  
  document.getElementById("senate-data").innerHTML = "";


  //build table header

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

  th1.appendChild(head1);
  th2.appendChild(head2);
  th3.appendChild(head3);
  th4.appendChild(head4);
  th5.appendChild(head5);

  thead.appendChild(th1);
  thead.appendChild(th2);
  thead.appendChild(th3);
  thead.appendChild(th4);
  thead.appendChild(th5);


//build table body

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
    table.appendChild(thead);
    table.appendChild(tbody);
  }
};
buildTableWhole(membersArr)

*/


//listeners
document.getElementById("democrat").addEventListener("click", function () {
  return (document.getElementById("democrat").checked === true ? filter_party(membersArr) : filter_party(membersArr));
});

document.getElementById("republican").addEventListener("click", function () {
  return (document.getElementById("republican").checked === true ? filter_party(membersArr) : filter_party(membersArr));
});

document.getElementById("independent").addEventListener("click", function () {
  return (document.getElementById("independent").checked === true ? filter_party(membersArr) : filter_party(membersArr));
});


let states = "ALL"
document.getElementById("stateDropDown").addEventListener("change", function () {
  states = document.getElementById("stateDropDown").value;
  filter_party(membersArr);
});

//filter function
function filter_party(){
  document.getElementById("senate-data").innerHTML = "";
  let selectedPartyMembers = [];
  for (i = 0; i < membersArr.length; i++){
    if ((document.getElementById("democrat").checked && membersArr[i].party === "D") && (states === membersArr[i].state || states === "ALL")) {
      selectedPartyMembers.push(membersArr[i]);
    }
    else if ((document.getElementById("republican").checked && membersArr[i].party === "R") && (states === membersArr[i].state || states === "ALL")) {
      selectedPartyMembers.push(membersArr[i]);
    }
    else if ((document.getElementById("independent").checked && membersArr[i].party === "ID") && (states === membersArr[i].state || states === "ALL")) {
      selectedPartyMembers.push(membersArr[i]);
    }
    else if(((document.getElementById("independent").checked === false) && (document.getElementById("republican").checked === false) && (document.getElementById("democrat").checked===false)) && (states === membersArr[i].state || states === "ALL")){
      selectedPartyMembers.push(membersArr[i]);
    }
  }
  buildTableWhole(selectedPartyMembers);
};