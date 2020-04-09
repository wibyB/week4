function checkAB(num) {
    // you can only write your code here!
    var arr = []
    var cek = false

    for(i = 0; i < num.length ; i++){
      if(num[i] != ' '){
        arr.push(num[i])
      }
    }
    
    for(j = 0; j < arr.length; j++){
      if(arr[j] == 'a'){
        for(k = j; k<=(j+3); k++){
          if(arr[k] == 'b'){
            cek = true
          }
        }
      }
    }
    return cek
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed ')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false