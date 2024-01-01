function btnClick(val){
    document.getElementById("display").value +=val;
}
function solve(){
    let x=document.getElementById("display").value;
    let y=eval(x);
    document.getElementById("display").value=y;
}
function Clr(){
    document.getElementById("display").value="";
}
function Dlt() {
    let display = document.getElementById('display').value;
    display = display.slice(0, -1);
    document.getElementById('display').value = display;
  }
