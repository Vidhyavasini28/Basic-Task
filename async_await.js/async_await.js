// async function fn(){
//     return 'Hiii..'
// }
// //console.log(fn())
// fn().then((msg)=>console.log(msg))

let reachA = new Promise((resolve,reject)=>{
    const reached= true
    if(reached)
        setTimeout(resolve,4000,"Vidhya reached")
    else
        reject("Vidhya not reached")

})
async function asyncfn(){
    try{
        console.log("HIII")
        res=await reachA
        console.log(res)
        console.log("Good bye")
    }
    catch(err){
        console.log(err)
    }
    
}

asyncfn()