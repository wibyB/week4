function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var hasil = []
    var asal = 0
    var destinasi = 0
    for(i=0; i< arrPenumpang.length; i++){
      for(b = 0; b<rute.length; b++){
        if(rute[b] == arrPenumpang[i][1]){
           asal = b
        }
        else if(rute[b] == arrPenumpang[i][2]){
           destinasi = b
        }
      }
      hasil.push({
        penumpang: arrPenumpang[i][0],
        naikDari: arrPenumpang[i][1],
        tujuan: arrPenumpang[i][2],
        bayar: (destinasi - asal) * 2000
      })
    }
    
    return hasil
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  // console.log(naikAngkot([])); //[]