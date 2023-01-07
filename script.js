/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map((e)=>{
    if(e.profession ==="developer"){
      console.log(e);
    }
  }
  )
}

function PrintDeveloperbyForEach() {
  arr.forEach((e)=>{
    if(e.profession ==="developer"){
      console.log(e);
    }
  }
  )
}

function addData() {
 arr.push({id: 4, name: "Akash", age: "25", profession: "developer"});
 console.log(arr);
}

function removeAdmin() {
  let filterArr=arr.filter((arr)=>arr.profession!=="admin");
  arr.pop();
  console.log(filterArr);
}

function concatenateArray() {
  let newArr=[{id: 5, name: "Prakash", age: "25", profession: "developer"}];
  let concatArr=arr.concat(newArr);
  console.log(concatArr);
}
