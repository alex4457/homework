//算法




//680

var validPalindrome = function(s) {
    let left = 0,
        right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left , right -1);
        }
        left ++;
        right --;
    }
    return true;
};

const isPalindrome = (s, i ,j) => {
    let left = i,
        right = j;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

//infinite currying for addition

function add(x){
    let sum = x;
    function resultFn(y){
        sum += y;
        return resultFn;
    }
    resultFn.valueOf = function(){
            return sum;
        };
    return resultFn;
}

//debounce
function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(){
    console.log('Saving data');
  }
  const processChange = debounce(() => saveInput());

  //Explain React render
  /*
  Rendering is a process that is triggered by a change of state in some component of 
  your application, when a state change occurs React: It will collect from the root of 
  your App all the components that requested a re-render because their state or their props changed.

  Timeouts and Promises both serve to execute code in an asynchronous way but with differences characteristics and purposes:

  setTimeout - Delays the execution of a function by specific time duration. 
  - Does not block the rest of the code execution (asynchronous behavior) - 
  They create Macrotask (browser internal operation)

  Promises - They are a wrapper to allow asynchronous execution of code(Eg: an ajax call). 
  (Does not depend on specific time duration) - They are especially useful to chain different async calls. 
  - Does not block the rest of the code execution (asynchronous behavior) at less you are using the await operator.
  - They create Microtask (browser internal operation), which have priority over the Macrotask.

  */
