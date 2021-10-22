/*això es un intent de filtre, no xuta
Vue.filter('filterParty', function(array,partyToFilter){
  return array.filter(filter => filter.party === partyToFilter)
})*/

var app = new Vue(
  {  
  el: '#app',  
  data: {
    checkedParty: [],
    checkedState: "ALL",
    filteredByPartyArr: [],
    filteredByStateArr: [],
    filteredTwice: [],
    membersArr: [],
    selectedParty: [],
  },

//fetch
  methods :{
    fetchData: function(){
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
    console.log(app.membersArr);
    return app.membersArr;
  }).catch((error)=>{
    console.log("no funciona", error);
  })
  },
  },
  computed :{
      filterFun: function(){
      this.filteredByPartyArr= [...this.membersArr].filter(filter => this.checkedParty.includes(filter.party));
      this.filteredByStateArr= [...this.membersArr].filter(filter => this.checkedState.includes(filter.state));
      this.filteredTwice= [...this.filteredByPartyArr].filter(filter => this.checkedState.includes(filter.state));
      if ((this.filteredByPartyArr.length === 0) && (this.checkedState === "ALL")){
        return this.membersArr;
      }else if ((this.filteredByPartyArr.length === 0) && (this.checkedState !== "ALL")){
        return this.filteredByStateArr
      }else{
        return this.filteredTwice;
      }
    },
    //filterStateFun: function(){

    //}
  },
});
app.fetchData();


//listeners
/*
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
*/