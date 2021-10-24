// while loop
var soChan = "";
var soLe = "";

// var n = 1;
// while (n < 100) {
//     if(n % 2 == 0){
//         soChan += " " + n;
//     }else{
//         soLe += " " + n;
//     }
//     n++;
// }
// document.write("Số chẵn là: " + soChan + "<br>"); 
// document.write("Số lẻ là: " + soLe);

// for loop
for (var i = 1; i < 100; i++){
    if (i % 2 == 0){
        soChan += " " + i;
    }else{
        soLe += " " + i;
    }
}
document.write("Số chẵn là: " + soChan + "<br>"); 
document.write("Số lẻ là: " + soLe);

