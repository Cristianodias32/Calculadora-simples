function insert(number){
    var numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + number;
}

function clean(){
    document.getElementById('display').innerHTML = "";
}

function back(){
    var display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display.substring(0, display.length -1);
}

function calcular(){
    var display = document.getElementById('display').innerHTML;
    if(display){
        document.getElementById('display').innerHTML = eval(display);
    } else{
        document.getElementById('display').innerHTML = "0";
    }
}
