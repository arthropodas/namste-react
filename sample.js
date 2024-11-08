setTimeout(()=>{
    console.log("time out")
},5000)

function x(y){
    y()
console.log("thi is x");
}

x( function y(){
    console.log("thi sis the y")
})

console.log("some things")