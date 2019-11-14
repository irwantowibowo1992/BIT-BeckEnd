var arrJml = [10, 15, 8, 7, 14]
var n = arrJml.length  

function BeliSaham(input, n)
{
  if(n == 1)
    return 
  var i = 0
  while ( i < n - 1){
    while((i < n -1) && (input[i+1] <= input[i])){
      i++
    }
    if (i == n-1)
      break
    var beli = i++
    while ((i < n) && (input[i] >= input[i- 1])){
      i++
    }
    var jual = i - 1
  }
    return [beli, jual]
}

function ProfitMaks(ar){
  if ((arrJml[ar[1]] - arrJml[ar[0]]) > 0){
    return arrJml[ar[1]] - arrJml[ar[0]]
  }else{
    return 'Tidak dapat Membeli'}
}

ProfitMaks(BeliSaham(arrJml, n))