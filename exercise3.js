function cariMedian(arr) {
    // you can only write your code here!
    var median = 0
    var panjang = arr.length;

    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp;
            }
        }
    }
    console.log(arr)
    

    if (panjang % 2 === 0) {
        median = (arr[panjang / 2 - 1] + arr[panjang / 2]) / 2;
    } 
    else { 
        median = arr[(panjang - 1) / 2];    
    }
 
    return median;
  }
  
  // TEST CASES
  console.log(cariMedian([1,2,3,4,5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5