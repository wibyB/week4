function fpb(angka1, angka2) {
    // you can only write your code here!
    var arangka1 = []
    var arangka2 = [] 
    
    for(a = 0; a <= angka1 ; a++){
      for(b = angka1 ; b > 0 ; b--){
        if(a * b === angka1){
          arangka1.push(a)
          break
        }
      }
    }
    console.log(arangka1)
    for(c = 0; c <= angka2 ; c++){
      for(d = angka2; d > 0; d--){
        if (c * d === angka2){
          arangka2.push(c)
        }
      }
    }
    console.log(arangka2)
    for(d = arangka1.length-1; d >= 0; d--){
      for(e = arangka2.length-1; e>=0; e--){
        if(arangka1[d] === arangka2[e]){
          return arangka1[d]
        }
      }
    }
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1