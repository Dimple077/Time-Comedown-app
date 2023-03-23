const EndDate = "10 february 2024 00:00 AM";
document.getElementById("Time").innerHTML=EndDate;
 const input =document.querySelectorAll("input");
 

function clock() {
    const end = new Date(EndDate)
    const now = new Date()

    const remanigTime= end-now;
    // conver in to seconds
    const rmtime= remanigTime/1000;


    if (rmtime<0)
    return; 
        
    
    // conver in to day
    const day= Math.floor(rmtime/3600/24);
    // console.log(day)

    input[0].value=day;
    //  convert in to hours
    const Hours = Math.floor((rmtime/3600)%24);
    // console.log(Hours);
    input[1].value=Hours;
    //  convert in to min
    const mintes= Math.floor((rmtime/60)%60);
    // console.log(mintes);
    input[2].value=mintes;

       //  convert in to seconds
    const seconds= Math.floor((rmtime)%60);
    // console.log(seconds);
    input[3].value=seconds;


    // rbackgroundcolor.style.backgroundcolor = randomcolor();
    

}

setInterval(
    ()=>{
        clock();
        hello();
    }
)

 

const randomcolor = () => {
    let val ="1234567890abcdef"
    let cons ="#"
    for(let i=0; i<6;i++){
        cons= cons+val[Math.floor(Math.random() * 16)]

    }
    return cons;

}
//  console.log(randomcolor())

// rbackgroundcolor.style.backgroundcolor = randomcolor();

function hello(){
    input[0].style.backgroundColor=randomcolor();
    input[1].style.backgroundColor=randomcolor();
    input[2].style.backgroundColor=randomcolor();
    input[3].style.backgroundColor=randomcolor();
    // document.body.style.backgroundColor=randomcolor();
}






