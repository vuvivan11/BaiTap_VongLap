
function changeBG() {
    var divs = document.querySelectorAll("#content div");
    for (var i = 0; i < divs.length; i++) {
        if ((i + 1) % 2 == 0) {
            divs[i].style.background = "red";
        }
        else {
            divs[i].style.background = "green";
        }
    }

    document.getElementById("content").style.display = "block";
}
document.getElementById("btnTinh").onclick = changeBG;

