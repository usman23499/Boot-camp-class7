function APIfecth(){
    let mypromise=new Promise( (resolve,reject)=>{

           setTimeout(()=>{
               console.log("New Promise");
            //    resolve("end data");
            
            // resolve chale ga ab 
               reject(); 
               
            // if we write here reject without any condtion ty ye chale ga mean error or false
            
            // reject("Errror")
            // is main neche catch run kare ga
        },1000) 

    }

    )
    
    return mypromise;
}
// now we use async ye khud make async function 

async function async_fun(){

    try {
        let data = await APIfecth() // true and complte fectch pe chale ga
        // await wait kara ga until data nahi tu agge nahi jae ga
        // if we remove awit tu aage chle ga and data bad  main aae ga 
       // ye reject pe neche wala function chale ga
        console.log(data,"Sucesfull")

    } catch (error) {
        // ye reject pe chale ga

        console.log(error,"error") 

    }
}

async_fun()
// 1000 ke bad aage chale ga

