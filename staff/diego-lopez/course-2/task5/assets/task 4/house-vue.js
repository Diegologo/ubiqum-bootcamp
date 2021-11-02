var app = new Vue(
  {
  el: '#app',
  data: {
    //variable declarations
    checkedParty: [],
    checkedState: "ALL",
    filteredByPartyArr: [],
    filteredByStateArr: [],
    filteredTwice: [],
    membersArr: [],
    selectedParty: [],
    const: spinner = document.getElementById("spinner"),
  },
  

  //fetch
  methods :{
    fetchData: function(){
    spinner.removeAttribute('hidden');
    fetch('https://api.propublica.org/congress/v1/113/house/members.json',{
    headers:{
      'X-API-Key':'zVc5hB9SJPb7D3LskxNmV0TEicAghQQ4KOETtdFB'
    }
  })
  .then((response)=>{
    console.log("API feedback OK", response);
    return response.json();
  }).then(json =>{
    app.membersArr = json.results[0].members;
    spinner.setAttribute('hidden', '');
    return app.membersArr;
  }).catch((error)=>{
    console.log("NO API feedback", error);
  })
  },
  },
  computed :{
  //filters
    filterFun: function(){
      this.filteredByPartyArr= [...this.membersArr].filter(filter => this.checkedParty.includes(filter.party));
      this.filteredByStateArr= [...this.membersArr].filter(filter => this.checkedState.includes(filter.state));
      this.filteredTwice= [...this.filteredByPartyArr].filter(filter => this.checkedState.includes(filter.state));

      if ((this.checkedParty.length === 0) && (this.checkedState === "ALL")){
        return this.membersArr;
      }else if ((this.checkedParty.length === 0) && (this.checkedState !== "ALL")){
        return this.filteredByStateArr;
      }else if ((this.checkedParty.length !== 0) && (this.checkedState !== "ALL")){
        return this.filteredTwice;
      }else{
        return this.filteredByPartyArr;
      }
    },
  },
  created: function(){
    this.fetchData();
  },
});