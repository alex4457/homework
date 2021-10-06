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