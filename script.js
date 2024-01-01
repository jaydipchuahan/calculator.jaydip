function pick(val){
    document.getElementById("Display").value +=val;

}
function solve(){
    let x=document.getElementById("Display").value;
    let y=eval(x);
    document.getElementById("Display").value=y;
}
function clr(){
    document.getElementById("Display").value="";
}
function Min(){
    let display = document.getElementById('display').value;
    display = display.slice(0, -1);
    document.getElementById('display').value = display;
}
