function randomcall(){
    return (((Math.floor(Math.random()*10)) %2 )=== 0 ) ? true : false
}
// we call randolmly true or false or random API



const resloveFunc=()=> {console.log("sucess")};

const rejectFunc=()=> {console.log("Fail")};

let newpromise = new Promise((resolve,reject)=>{

        setTimeout(()=>(randomcall() ? resolve() : reject()),2000)
        // if true return to resolve ho mean then main aae
        // else false main reject main aae mean catch main
    })
    
newpromise.then(resloveFunc)
.catch(rejectFunc)
console.log("AB YE LINE SAB SE PHEL CHALE GE")



// and
// and we can make a multipale thenuseing this ek ka return dosre main jae ga
// if phle false tu dosare nahi cahi ga and so on
// called promise tree
newpromise.then( () =>{

    console.log("MY data")
    return 6
})
.then((data)=>{
    console.log(data)
})

.catch(rejectFunc)