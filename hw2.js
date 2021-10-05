//算法1
var arr = [1, 4, 2, 3, 0, 5];

var target = 11;


function findTarget(arr, target) {
    var hashTable = {};
    arr.forEach(function (value, index) {
        hashTable[value] = index;
        //console.log(index);
    });


    for (var i = 0; i < arr.length; i++) {
        if (hashTable[target - arr[i]]) {
            //console.log([arr[hashTable[arg - arr[i]]], arr[i]]);
            return true;
        }
    }

    return false;

}

console.log(findTarget(arr, target));

//算法2

const mergeInterval=(arr)=>{
    arr.sort((a,b)=> a[0] - b[0]);
    let result = [];
    let current = arr[0];

    for(let i = 1; i<=arr.length;i++){
      if(arr[i]&&current[1]>=arr[i][0]){
        current[1] = Math.max(current[1],arr[i][1]);
      }else{
        result.push(current); // [1,6] i =3
        current = arr[i]//[7,9] i = 3
      }
    }
    return result;
  }

  //作业3
  function add(a,b){
  
        return a+b;

}


  function add(a){
    return function (b){
        return a+b;
    }
}

