function insert(num) {
// alert("Value Connected")
    document.getElementById("finalInput").value = document.getElementById("finalInput").value + num;
}

function equal() {
    var res = document.getElementById("finalInput").value;
  
        document.getElementById("finalInput").value = eval(res);
}

