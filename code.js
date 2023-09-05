let output = document.getElementById("input")

function display(num){
    output.value += num

}
function equ(){
    try{output.value=eval(output.value)}
    catch(err){
        alert("invalid")
    }
}
function ac(){
    output.value=""    
}
function del(){
    output.value=output.value.slice(0,-1)
}