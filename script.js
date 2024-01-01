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
    document.getElementById("Display").value --;
}