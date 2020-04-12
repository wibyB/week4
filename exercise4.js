function cariModus(arr) {
    // you can only write your code here!
    var dobel = []
    var hasil = 0
    for(i = 0 ; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp;
            }
        }
        
    }
    // console.log(arr)
    for(a = 0; a < arr.length; a ++){
      var count = 0
        for(b = 0; b < arr.length; b++){
         if(arr[a] == arr[b]){
             count++
         }

         
        }
        dobel.push(count)
    }
    
var max = dobel[0]
var angka = arr[0]
var count = 0
   for(c = 0; c < dobel.length -1; c++){
     if(dobel[c] == dobel[c+1]){
       count++
     }
     if(dobel[c] > max){
         max = dobel[c]
         angka = arr[c]
     }
       
  }
  if(count == dobel.length-1){
  return -1
  }
  else {
      return angka
  }
}
  //kasih if di for,,kalau nilai nya sama count++ lagi,,baru di cek kl count==dobel.length -1 maka direturn -1, kl tidak di return arr[hasil]
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1