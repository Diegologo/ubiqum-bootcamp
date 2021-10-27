
//variables
let membersArr = []
let states = ""
let initialUrl = "https://v3.openstates.org/people?jurisdiction=";
let url = 'https://v3.openstates.org/people?jurisdiction=Arkansas'

function fetchFun(){
  fetch(url,{
    headers:{
      'X-API-Key':'ba8aa145-cb0e-4c40-b460-42a242e4aa90'
    }
  })
  .then((response)=>{
    console.log("API OK", response);
    return response.json();
  }).then(json =>{
    console.log(json);
    membersArr = json.results;
    buildTable();
  }).catch((error)=>{
    console.log("API ERROR", error);
  });
}
fetchFun()


//dropdown listener
document.getElementById("stateDropDown").addEventListener("change", function () {
  states = document.getElementById("stateDropDown").value;
  console.log(url)
  url = `${initialUrl}${states.toString()}`;
  console.log(url);
  fetchFun()
});


// build table
function buildTable(){

  document.getElementById("legislators").innerHTML = "";

  let tbody = document.getElementById("legislators");

function getChamberTitle(index){
  return membersArr[index].current_role.title;
}


  for (let i = 0; i < membersArr.length; i++){

  
    let tr = document.createElement('tr');

    let link = document.createElement('a');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    link.setAttribute('href', membersArr[i].openstates_url);
  
    let text1 = document.createTextNode(membersArr[i].name);
    let text2 = document.createTextNode(membersArr[i].party);
    let text3 = document.createTextNode(getChamberTitle(i));


    td1.appendChild(link);
    link.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
  
    tbody.appendChild(tr);
  }
};

