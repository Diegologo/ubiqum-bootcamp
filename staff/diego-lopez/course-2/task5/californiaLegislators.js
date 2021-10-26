let membersArr
let url = 'https://v3.openstates.org/people?jurisdiction=Arkansas'

function fetchFun(){
  fetch(url,{
    headers:{
      'X-API-Key':'ba8aa145-cb0e-4c40-b460-42a242e4aa90'
    }
  })
  .then((response)=>{
    console.log("funciona", response);
    return response.json();
  }).then(json =>{
    console.log(json);
    membersArr = json.results;
    buildTableWhole();
  }).catch((error)=>{
    console.log("no funciona", error);
  });
}
fetchFun()


//dropdown listener
let states = ""
document.getElementById("stateDropDown").addEventListener("change", function () {
  states = document.getElementById("stateDropDown").value;
  console.log(url)
  let initialUrl = "https://v3.openstates.org/people?jurisdiction=";
  url = `${initialUrl}${states.toString()}`;
  console.log(url);
  fetchFun()
});





// build table

function buildTableWhole(){

  document.getElementById("legislators").innerHTML = "";

  let table = document.getElementById("legislators");
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');


  //build table header
  let th1 = document.createElement('th');
  let th2 = document.createElement('th');
  let th3 = document.createElement('th');

  let head1 = document.createTextNode("Name");
  let head2 = document.createTextNode("Party");
  let head3 = document.createTextNode("Chamber");

  th1.appendChild(head1);
  th2.appendChild(head2);
  th3.appendChild(head3);

  thead.appendChild(th1);
  thead.appendChild(th2);
  thead.appendChild(th3);


//build table body

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
    let text3 = document.createTextNode(getChamberTitle(i))


    td1.appendChild(link);
    link.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
  
    tbody.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);
  }
};

