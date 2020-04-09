function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var pembagian = 0
    var arangka = []
    var str = ''
    var res = 0

    for(i = 0; i <= angka; i++){
        pembagian = angka / i
        str = String(i) + String(pembagian)

        if(pembagian % 1 == 0){
            arangka.push(str)
        }

        if(res == 0){
            res = str.length
        }else if(res > str.length){
            res = str.length
        }
    }
    // console.log(arangka)
    return res
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2