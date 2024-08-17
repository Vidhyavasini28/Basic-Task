//Immediately Invoked Function Expression(IIFE)

((a,b)=>{
    let res=a+b
    console.log(res)
})(5,6);

(()=>{
    let a=13
    let b=43
    let res=a+b
    console.log(res)
})();