function SUM(){
    var sum = 0;
    var numberX = document.getElementById("numberX").value;
    var numberN = document.getElementById("numberN").value;
    
    for(var i = 1; i <= numberN; i++){
        sum += Math.pow(numberX, i);
    }

    document.getElementById("txtBtn").innerHTML = "Tổng là: " + sum;
}
document.getElementById("btnTinh").onclick = SUM;
// var S = 0;
// var n = 3;
// var x = 2;
// for(var i = 1; i <= 3; i++){
//     S += Math.pow(x, i);
// }
// console.log(S)


