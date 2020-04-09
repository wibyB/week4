function ubahHuruf(kata) {
    // you can only write your code here!
    var abj = 'abcdefghijklmnopqrstuvwxyz'
    var output = ''
    for(i = 0; i < kata.length; i++){
        for(j= 0 ; j < abj.length; j++){
            if(kata[i] == abj[j]){
                output += abj[j+1]
            }
            else if(kata[i] == 'z'){
                output += 'a'
                break
            }
        }
    }
    return output
  }
  
  // TEST CASES
  console.log(ubahHuruf('wowz')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu