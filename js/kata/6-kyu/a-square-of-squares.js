//Given an integral number, determine if it's a square number

var isSquare = function(n){
    if (n < 0) {
        return false;
    }
    for (let i = 0; i <= n; i++) {
        let result = i * i;
        if (result === n) {
            return true;
        }
    }
    return false;
  };
