function changeMe(arr) {
    // you can only write your code here!
    var obj = {}

    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr[i].length; j++){
            if(j == 0){
            console.log(i+1+'. '+arr[i][j]+' '+arr[i][j+1]+':');
            }
                obj.firstName = arr[i][0]
                obj.lasstName = arr[i][1]
                obj.gender = arr[i][2]
           if(arr[i][3] != undefined){
               obj.age = 2019 - arr[i][3]
           }else{
               obj.age = 'Invalid Birth Year'
           } 
           
        }
        console.log(obj)
        // console.log(i,j)
    }
    if(arr.length == 0){
        console.log('""')
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""