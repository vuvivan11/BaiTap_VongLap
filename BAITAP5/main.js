function giaiThua(){
    var numberN = document.getElementById("numberN").value;
    var giaithua = 1;
    for(var i = 1; i <= numberN; i++){
        giaithua *= i;
    }
    document.getElementById("txtBtn").innerHTML = giaithua;
}
document.getElementById("btnTinh").onclick = giaiThua;