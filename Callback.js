// CALL BACK EXAPMLE: normally use for anyc
// part 3
// now ek function ke uder dosara and phir us ke under 3 function (call back also)

function Timming(msg,hello){

    if (msg === "Day"){
        Day(hello);
    }
    else {
        Night(hello);
    }


}
function hello(){
    console.log("Hello World")
}
function Day(hello){
console.log("DAY")
hello();

}


function Night(hello){
console.log("NIGHT")
hello();
}

Timming("Day",hello);
