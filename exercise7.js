function urutkanAbjad(str) {
    // you can only write your code here!

    var abj = 'abcdefghijklmnopqrstuvwxyz'
    var output = ''
    for(i = 0; i < abj.length; i++){
        for(j= 0 ; j < str.length; j++){
            if(str[j] == abj[i]){
                output += str[j]
            }
        }
    }
    return output        
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'